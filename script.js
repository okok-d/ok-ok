const SUPABASE_URL = "https://xsehbpikhmofqjeandey.supabase.co";
const SUPABASE_KEY = "sb_publishable_bC53WFgEwu4NDllgbYqjUQ_eCMcG3vl";

const db = window.supabase.createClient(
    SUPABASE_URL,
    SUPABASE_KEY
);

// Account elements
const signupArea = document.getElementById("signupArea");
const loginArea = document.getElementById("loginArea");
const authArea = document.getElementById("authArea");
const chatArea = document.getElementById("chatArea");

const signupUsername = document.getElementById("signupUsername");
const signupEmail = document.getElementById("signupEmail");
const signupPassword = document.getElementById("signupPassword");

const loginEmail = document.getElementById("loginEmail");
const loginPassword = document.getElementById("loginPassword");

const signupButton = document.getElementById("signupButton");
const loginButton = document.getElementById("loginButton");
const logoutButton = document.getElementById("logoutButton");

// Chat elements
const messages = document.getElementById("messages");
const input = document.getElementById("message");
const sendButton = document.getElementById("sendButton");
const currentUser = document.getElementById("currentUser");
const status = document.getElementById("status");

// Tabs and DM elements
const tabPublic = document.getElementById("tabPublic");
const tabDMs = document.getElementById("tabDMs");
const dmBadge = document.getElementById("dmBadge");
const publicPanel = document.getElementById("publicPanel");
const dmPanel = document.getElementById("dmPanel");
const dmListView = document.getElementById("dmListView");
const dmList = document.getElementById("dmList");
const dmChatView = document.getElementById("dmChatView");
const dmBack = document.getElementById("dmBack");
const dmHeaderAvatar = document.getElementById("dmHeaderAvatar");
const dmHeaderName = document.getElementById("dmHeaderName");
const dmMessages = document.getElementById("dmMessages");
const dmInput = document.getElementById("dmInput");
const dmSendButton = document.getElementById("dmSendButton");

// Profile elements
const profileModal = document.getElementById("profileModal");
const profileAvatar = document.getElementById("profileAvatar");
const profileName = document.getElementById("profileName");
const profileBio = document.getElementById("profileBio");
const profileEdit = document.getElementById("profileEdit");
const avatarFile = document.getElementById("avatarFile");
const bioInput = document.getElementById("bioInput");
const saveProfileButton = document.getElementById("saveProfile");
const myProfileButton = document.getElementById("myProfileButton");
const messageButton = document.getElementById("messageButton");

const usernamePattern = /^[a-z1-9_]{1,20}$/;

let currentSession = null;
let chatChannel = null;

// ---------- Dark mode ----------

const themeToggle = document.getElementById("themeToggle");

function updateThemeLabel() {
    const dark = document.documentElement.dataset.theme === "dark";
    themeToggle.textContent = dark ? "☀️ Light" : "🌙 Dark";
}

themeToggle.addEventListener("click", () => {
    const next =
        document.documentElement.dataset.theme === "dark" ? "light" : "dark";

    document.documentElement.dataset.theme = next;

    try {
        localStorage.setItem("theme", next);
    } catch (e) {
        // Storage can be blocked; the theme still changes for this visit
    }

    updateThemeLabel();
});

updateThemeLabel();

// ---------- Sign up / log in ----------

// Switch between signup and login
document.getElementById("showLogin").addEventListener("click", (event) => {
    event.preventDefault();
    signupArea.hidden = true;
    loginArea.hidden = false;
});

document.getElementById("showSignup").addEventListener("click", (event) => {
    event.preventDefault();
    loginArea.hidden = true;
    signupArea.hidden = false;
});

// Create account
signupButton.addEventListener("click", async () => {
    const username = signupUsername.value.trim();
    const email = signupEmail.value.trim();
    const password = signupPassword.value;

    if (!usernamePattern.test(username)) {
        status.textContent =
            "Username must be 1-20 characters: a-z, 1-9, or _";
        return;
    }

    if (!email || password.length < 8) {
        status.textContent = "Enter an email and a password of at least 8 characters.";
        return;
    }

    signupButton.disabled = true;
    status.textContent = "Creating account...";

    const { data, error } = await db.auth.signUp({
        email: email,
        password: password,
        options: {
            data: {
                username: username
            }
        }
    });

    signupButton.disabled = false;

    if (error) {
        status.textContent = "Signup failed: " + error.message;
        return;
    }

    if (data.session) {
        status.textContent = "Account created!";
        await updateAccount(data.session);
    } else {
        status.textContent =
            "Check your email to confirm your account, then log in.";
    }
});

// Log in
loginButton.addEventListener("click", async () => {
    const email = loginEmail.value.trim();
    const password = loginPassword.value;

    loginButton.disabled = true;
    status.textContent = "Logging in...";

    const { data, error } = await db.auth.signInWithPassword({
        email: email,
        password: password
    });

    loginButton.disabled = false;

    if (error) {
        status.textContent = "Login failed: " + error.message;
        return;
    }

    await updateAccount(data.session);
});

// Log out
logoutButton.addEventListener("click", async () => {
    const { error } = await db.auth.signOut();

    if (error) {
        status.textContent = "Logout failed: " + error.message;
        return;
    }

    currentSession = null;
    profileModal.hidden = true;
    resetDMs();
    authArea.hidden = false;
    chatArea.hidden = true;
    status.textContent = "Logged out.";
});

// Update account screen
async function updateAccount(session) {
    currentSession = session;

    if (!session) {
        resetDMs();
        authArea.hidden = false;
        chatArea.hidden = true;
        return;
    }

    authArea.hidden = true;
    chatArea.hidden = false;

    const { data: profile, error } = await db
        .from("profiles")
        .select("username")
        .eq("id", session.user.id)
        .single();

    if (error) {
        status.textContent = "Profile error: " + error.message;
        console.error(error);
        return;
    }

    currentUser.textContent = "Logged in as: " + profile.username;

    listenForDMs();
    await loadMessages();
    status.textContent = "Connected to chat!";
}

// ---------- Profiles ----------

// Cache so each profile is only fetched once
const profileCache = new Map();
let viewedProfileId = null;

function getProfile(userId, force = false) {
    if (!force && profileCache.has(userId)) return profileCache.get(userId);

    const request = db
        .from("profiles")
        .select("id, username, bio, avatar_url")
        .eq("id", userId)
        .single()
        .then(({ data }) => data);

    profileCache.set(userId, request);
    return request;
}

function renderAvatar(el, profile) {
    el.replaceChildren();
    const url = profile && profile.avatar_url;

    // Only trust images from your own Supabase storage
    if (url && url.startsWith(SUPABASE_URL + "/storage/")) {
        const img = document.createElement("img");
        img.src = url;
        img.alt = "";
        el.appendChild(img);
    } else {
        el.textContent = ((profile && profile.username) || "?")[0].toUpperCase();
    }
}

async function openProfile(userId) {
    viewedProfileId = userId;
    profileModal.hidden = false;
    profileName.textContent = "Loading...";
    profileBio.textContent = "";
    profileAvatar.replaceChildren();
    profileEdit.hidden = true;
    messageButton.hidden = true;

    const profile = await getProfile(userId, true);

    if (viewedProfileId !== userId) return;

    if (!profile) {
        profileName.textContent = "Profile not found";
        return;
    }

    renderAvatar(profileAvatar, profile);
    profileName.textContent = profile.username;
    profileBio.textContent = profile.bio || "No bio yet.";

    const isMine = currentSession && currentSession.user.id === userId;
    profileEdit.hidden = !isMine;
    messageButton.hidden = isMine || !currentSession;

    if (isMine) {
        bioInput.value = profile.bio || "";
        avatarFile.value = "";
    }
}

async function saveProfile() {
    if (!currentSession) return;

    const userId = currentSession.user.id;
    const updates = { bio: bioInput.value.trim().slice(0, 300) };
    const file = avatarFile.files[0];

    saveProfileButton.disabled = true;

    if (file) {
        const allowed = ["image/png", "image/jpeg", "image/webp", "image/gif"];

        if (!allowed.includes(file.type) || file.size > 5 * 1024 * 1024) {
            status.textContent = "Avatar must be a PNG, JPG, WebP, or GIF under 5 MB.";
            saveProfileButton.disabled = false;
            return;
        }

        const path = userId + "/avatar";

        const { error: uploadError } = await db.storage
            .from("avatars")
            .upload(path, file, { upsert: true, contentType: file.type });

        if (uploadError) {
            status.textContent = "Upload failed: " + uploadError.message;
            saveProfileButton.disabled = false;
            return;
        }

        const { data } = db.storage.from("avatars").getPublicUrl(path);
        updates.avatar_url = data.publicUrl + "?v=" + Date.now(); // bust cache
    }

    const { error } = await db
        .from("profiles")
        .update(updates)
        .eq("id", userId);

    saveProfileButton.disabled = false;

    if (error) {
        status.textContent = "Save failed: " + error.message;
        return;
    }

    profileCache.delete(userId);
    await openProfile(userId);
    await loadMessages();
    status.textContent = "Profile saved!";
}

myProfileButton.addEventListener("click", () => {
    if (currentSession) openProfile(currentSession.user.id);
});

messageButton.addEventListener("click", () => {
    if (!viewedProfileId) return;
    profileModal.hidden = true;
    openConversation(viewedProfileId);
});

saveProfileButton.addEventListener("click", saveProfile);

document.getElementById("closeProfile").addEventListener("click", () => {
    profileModal.hidden = true;
});

profileModal.addEventListener("click", (event) => {
    if (event.target === profileModal) profileModal.hidden = true;
});

document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") profileModal.hidden = true;
});

// ---------- Public messages ----------

// Display a message
function displayMessage(msg) {
    const item = document.createElement("div");
    item.className = "message";

    const avatar = document.createElement("div");
    avatar.className = "avatar";
    avatar.textContent = "?";
    avatar.addEventListener("click", () => openProfile(msg.user_id));

    const body = document.createElement("div");
    body.className = "message-body";

    const name = document.createElement("button");
    name.className = "name-link";
    name.textContent = msg.username || "Unknown";
    name.addEventListener("click", () => openProfile(msg.user_id));

    const text = document.createElement("span");
    text.textContent = ": " + msg.content;

    const time = document.createElement("small");
    time.textContent = new Date(msg.created_at).toLocaleString();

    const line = document.createElement("div");
    line.append(name, text);
    body.append(line, time);
    item.append(avatar, body);

    messages.appendChild(item);
    messages.scrollTop = messages.scrollHeight;

    // Fill in avatar and name once the profile loads
    getProfile(msg.user_id).then((profile) => {
        renderAvatar(avatar, profile);
        if (profile) name.textContent = profile.username;
    });
}

// Load messages
async function loadMessages() {
    const { data, error } = await db
        .from("messages")
        .select("*")
        .order("created_at", { ascending: true });

    if (error) {
        status.textContent = "Message loading failed: " + error.message;
        console.error(error);
        return;
    }

    messages.replaceChildren();
    data.forEach(displayMessage);
}

// Send message
async function sendMessage() {
    if (!currentSession) {
        status.textContent = "Please log in first.";
        return;
    }

    const content = input.value.trim();

    if (!content || content.length > 1000) return;

    sendButton.disabled = true;

    const { error } = await db
        .from("messages")
        .insert({
            user_id: currentSession.user.id,
            content: content
        });

    if (error) {
        status.textContent = "Message failed: " + error.message;
        console.error(error);
    } else {
        input.value = "";
        status.textContent = "Message sent!";
    }

    sendButton.disabled = false;
    input.focus();
}

sendButton.addEventListener("click", sendMessage);

input.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        sendMessage();
    }
});

// Live message updates
function listenForMessages() {
    if (chatChannel) return;

    chatChannel = db
        .channel("chat-room")
        .on(
            "postgres_changes",
            {
                event: "INSERT",
                schema: "public",
                table: "messages"
            },
            (payload) => {
                displayMessage(payload.new);
            }
        )
        .subscribe((state) => {
            console.log("Realtime:", state);

            if (state === "SUBSCRIBED") {
                status.textContent = "Connected to chat!";
            } else if (
                state === "CHANNEL_ERROR" ||
                state === "TIMED_OUT" ||
                state === "CLOSED"
            ) {
                status.textContent = "Connection issue: " + state;
            }
        });
}

// ---------- Direct messages ----------

let activeDM = null;          // user id of the open conversation
let dmChannel = null;
const unreadFrom = new Set(); // user ids with unread messages (this visit only)
const shownDMs = new Set();   // message ids already on screen

function updateBadge() {
    dmBadge.hidden = unreadFrom.size === 0;
    dmBadge.textContent = unreadFrom.size;
}

function switchPanel(showDMs) {
    publicPanel.hidden = showDMs;
    dmPanel.hidden = !showDMs;
    tabPublic.classList.toggle("active", !showDMs);
    tabDMs.classList.toggle("active", showDMs);
}

tabPublic.addEventListener("click", () => switchPanel(false));

tabDMs.addEventListener("click", () => {
    if (activeDM) {
        openConversation(activeDM);
    } else {
        loadConversations();
    }
});

dmBack.addEventListener("click", () => loadConversations());

// Show the list of people you've talked to
async function loadConversations() {
    if (!currentSession) return;

    switchPanel(true);
    activeDM = null;
    dmListView.hidden = false;
    dmChatView.hidden = true;

    const me = currentSession.user.id;

    const { data, error } = await db
        .from("direct_messages")
        .select("*")
        .order("created_at", { ascending: false })
        .limit(500);

    if (error) {
        status.textContent = "Could not load DMs: " + error.message;
        console.error(error);
        return;
    }

    // Keep only the newest message per person
    const latest = new Map();

    data.forEach((m) => {
        const other = m.sender_id === me ? m.recipient_id : m.sender_id;
        if (!latest.has(other)) latest.set(other, m);
    });

    dmList.replaceChildren();

    if (latest.size === 0) {
        const empty = document.createElement("p");
        empty.className = "dm-empty";
        empty.textContent =
            "No conversations yet. Click a username in the public chat and press Message.";
        dmList.appendChild(empty);
        return;
    }

    latest.forEach((last, otherId) => {
        const row = document.createElement("button");
        row.className = "dm-row";

        const avatar = document.createElement("div");
        avatar.className = "avatar";
        avatar.textContent = "?";

        const textBox = document.createElement("div");
        textBox.className = "dm-text";

        const name = document.createElement("strong");
        name.textContent = "Loading...";

        const preview = document.createElement("span");
        preview.className = "dm-preview";
        preview.textContent =
            (last.sender_id === me ? "You: " : "") + last.content;

        textBox.append(name, preview);
        row.append(avatar, textBox);

        if (unreadFrom.has(otherId)) {
            const dot = document.createElement("span");
            dot.className = "badge";
            dot.textContent = "new";
            row.appendChild(dot);
        }

        row.addEventListener("click", () => openConversation(otherId));
        dmList.appendChild(row);

        getProfile(otherId).then((profile) => {
            renderAvatar(avatar, profile);
            name.textContent = profile ? profile.username : "Unknown";
        });
    });
}

// Show one conversation
async function openConversation(userId) {
    if (!currentSession) return;

    const me = currentSession.user.id;

    activeDM = userId;
    unreadFrom.delete(userId);
    updateBadge();

    switchPanel(true);
    dmListView.hidden = true;
    dmChatView.hidden = false;
    dmMessages.replaceChildren();
    shownDMs.clear();
    dmHeaderName.textContent = "Loading...";
    dmHeaderAvatar.replaceChildren();

    const profile = await getProfile(userId);

    if (activeDM !== userId) return;

    dmHeaderName.textContent = profile ? profile.username : "Unknown";
    renderAvatar(dmHeaderAvatar, profile);

    const { data, error } = await db
        .from("direct_messages")
        .select("*")
        .or(
            "and(sender_id.eq." + me + ",recipient_id.eq." + userId + ")," +
            "and(sender_id.eq." + userId + ",recipient_id.eq." + me + ")"
        )
        .order("created_at", { ascending: true });

    if (activeDM !== userId) return;

    if (error) {
        status.textContent = "Could not load messages: " + error.message;
        console.error(error);
        return;
    }

    data.forEach(displayDM);
    dmInput.focus();
}

function displayDM(m) {
    if (shownDMs.has(m.id)) return;
    shownDMs.add(m.id);

    const mine = currentSession && m.sender_id === currentSession.user.id;

    const item = document.createElement("div");
    item.className = "message dm-msg" + (mine ? " mine" : "");

    const text = document.createElement("div");
    text.textContent = m.content;

    const time = document.createElement("small");
    time.textContent = new Date(m.created_at).toLocaleString();

    item.append(text, time);
    dmMessages.appendChild(item);
    dmMessages.scrollTop = dmMessages.scrollHeight;
}

async function sendDM() {
    if (!currentSession || !activeDM) return;

    const content = dmInput.value.trim();

    if (!content || content.length > 1000) return;

    dmSendButton.disabled = true;

    const { data, error } = await db
        .from("direct_messages")
        .insert({
            sender_id: currentSession.user.id,
            recipient_id: activeDM,
            content: content
        })
        .select()
        .single();

    dmSendButton.disabled = false;

    if (error) {
        status.textContent = "Message failed: " + error.message;
        console.error(error);
        return;
    }

    dmInput.value = "";
    displayDM(data);
    dmInput.focus();
}

dmSendButton.addEventListener("click", sendDM);

dmInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") sendDM();
});

// Live direct messages (only rows you sent or received arrive)
function listenForDMs() {
    if (dmChannel) return;

    dmChannel = db
        .channel("direct-messages")
        .on(
            "postgres_changes",
            {
                event: "INSERT",
                schema: "public",
                table: "direct_messages"
            },
            (payload) => {
                if (!currentSession) return;

                const m = payload.new;
                const me = currentSession.user.id;

                if (m.sender_id !== me && m.recipient_id !== me) return;

                const other = m.sender_id === me ? m.recipient_id : m.sender_id;
                const viewing = !dmPanel.hidden && activeDM === other;

                if (viewing) {
                    displayDM(m);
                } else if (m.recipient_id === me) {
                    unreadFrom.add(other);
                    updateBadge();
                }

                // Refresh the list if it's showing
                if (!dmPanel.hidden && dmChatView.hidden) loadConversations();
            }
        )
        .subscribe();
}

function resetDMs() {
    activeDM = null;
    unreadFrom.clear();
    shownDMs.clear();
    updateBadge();
    dmList.replaceChildren();
    dmMessages.replaceChildren();
    dmListView.hidden = false;
    dmChatView.hidden = true;
    switchPanel(false);

    if (dmChannel) {
        db.removeChannel(dmChannel);
        dmChannel = null;
    }
}

// ---------- Startup ----------

// Restore login when page opens
async function startChat() {
    listenForMessages();

    const { data, error } = await db.auth.getSession();

    if (error) {
        status.textContent = "Session error: " + error.message;
        return;
    }

    await updateAccount(data.session);
}

// Listen for login/logout changes
db.auth.onAuthStateChange((event, session) => {
    if (event === "SIGNED_IN" || event === "SIGNED_OUT") {
        updateAccount(session);
    }
});

startChat();
