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

const usernamePattern = /^[a-z1-9_]{1,20}$/;

let currentSession = null;
let chatChannel = null;

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
    authArea.hidden = false;
    chatArea.hidden = true;
    status.textContent = "Logged out.";
});

// Update account screen
async function updateAccount(session) {
    currentSession = session;

    if (!session) {
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

    await loadMessages();
    status.textContent = "Connected to chat!";
}

// ---------- Profiles ----------

// Cache so each profile is only fetched once
const profileCache = new Map();

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
    profileModal.hidden = false;
    profileName.textContent = "Loading...";
    profileBio.textContent = "";
    profileAvatar.replaceChildren();
    profileEdit.hidden = true;

    const profile = await getProfile(userId, true);

    if (!profile) {
        profileName.textContent = "Profile not found";
        return;
    }

    renderAvatar(profileAvatar, profile);
    profileName.textContent = profile.username;
    profileBio.textContent = profile.bio || "No bio yet.";

    const isMine = currentSession && currentSession.user.id === userId;
    profileEdit.hidden = !isMine;

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
        const allowed = ["image/png", "image/jpeg", "image/webp"];

        if (!allowed.includes(file.type) || file.size > 2 * 1024 * 1024) {
            status.textContent = "Avatar must be a PNG, JPG, or WebP under 2 MB.";
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

// ---------- Messages ----------

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
