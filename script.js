const SUPABASE_URL = "https://xsehbpikhmofqjeandey.supabase.co";
const SUPABASE_KEY = "sb_publishable_bC53WFgEwu4NDllgbYqjUQ_eCMcG3vl";

const db = window.supabase.createClient(
    SUPABASE_URL,
    SUPABASE_KEY
);

// Icons: positions in icons.png (column, row)
const ICONS = {
    "user": [0, 0], "users": [1, 0], "crown": [2, 0], "shield-star": [3, 0],
    "trophy": [4, 0], "award": [5, 0], "gift": [6, 0], "gear": [7, 0],
    "star": [8, 0], "heart": [9, 0], "diamond": [10, 0], "fire": [11, 0],
    "bolt": [12, 0], "skull": [13, 0], "shield-check": [14, 0],
    "star-circle": [0, 1], "crown-circle": [1, 1], "flask": [2, 1], "cart": [3, 1],
    "calendar": [4, 1], "clock": [5, 1], "bars": [6, 1], "target": [7, 1],
    "bug": [8, 1], "code": [9, 1], "palette": [10, 1], "wrench": [11, 1],
    "hammer": [12, 1], "tools": [13, 1], "binoculars": [14, 1], "search": [15, 1],
    "emblem": [0, 2], "chevrons-down": [1, 2], "chevrons-up": [2, 2],
    "star-badge": [3, 2], "hexagon": [4, 2], "layers": [5, 2], "crown-2": [6, 2],
    "laurel": [7, 2], "wings-crown": [8, 2], "wings-star": [9, 2],
    "shield-star-2": [10, 2], "shield-lock": [11, 2], "cube-hex": [12, 2],
    "cube": [13, 2], "coins": [14, 2], "ticket": [15, 2],
    "ticket-star": [0, 3], "ticket-crown": [1, 3], "skull-bones": [2, 3],
    "biohazard": [3, 3], "radiation": [4, 3], "snowflake": [5, 3], "sun": [6, 3],
    "moon": [7, 3], "cloud": [8, 3], "drop": [9, 3], "leaf": [10, 3],
    "paw": [11, 3], "cat": [12, 3], "bunny": [13, 3], "creeper": [14, 3],
    "pixel-heart": [15, 3],
    "gamepad": [0, 4], "monitor": [1, 4], "phone": [2, 4], "play": [3, 4],
    "forward": [4, 4], "rewind": [5, 4], "pause": [6, 4], "stop": [7, 4],
    "record": [8, 4], "volume": [9, 4], "mute": [10, 4], "bell": [11, 4],
    "pin": [12, 4], "location": [13, 4], "flag": [14, 4], "checkered-flag": [15, 4],
    "tools-2": [0, 5], "brush": [1, 5], "pen-nib": [2, 5], "camera": [3, 5],
    "video": [4, 5], "image": [5, 5], "document": [6, 5], "folder": [7, 5],
    "chat": [8, 5], "message": [9, 5], "mail": [10, 5], "question": [11, 5],
    "warning": [12, 5], "info": [13, 5], "terminal": [14, 5], "globe": [15, 5]
};

function makeIcon(name, color) {
    const span = document.createElement("span");
    span.className = "icon";

    const pos = ICONS[name];

    if (pos) {
        const position = (pos[0] * 100 / 15) + "% " + (pos[1] * 100 / 5) + "%";
        span.style.maskPosition = position;
        span.style.webkitMaskPosition = position;
    }

    if (color) span.style.color = color;

    return span;
}

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

// New chat elements (online list, typing, reply bar)
const onlineBar = document.getElementById("onlineBar");
const typingEl = document.getElementById("typing");
const replyBar = document.getElementById("replyBar");
const replyText = document.getElementById("replyText");
document.getElementById("replyCancel").addEventListener("click", () => clearReply());

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
const profileHandle = document.getElementById("profileHandle");
const profileBadges = document.getElementById("profileBadges");
const displayNameInput = document.getElementById("displayNameInput");
const roomTabs = document.getElementById("roomTabs");
const profileBanner = document.getElementById("profileBanner");
const bannerFile = document.getElementById("bannerFile");
const fontSelect = document.getElementById("fontSelect");
const modSection = document.getElementById("modSection");
const badgeManager = document.getElementById("badgeManager");
const banButton = document.getElementById("banButton");

// Admin elements
const tabAdmin = document.getElementById("tabAdmin");
const adminPanel = document.getElementById("adminPanel");
const adminStats = document.getElementById("adminStats");
const adminRooms = document.getElementById("adminRooms");
const adminSearch = document.getElementById("adminSearch");
const adminRefresh = document.getElementById("adminRefresh");
const adminList = document.getElementById("adminList");

const usernamePattern = /^[a-z0-9_]{1,20}$/;

let currentSession = null;
let loadedUserId = null; // the user whose chat is currently loaded
let chatChannel = null;
let activeRoom = "goldfish";
let myUsername = "";
let replyingTo = null;
let presenceChannel = null;
let typingTimer = null;
let audioCtx = null;
const messageCache = new Map(); // message id -> message row

// Roles (these only control what buttons show; the database enforces the rules)
let isStaff = false;
let isOwner = false;
let isBanned = false;
let allBadges = [];

const REACTION_EMOJIS = ["👍", "😂", "🔥", "😮", "😢", "💯"];
const reactionsByMsg = new Map(); // message id -> [{ user_id, emoji }]
const reactionBars = new Map();   // message id -> reactions element
const shownMessages = new Set();  // public message ids already on screen

// ---------- Dark mode ----------

const themeToggle = document.getElementById("themeToggle");

function updateThemeLabel() {
    const dark = document.documentElement.dataset.theme === "dark";
    themeToggle.replaceChildren(makeIcon(dark ? "sun" : "moon"), dark ? " Light" : " Dark");
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

signupButton.addEventListener("click", async () => {
    const username = signupUsername.value.trim().toLowerCase();
    const email = signupEmail.value.trim();
    const password = signupPassword.value;

    if (!usernamePattern.test(username)) {
        status.textContent = "Username must be 1-20 characters: a-z, 0-9, or _";
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
        options: { data: { username: username } }
    });

    signupButton.disabled = false;

    if (error) {
        status.textContent = "Signup failed: " + error.message;
        return;
    }

    // onAuthStateChange handles SIGNED_IN
    status.textContent = data.session
        ? "Account created!"
        : "Check your email to confirm your account, then log in.";
});

loginButton.addEventListener("click", async () => {
    const email = loginEmail.value.trim();
    const password = loginPassword.value;

    loginButton.disabled = true;
    status.textContent = "Logging in...";

    const { error } = await db.auth.signInWithPassword({
        email: email,
        password: password
    });

    loginButton.disabled = false;

    if (error) {
        status.textContent = "Login failed: " + error.message;
        return;
    }
});

logoutButton.addEventListener("click", async () => {
    const { error } = await db.auth.signOut();

    if (error) {
        status.textContent = "Logout failed: " + error.message;
        return;
    }

    // onAuthStateChange (SIGNED_OUT) resets the screen
    status.textContent = "Logged out.";
});

// Update account screen
async function updateAccount(session) {
    currentSession = session;

    if (!session) {
        loadedUserId = null;
        myUsername = "";
        profileModal.hidden = true;
        leavePresence();
        clearReply();
        resetDMs();
        authArea.hidden = false;
        chatArea.hidden = true;
        return;
    }

    // Skip if this user's chat is already loaded (tab refocus re-fires SIGNED_IN)
    if (loadedUserId === session.user.id) return;
    loadedUserId = session.user.id;

    authArea.hidden = true;
    chatArea.hidden = false;

    const { data: profile, error } = await db
        .from("profiles")
        .select("username")
        .eq("id", session.user.id)
        .single();

    if (error) {
        loadedUserId = null; // allow a retry
        status.textContent = "Profile error: " + error.message;
        console.error(error);
        return;
    }

    currentUser.textContent = "Logged in as: " + profile.username;
    myUsername = profile.username.toLowerCase();

    await loadRoles();
    listenForDMs();
    await loadMessages();
    joinPresence();
    status.textContent = "Connected to chat!";
}

// ---------- Profiles ----------

// Cache so each profile is only fetched once
const profileCache = new Map();
let viewedProfileId = null;

let lastProfileError = "";
let profileWarned = false;

// Fallback when the database has no foreign key for the nested badge query
async function loadBadgesSeparately(userId) {
    const [owned, all] = await Promise.all([
        db.from("user_badges").select("badge_key").eq("user_id", userId),
        db.from("badges").select("key, label, icon, color")
    ]);

    const byKey = new Map((all.data || []).map((b) => [b.key, b]));

    return (owned.data || []).map((r) => ({
        badge_key: r.badge_key,
        badges: byKey.get(r.badge_key) || null
    }));
}

async function fetchProfile(userId) {
    const attempts = [
        "id, username, display_name, bio, avatar_url, banner_url, name_font, user_badges(badge_key, badges(label, icon, color))",
        "id, username, display_name, bio, avatar_url, banner_url, name_font",
        "id, username, bio, avatar_url"
    ];

    for (let i = 0; i < attempts.length; i++) {
        const { data, error } = await db
            .from("profiles")
            .select(attempts[i])
            .eq("id", userId)
            .single();

        if (!error) {
            if (i > 0 && data) data.user_badges = await loadBadgesSeparately(userId);
            return data;
        }

        lastProfileError = error.message;
        console.error("Profile load failed:", error.message);

        if (i === 0 && !profileWarned) {
            profileWarned = true;
            status.textContent =
                "Profiles are in limited mode. Run the latest SQL in Supabase. (" +
                error.message + ")";
        }
    }

    return null;
}

function getProfile(userId, force = false) {
    if (!force && profileCache.has(userId)) return profileCache.get(userId);

    const request = fetchProfile(userId);
    profileCache.set(userId, request);
    return request;
}

// Name fonts (keys must match the database check and the dropdown)
const FONTS = {
    "pacifico": "'Pacifico', cursive",
    "lobster": "'Lobster', cursive",
    "permanent-marker": "'Permanent Marker', cursive",
    "press-start": "'Press Start 2P', monospace",
    "orbitron": "'Orbitron', sans-serif",
    "creepster": "'Creepster', cursive",
    "bungee": "'Bungee', sans-serif",
    "caveat": "'Caveat', cursive",
    "dancing-script": "'Dancing Script', cursive",
    "special-elite": "'Special Elite', monospace"
};

function applyNameFont(el, profile) {
    el.style.fontFamily = FONTS[profile && profile.name_font] || "";
}

function updateFontPreview() {
    displayNameInput.style.fontFamily = FONTS[fontSelect.value] || "";
}

function renderBanner(el, profile) {
    el.replaceChildren();
    const url = profile && profile.banner_url;

    // Only trust images from your own Supabase storage
    if (url && url.startsWith(SUPABASE_URL + "/storage/")) {
        const img = document.createElement("img");
        img.src = url;
        img.alt = "";
        img.onerror = () => el.replaceChildren();
        el.appendChild(img);
    }
}

// Upload an image to the avatars bucket; returns its public URL or null
async function uploadImage(file, path) {
    const allowed = ["image/png", "image/jpeg", "image/webp", "image/gif"];

    if (!allowed.includes(file.type) || file.size > 5 * 1024 * 1024) {
        status.textContent = "Images must be PNG, JPG, WebP, or GIF under 5 MB.";
        return null;
    }

    const { error } = await db.storage
        .from("avatars")
        .upload(path, file, { upsert: true, contentType: file.type });

    if (error) {
        status.textContent = "Upload failed: " + error.message;
        return null;
    }

    const { data } = db.storage.from("avatars").getPublicUrl(path);
    return data.publicUrl + "?v=" + Date.now(); // bust cache
}

function postError(error) {
    if (isBanned) return "You are banned from posting.";

    return "Message failed: " + error.message;
}

function displayNameOf(profile) {
    return (profile && (profile.display_name || profile.username)) || "Unknown";
}

function badgeList(profile) {
    return ((profile && profile.user_badges) || [])
        .map((b) => b.badges)
        .filter(Boolean)
        // the </> member badge always sits on the far left
        .sort((a, b) => (a.icon === "code" ? 0 : 1) - (b.icon === "code" ? 0 : 1));
}

function renderBadges(container, profile) {
    container.replaceChildren();

    badgeList(profile).forEach((b) => {
        const pill = document.createElement("span");
        pill.className = "pill";
        pill.append(makeIcon(b.icon), " " + b.label);
        pill.style.color = b.color;
        pill.style.borderColor = b.color;
        container.appendChild(pill);
    });
}

function renderAvatar(el, profile) {
    el.replaceChildren();
    const url = profile && profile.avatar_url;

    // Only trust images from your own Supabase storage
    if (url && url.startsWith(SUPABASE_URL + "/storage/")) {
        const img = document.createElement("img");
        img.src = url;
        img.alt = "";
        const letter = ((profile && profile.username) || "?")[0].toUpperCase();
        img.onerror = () => {
            el.replaceChildren();
            el.textContent = letter;
        };
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
    profileHandle.textContent = "";
    profileBadges.replaceChildren();
    profileBanner.replaceChildren();
    profileName.style.fontFamily = "";
    modSection.hidden = true;
    badgeManager.hidden = true;
    banButton.hidden = true;
    profileEdit.hidden = true;
    messageButton.hidden = true;

    const profile = await getProfile(userId, true);

    if (viewedProfileId !== userId) return;

    if (!profile) {
        profileName.textContent = "Profile not found";
        profileBio.textContent = lastProfileError;
        return;
    }

    renderAvatar(profileAvatar, profile);
    renderBanner(profileBanner, profile);
    profileName.textContent = displayNameOf(profile);
    applyNameFont(profileName, profile);
    profileHandle.textContent = "@" + profile.username;
    renderBadges(profileBadges, profile);
    profileBio.textContent = profile.bio || "No bio yet.";

    const isMine = currentSession && currentSession.user.id === userId;
    profileEdit.hidden = !isMine;
    messageButton.hidden = isMine || !currentSession;

    if (isMine) {
        displayNameInput.value = profile.display_name || "";
        fontSelect.value = profile.name_font || "";
        bannerFile.value = "";
        updateFontPreview();
        bioInput.value = profile.bio || "";
        avatarFile.value = "";
    }

    await renderModeration(userId, profile, isMine);
}

async function saveProfile() {
    if (!currentSession) return;

    const userId = currentSession.user.id;
    const updates = {
        display_name: displayNameInput.value.trim().slice(0, 30) || null,
        bio: bioInput.value.trim().slice(0, 300),
        name_font: fontSelect.value || null
    };
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

    const bannerChosen = bannerFile.files[0];

    if (bannerChosen) {
        const bannerUrl = await uploadImage(bannerChosen, userId + "/banner");

        if (!bannerUrl) {
            saveProfileButton.disabled = false;
            return;
        }

        updates.banner_url = bannerUrl;
    }

    const { data: saved, error } = await db
        .from("profiles")
        .update(updates)
        .eq("id", userId)
        .select("id");

    saveProfileButton.disabled = false;

    if (error) {
        status.textContent = "Save failed: " + error.message;
        return;
    }

    // An update blocked by row-level security succeeds silently with 0 rows
    if (!saved || saved.length === 0) {
        status.textContent =
            "Save was blocked: the database didn't let you update your profile row. Check the profiles update policy.";
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
fontSelect.addEventListener("change", updateFontPreview);

banButton.addEventListener("click", async () => {
    if (!viewedProfileId || !currentSession) return;

    const userId = viewedProfileId;
    const banned = banButton.dataset.banned === "1";

    banButton.disabled = true;

    const { error } = banned
        ? await db.from("bans").delete().eq("user_id", userId)
        : await db.from("bans").insert({
            user_id: userId,
            banned_by: currentSession.user.id
        });

    banButton.disabled = false;

    if (error) {
        status.textContent = "Moderation failed: " + error.message;
        return;
    }

    status.textContent = banned ? "User unbanned." : "User banned.";
    openProfile(userId);
});

document.getElementById("closeProfile").addEventListener("click", () => {
    profileModal.hidden = true;
    if (!adminPanel.hidden) loadAdmin(); // refresh badges shown in the admin list
});

profileModal.addEventListener("click", (event) => {
    if (event.target === profileModal) profileModal.hidden = true;
});

document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") profileModal.hidden = true;
});

// ---------- Roles, moderation, badges ----------

async function loadRoles() {
    const me = currentSession.user.id;

    const [mine, ban, badges] = await Promise.all([
        db.from("user_badges").select("badge_key").eq("user_id", me),
        db.from("bans").select("user_id").eq("user_id", me),
        db.from("badges").select("key, label, icon, color")
    ]);

    const keys = (mine.data || []).map((b) => b.badge_key);

    isOwner = keys.includes("owner");
    isStaff = isOwner || keys.includes("mod");
    isBanned = !!(ban.data && ban.data.length);
    allBadges = badges.data || [];

    tabAdmin.hidden = !isOwner;

    input.disabled = isBanned;
    sendButton.disabled = isBanned;
    dmInput.disabled = isBanned;
    dmSendButton.disabled = isBanned;

    if (isBanned) status.textContent = "You are banned from posting.";
}

// Moderation tools inside the profile card (staff only)
async function renderModeration(userId, profile, isMine) {
    if (!isStaff || !profile) return;

    const { data: owned } = await db
        .from("user_badges")
        .select("badge_key")
        .eq("user_id", userId);

    if (viewedProfileId !== userId) return;

    const targetKeys = (owned || []).map((b) => b.badge_key);
    const targetIsStaff = targetKeys.includes("owner") || targetKeys.includes("mod");

    // Owner: give or remove badges
    if (isOwner) {
        badgeManager.replaceChildren();
        modSection.querySelector(".field-label").textContent =
            isMine ? "Your badges (click to give or remove)" : "Moderation";

        allBadges.forEach((b) => {
            const has = targetKeys.includes(b.key);

            const button = document.createElement("button");
            button.className = "chip" + (has ? " mine" : "");
            button.append(makeIcon(b.icon), " " + b.label);
            button.title = has ? "Click to remove" : "Click to give";
            button.addEventListener("click", () => toggleBadge(userId, b.key, has));

            badgeManager.appendChild(button);
        });

        badgeManager.hidden = false;
        modSection.hidden = false;
    }

    // Owner and mods: ban or unban non-staff users
    if (!isMine && !targetIsStaff) {
        const { data } = await db
            .from("bans")
            .select("user_id")
            .eq("user_id", userId)
            .maybeSingle();

        if (viewedProfileId !== userId) return;

        banButton.dataset.banned = data ? "1" : "";
        banButton.textContent = data ? "Unban user" : "Ban user";
        banButton.hidden = false;
        modSection.hidden = false;

        if (data) {
            const pill = document.createElement("span");
            pill.className = "pill banned";
            pill.append(makeIcon("skull-bones"), " Banned");
            profileBadges.appendChild(pill);
        }
    }
}

async function toggleBadge(userId, key, has) {
    const mine = currentSession && userId === currentSession.user.id;

    if (has && mine && key === "owner") {
        if (!confirm("Remove your own Owner badge? You will lose your owner tools.")) return;
    }

    const { error } = has
        ? await db.from("user_badges").delete().eq("user_id", userId).eq("badge_key", key)
        : await db.from("user_badges").insert({ user_id: userId, badge_key: key });

    if (error) {
        status.textContent = "Badge change failed: " + error.message;
        return;
    }

    profileCache.delete(userId);
    if (mine) await loadRoles();
    await openProfile(userId);
    await loadMessages();
}

// ---------- Small helpers: sound, mentions, replies, edits ----------

function beep() {
    try {
        audioCtx = audioCtx || new AudioContext();
        const o = audioCtx.createOscillator();
        const g = audioCtx.createGain();
        o.connect(g);
        g.connect(audioCtx.destination);
        o.frequency.value = 880;
        g.gain.value = 0.05;
        o.start();
        o.stop(audioCtx.currentTime + 0.15);
    } catch (e) {
        // Sound is optional
    }
}

// Writes text into el, highlighting @names
function renderContent(el, text) {
    el.replaceChildren();

    text.split(/(@[a-zA-Z0-9_]{1,20})/g).forEach((part) => {
        if (/^@[a-zA-Z0-9_]{1,20}$/.test(part)) {
            const s = document.createElement("span");
            s.className = "mention" + (part.slice(1).toLowerCase() === myUsername ? " me" : "");
            s.textContent = part;
            el.appendChild(s);
        } else {
            el.append(part);
        }
    });
}

function mentionsMe(text) {
    return !!myUsername &&
        new RegExp("@" + myUsername + "(?![a-zA-Z0-9_])", "i").test(text);
}

function startReply(msg) {
    replyingTo = msg.id;
    replyText.textContent =
        "Replying to " + (msg.username || "user") + ": " + msg.content.slice(0, 60);
    replyBar.hidden = false;
    input.focus();
}

function clearReply() {
    replyingTo = null;
    replyBar.hidden = true;
}

async function editMessage(id) {
    const old = messageCache.get(id);
    if (!old) return;

    const next = prompt("Edit message:", old.content);
    if (next === null) return;

    const content = next.trim();
    if (!content || content.length > 1000 || content === old.content) return;

    const { data, error } = await db
        .from("messages")
        .update({ content: content, edited_at: new Date().toISOString() })
        .eq("id", id)
        .select();

    if (error) {
        status.textContent = "Edit failed: " + error.message;
        return;
    }

    if (!data || data.length === 0) {
        status.textContent = "You can't edit that message.";
        return;
    }

    applyEdit(data[0]);
}

function applyEdit(m) {
    const cached = messageCache.get(m.id);
    if (!cached) return;

    cached.content = m.content;
    cached.edited_at = m.edited_at;

    const el = messages.querySelector('.message[data-id="' + CSS.escape(String(m.id)) + '"]');
    if (el && el._setText) el._setText(m.content, !!m.edited_at);
}

// ---------- Presence: online list and typing ----------

function leavePresence() {
    if (presenceChannel) {
        db.removeChannel(presenceChannel);
        presenceChannel = null;
    }

    onlineBar.replaceChildren();
    typingEl.textContent = "";
}

function joinPresence() {
    leavePresence();
    if (!currentSession) return;

    presenceChannel = db.channel("presence-" + activeRoom, {
        config: { presence: { key: currentSession.user.id } }
    });

    presenceChannel
        .on("presence", { event: "sync" }, renderPresence)
        .subscribe(async (state) => {
            if (state === "SUBSCRIBED" && presenceChannel) {
                await presenceChannel.track({ username: myUsername, typing: false });
            }
        });
}

function renderPresence() {
    if (!presenceChannel || !currentSession) return;

    const me = currentSession.user.id;
    const typers = [];

    onlineBar.replaceChildren();

    Object.entries(presenceChannel.presenceState()).forEach(([id, metas]) => {
        const meta = metas[0] || {};

        const chip = document.createElement("button");
        chip.className = "online-chip";

        const av = document.createElement("div");
        av.className = "avatar small online";
        av.textContent = (meta.username || "?")[0].toUpperCase();
        getProfile(id).then((p) => { if (p) renderAvatar(av, p); });

        chip.append(av, meta.username || "user");
        chip.addEventListener("click", () => openProfile(id));
        onlineBar.appendChild(chip);

        if (meta.typing && id !== me) typers.push(meta.username || "someone");
    });

    typingEl.textContent = typers.length
        ? typers.slice(0, 3).join(", ") + (typers.length > 1 ? " are" : " is") + " typing..."
        : "";
}

input.addEventListener("input", () => {
    if (!presenceChannel) return;

    presenceChannel.track({ username: myUsername, typing: true });
    clearTimeout(typingTimer);
    typingTimer = setTimeout(() => {
        if (presenceChannel) presenceChannel.track({ username: myUsername, typing: false });
    }, 2000);
});

// ---------- Deleting messages and reactions ----------

async function deleteMessage(id) {
    const { data, error } = await db
        .from("messages")
        .delete()
        .eq("id", id)
        .select();

    if (error) {
        status.textContent = "Delete failed: " + error.message;
        return;
    }

    if (!data || data.length === 0) {
        status.textContent = "You can't delete that message.";
        return;
    }

    removeMessage(id);
}

function removeMessage(id) {
    const el = messages.querySelector('.message[data-id="' + CSS.escape(String(id)) + '"]');
    if (el) el.remove();

    shownMessages.delete(id);
    reactionBars.delete(id);
    reactionsByMsg.delete(id);
    messageCache.delete(id);
}

function renderReactions(msgId) {
    const bar = reactionBars.get(msgId);
    if (!bar) return;

    const me = currentSession ? currentSession.user.id : null;
    const list = reactionsByMsg.get(msgId) || [];

    bar.replaceChildren();

    REACTION_EMOJIS.forEach((emoji) => {
        const people = list.filter((r) => r.emoji === emoji);
        if (people.length === 0) return;

        const chip = document.createElement("button");
        chip.className = "chip" + (people.some((r) => r.user_id === me) ? " mine" : "");
        chip.textContent = emoji + " " + people.length;
        chip.addEventListener("click", () => toggleReaction(msgId, emoji));
        bar.appendChild(chip);
    });

    // "+" opens the emoji choices
    const add = document.createElement("button");
    add.className = "chip add";
    add.textContent = "+";
    add.title = "Add reaction";

    add.addEventListener("click", () => {
        add.remove();

        REACTION_EMOJIS.forEach((emoji) => {
            const option = document.createElement("button");
            option.className = "chip";
            option.textContent = emoji;
            option.addEventListener("click", () => toggleReaction(msgId, emoji));
            bar.appendChild(option);
        });
    });

    bar.appendChild(add);
}

async function toggleReaction(msgId, emoji) {
    if (!currentSession) return;

    const me = currentSession.user.id;
    const list = reactionsByMsg.get(msgId) || [];
    const has = list.some((r) => r.user_id === me && r.emoji === emoji);

    const { error } = has
        ? await db
            .from("message_reactions")
            .delete()
            .eq("message_id", msgId)
            .eq("user_id", me)
            .eq("emoji", emoji)
        : await db
            .from("message_reactions")
            .insert({ message_id: msgId, user_id: me, emoji: emoji });

    if (error) {
        status.textContent = postError(error);
        return;
    }

    applyReaction({ message_id: msgId, user_id: me, emoji: emoji }, !has);
}

function applyReaction(r, added) {
    const list = reactionsByMsg.get(r.message_id);
    if (!list) return; // that message isn't in the room you're viewing

    const index = list.findIndex((x) => x.user_id === r.user_id && x.emoji === r.emoji);

    if (added && index === -1) list.push({ user_id: r.user_id, emoji: r.emoji });
    if (!added && index !== -1) list.splice(index, 1);

    renderReactions(r.message_id);
}

// ---------- Public messages ----------

// live = true when the message just arrived over realtime (can ping you)
function displayMessage(msg, live = false) {
    // Don't show the same message twice (realtime vs. loadMessages race)
    if (shownMessages.has(msg.id)) return;
    shownMessages.add(msg.id);
    messageCache.set(msg.id, msg);

    const item = document.createElement("div");
    item.className = "message";
    item.dataset.id = msg.id;

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

    const tag = document.createElement("span");
    tag.className = "name-tag";

    const text = document.createElement("span");

    function setText(content, edited) {
        text.replaceChildren(": ");

        const c = document.createElement("span");
        renderContent(c, content);
        text.appendChild(c);

        if (edited) {
            const editedTag = document.createElement("span");
            editedTag.className = "edited";
            editedTag.textContent = "(edited)";
            text.appendChild(editedTag);
        }
    }

    setText(msg.content, !!msg.edited_at);
    item._setText = setText;

    if (live && currentSession && msg.user_id !== currentSession.user.id && mentionsMe(msg.content)) {
        item.classList.add("pinged");
        status.textContent = (msg.username || "Someone") + " mentioned you.";
        beep();
        notify((msg.username || "Someone") + " mentioned you", msg.content);
    }

    const time = document.createElement("small");
    time.textContent = new Date(msg.created_at).toLocaleString();

    const line = document.createElement("div");
    line.append(name, tag, text);

    if (currentSession) {
        // Reply button
        const rep = document.createElement("button");
        rep.className = "icon-btn";
        rep.textContent = "↩";
        rep.title = "Reply";
        rep.addEventListener("click", () => startReply(messageCache.get(msg.id) || msg));
        line.appendChild(rep);

        // Edit button (your own messages only)
        if (msg.user_id === currentSession.user.id) {
            const ed = document.createElement("button");
            ed.className = "icon-btn";
            ed.textContent = "✏";
            ed.title = "Edit message";
            ed.addEventListener("click", () => editMessage(msg.id));
            line.appendChild(ed);
        }
    }

    // Delete button (your own messages, or any message if you're staff)
    if (currentSession && (msg.user_id === currentSession.user.id || isStaff)) {
        const del = document.createElement("button");
        del.className = "icon-btn";
        del.textContent = "🗑";
        del.title = "Delete message";
        del.addEventListener("click", () => deleteMessage(msg.id));
        line.appendChild(del);
    }

    // Reactions
    const reactBar = document.createElement("div");
    reactBar.className = "reactions";
    reactionBars.set(msg.id, reactBar);
    reactionsByMsg.set(msg.id, msg.message_reactions || []);
    renderReactions(msg.id);

    // Quote of the message being replied to
    if (msg.reply_to) {
        const orig = messageCache.get(msg.reply_to);
        const quote = document.createElement("div");
        quote.className = "quote";
        quote.textContent = orig
            ? "↪ " + (orig.username || "user") + ": " + orig.content.slice(0, 80)
            : "↪ original message";
        body.appendChild(quote);
    }

    body.append(line, time, reactBar);
    item.append(avatar, body);

    messages.appendChild(item);
    messages.scrollTop = messages.scrollHeight;

    // Fill in avatar and name once the profile loads
    getProfile(msg.user_id).then((profile) => {
        renderAvatar(avatar, profile);
        if (profile) name.textContent = displayNameOf(profile);
        applyNameFont(name, profile);

        const badges = badgeList(profile);
        tag.replaceChildren(...badges.map((b) => makeIcon(b.icon, b.color)));
        tag.title = badges.map((b) => b.label).join(", ");
    });
}

// Load messages
async function loadMessages() {
    const room = activeRoom;

    let { data, error } = await db
        .from("messages")
        .select("*, message_reactions(user_id, emoji)")
        .eq("room", room)
        .order("created_at", { ascending: true });

    if (error) {
        // Fall back to plain messages if reactions aren't set up yet
        ({ data, error } = await db
            .from("messages")
            .select("*")
            .eq("room", room)
            .order("created_at", { ascending: true }));
    }

    if (room !== activeRoom) return;

    if (error) {
        status.textContent = "Message loading failed: " + error.message;
        console.error(error);
        return;
    }

    reactionsByMsg.clear();
    reactionBars.clear();
    shownMessages.clear();
    messageCache.clear();
    messages.replaceChildren();
    data.forEach((m) => displayMessage(m));
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
            room: activeRoom,
            content: content,
            reply_to: replyingTo
        });

    if (error) {
        status.textContent = postError(error);
        console.error(error);
    } else {
        input.value = "";
        clearReply();
        status.textContent = "Message sent!";
    }

    sendButton.disabled = isBanned;
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
            { event: "INSERT", schema: "public", table: "messages" },
            (payload) => {
                if (payload.new.room === activeRoom) {
                    displayMessage(payload.new, true);
                } else {
                    // Unread dot on the room tab
                    const b = roomTabs.querySelector('[data-room="' + payload.new.room + '"]');
                    if (b) b.classList.add("unread");
                }
            }
        )
        .on(
            "postgres_changes",
            { event: "UPDATE", schema: "public", table: "messages" },
            (payload) => applyEdit(payload.new)
        )
        .on(
            "postgres_changes",
            { event: "DELETE", schema: "public", table: "messages" },
            (payload) => removeMessage(payload.old.id)
        )
        .on(
            "postgres_changes",
            { event: "INSERT", schema: "public", table: "message_reactions" },
            (payload) => applyReaction(payload.new, true)
        )
        .on(
            "postgres_changes",
            { event: "DELETE", schema: "public", table: "message_reactions" },
            // Needs: alter table message_reactions replica identity full;
            (payload) => applyReaction(payload.old, false)
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

// Switch chat rooms
input.placeholder = "Message #" + activeRoom + "...";

roomTabs.addEventListener("click", (event) => {
    const button = event.target.closest(".room");

    if (!button || button.dataset.room === activeRoom) return;

    activeRoom = button.dataset.room;
    button.classList.remove("unread");
    clearReply();

    roomTabs.querySelectorAll(".room").forEach((b) => {
        b.classList.toggle("active", b === button);
    });

    input.placeholder = "Message #" + activeRoom + "...";
    messages.replaceChildren();
    shownMessages.clear();
    loadMessages();
    joinPresence();
});

// ---------- Notifications ----------

// Browser notifications only show when the tab isn't in focus
function notify(title, body) {
    if (!("Notification" in window) || Notification.permission !== "granted") return;
    if (!document.hidden) return;

    try {
        new Notification(title, { body: String(body).slice(0, 100) });
    } catch (e) {
        // Some browsers block this; sound still plays
    }
}

// Ask once, on the first click (browsers require a user gesture)
document.addEventListener("click", () => {
    if ("Notification" in window && Notification.permission === "default") {
        Notification.requestPermission();
    }
}, { once: true });

// ---------- Direct messages ----------

let activeDM = null;          // user id of the open conversation
let dmChannel = null;
const unreadFrom = new Set(); // user ids with unread messages (this visit only)
const shownDMs = new Set();   // message ids already on screen

function updateBadge() {
    dmBadge.hidden = unreadFrom.size === 0;
    dmBadge.textContent = unreadFrom.size;
}

// view: false = public chat, true = DMs, "admin" = admin panel
function switchPanel(view) {
    const v = view === "admin" ? "admin" : view ? "dms" : "public";

    publicPanel.hidden = v !== "public";
    dmPanel.hidden = v !== "dms";
    adminPanel.hidden = v !== "admin";
    tabPublic.classList.toggle("active", v === "public");
    tabDMs.classList.toggle("active", v === "dms");
    tabAdmin.classList.toggle("active", v === "admin");

    // The game (further down) listens here so it closes when you leave its tab
    if (window.onPanelSwitch) window.onPanelSwitch();
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
            name.textContent = profile ? displayNameOf(profile) : "Unknown";
            applyNameFont(name, profile);
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

    dmHeaderName.textContent = profile ? displayNameOf(profile) : "Unknown";
    applyNameFont(dmHeaderName, profile);
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

    dmSendButton.disabled = isBanned;

    if (error) {
        status.textContent = postError(error);
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
            { event: "INSERT", schema: "public", table: "direct_messages" },
            (payload) => {
                if (!currentSession) return;

                const m = payload.new;
                const me = currentSession.user.id;

                if (m.sender_id !== me && m.recipient_id !== me) return;

                const other = m.sender_id === me ? m.recipient_id : m.sender_id;
                const viewing = !dmPanel.hidden && activeDM === other;

                if (viewing) {
                    displayDM(m);
                }

                // Sound and notification for messages sent to you
                if (m.recipient_id === me && (!viewing || document.hidden)) {
                    if (!viewing) {
                        unreadFrom.add(other);
                        updateBadge();
                    }

                    beep();
                    getProfile(other).then((p) => notify(displayNameOf(p), m.content));
                }

                // Refresh the list if it's showing
                if (!dmPanel.hidden && dmChatView.hidden) loadConversations();
            }
        )
        .subscribe();
}

function resetDMs() {
    tabAdmin.hidden = true;
    isStaff = false;
    isOwner = false;
    isBanned = false;
    input.disabled = false;
    sendButton.disabled = false;
    dmInput.disabled = false;
    dmSendButton.disabled = false;
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

// ---------- Admin panel (owner only; the database enforces the rules) ----------

let adminUsers = [];
const adminBanned = new Set();

function adminButton(label, onClick, options = {}) {
    const button = document.createElement("button");
    button.textContent = label;
    if (options.danger) button.className = "danger";
    if (options.disabled) button.disabled = true;
    button.addEventListener("click", onClick);
    return button;
}

async function loadAdmin() {
    if (!isOwner || !currentSession) return;

    adminStats.textContent = "Loading...";
    adminRooms.replaceChildren();

    roomTabs.querySelectorAll(".room").forEach((r) => {
        const room = r.dataset.room;
        const button = document.createElement("button");
        button.className = "room";
        button.textContent = "Clear #" + room;
        button.addEventListener("click", () => adminClearRoom(room));
        adminRooms.appendChild(button);
    });

    let [profiles, bans, msgs] = await Promise.all([
        db.from("profiles")
            .select("id, username, display_name, user_badges(badge_key, badges(label, icon, color))")
            .order("username"),
        db.from("bans").select("user_id"),
        db.from("messages").select("id", { count: "exact", head: true })
    ]);

    if (profiles.error) {
        const plain = await db
            .from("profiles")
            .select("id, username, display_name")
            .order("username");

        if (!plain.error) {
            const [ub, all] = await Promise.all([
                db.from("user_badges").select("user_id, badge_key"),
                db.from("badges").select("key, label, icon, color")
            ]);
            const byKey = new Map((all.data || []).map((b) => [b.key, b]));

            plain.data.forEach((u) => {
                u.user_badges = (ub.data || [])
                    .filter((r) => r.user_id === u.id)
                    .map((r) => ({ badge_key: r.badge_key, badges: byKey.get(r.badge_key) || null }));
            });
        }

        profiles = plain;
    }

    if (profiles.error) {
        adminStats.textContent = "Could not load users: " + profiles.error.message;
        return;
    }

    adminUsers = profiles.data || [];
    adminBanned.clear();
    (bans.data || []).forEach((b) => adminBanned.add(b.user_id));

    updateAdminStats(msgs.count);
    renderAdminList();
}

function updateAdminStats(messageCount) {
    if (messageCount !== undefined) adminStats.dataset.messages = messageCount ?? "?";

    adminStats.textContent =
        adminUsers.length + " users, " +
        adminBanned.size + " banned, " +
        (adminStats.dataset.messages || "?") + " messages";
}

function renderAdminList() {
    if (!currentSession) return;

    const me = currentSession.user.id;
    const query = adminSearch.value.trim().toLowerCase();

    adminList.replaceChildren();

    adminUsers
        .filter((u) =>
            !query ||
            u.username.toLowerCase().includes(query) ||
            (u.display_name || "").toLowerCase().includes(query))
        .forEach((u) => {
            const mine = u.id === me;
            const banned = adminBanned.has(u.id);

            const row = document.createElement("div");
            row.className = "admin-row";

            const info = document.createElement("div");
            info.className = "admin-info";

            const name = document.createElement("strong");
            name.textContent = displayNameOf(u);

            const handle = document.createElement("span");
            handle.className = "handle";
            handle.textContent = "@" + u.username + (mine ? " (you)" : "");

            const badges = document.createElement("div");
            badges.className = "badges";
            renderBadges(badges, u);

            if (banned) {
                const pill = document.createElement("span");
                pill.className = "pill banned";
                pill.append(makeIcon("skull-bones"), " Banned");
                badges.appendChild(pill);
            }

            info.append(name, handle, badges);

            const actions = document.createElement("div");
            actions.className = "admin-actions";
            actions.append(
                adminButton("Badges", () => openProfile(u.id)),
                adminButton(banned ? "Unban" : "Ban", () => adminToggleBan(u, banned), { disabled: mine }),
                adminButton("Delete messages", () => adminWipeMessages(u)),
                adminButton("Delete account", () => adminDeleteUser(u), { danger: true, disabled: mine })
            );

            row.append(info, actions);
            adminList.appendChild(row);
        });

    if (!adminList.children.length) {
        const empty = document.createElement("p");
        empty.className = "dm-empty";
        empty.textContent = "No users match.";
        adminList.appendChild(empty);
    }
}

async function adminToggleBan(user, banned) {
    const { error } = banned
        ? await db.from("bans").delete().eq("user_id", user.id)
        : await db.from("bans").insert({
            user_id: user.id,
            banned_by: currentSession.user.id
        });

    if (error) {
        status.textContent = "Ban change failed: " + error.message;
        return;
    }

    if (banned) adminBanned.delete(user.id);
    else adminBanned.add(user.id);

    status.textContent = (banned ? "Unbanned " : "Banned ") + "@" + user.username + ".";
    updateAdminStats();
    renderAdminList();
}

async function adminWipeMessages(user) {
    if (!confirm("Delete every public message from @" + user.username + "?")) return;

    const { data, error } = await db
        .from("messages")
        .delete()
        .eq("user_id", user.id)
        .select("id");

    if (error) {
        status.textContent = "Delete failed: " + error.message;
        return;
    }

    status.textContent = "Deleted " + (data ? data.length : 0) + " messages from @" + user.username + ".";
    await loadMessages();
    loadAdmin();
}

async function adminClearRoom(room) {
    if (!confirm("Delete EVERY message in #" + room + "? This cannot be undone.")) return;

    const { data, error } = await db
        .from("messages")
        .delete()
        .eq("room", room)
        .select("id");

    if (error) {
        status.textContent = "Clear failed: " + error.message;
        return;
    }

    status.textContent = "Cleared #" + room + " (" + (data ? data.length : 0) + " messages).";
    await loadMessages();
    loadAdmin();
}

async function adminDeleteUser(user) {
    const answer = prompt(
        "This permanently deletes @" + user.username +
        " and all of their messages, DMs, badges and uploads.\n\n" +
        'Type "' + user.username + '" to confirm:'
    );

    if (answer !== user.username) {
        if (answer !== null) status.textContent = "Username didn't match. Nothing was deleted.";
        return;
    }

    // Uploads must be removed through the Storage API, not SQL
    const { data: files } = await db.storage.from("avatars").list(user.id);

    if (files && files.length) {
        const { error: removeError } = await db.storage
            .from("avatars")
            .remove(files.map((f) => user.id + "/" + f.name));

        if (removeError) {
            status.textContent = "Could not delete uploads: " + removeError.message;
            return;
        }
    }

    const { error } = await db.rpc("admin_delete_user", { target: user.id });

    if (error) {
        status.textContent = "Account delete failed: " + error.message;
        return;
    }

    profileCache.delete(user.id);
    status.textContent = "Deleted @" + user.username + ".";
    await loadMessages();
    loadAdmin();
}

tabAdmin.addEventListener("click", () => {
    switchPanel("admin");
    loadAdmin();
});

adminSearch.addEventListener("input", renderAdminList);
adminRefresh.addEventListener("click", loadAdmin);

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

// Listen for login/logout changes.
// Don't await Supabase calls inside this callback (can deadlock), so the
// work is deferred with setTimeout. updateAccount also ignores repeat
// SIGNED_IN events for a user who is already loaded.
db.auth.onAuthStateChange((event, session) => {
    if (event === "SIGNED_IN" || event === "SIGNED_OUT") {
        setTimeout(() => updateAccount(session), 0);
    }
});

startChat();

// =====================================================================
// Block World (the Game tab). Everything below is the game.
// =====================================================================

(function () {
    "use strict";

    // ---------- Config ----------
    const THREE_URL = "https://cdn.jsdelivr.net/npm/three@0.159.0/build/three.min.js";
    const W = 128, D = 128, H = 48, SEA = 13, CH = 16;
    const NCX = W / CH, NCZ = D / CH;
    const NAME_COOLDOWN_MS = 2 * 60 * 60 * 1000;
    const S = 1.8 / 32; // size of one skin pixel in blocks (player is 1.8 tall)

    const AIR = 0, GRASS = 1, DIRT = 2, STONE = 3, SAND = 4, LOG = 5, LEAVES = 6, PLANKS = 7, WATER = 8, COBBLE = 9,
        BEDROCK = 10, COAL = 11, IRON = 12, GLASS = 13, MAXB = 13;
    const PALETTE = [GRASS, DIRT, STONE, COBBLE, SAND, LOG, PLANKS, LEAVES, GLASS, COAL, IRON];
    const HOTBAR = [GRASS, DIRT, STONE, COBBLE, LOG, PLANKS, GLASS, SAND, LEAVES];
    const NT = 15, TILE = 16;
    const okBlock = (t) => t >= 0 && t <= MAXB && t !== WATER && t !== BEDROCK;
    const HARD = { 1: 0.6, 2: 0.5, 3: 1.5, 4: 0.5, 5: 1.0, 6: 0.2, 7: 0.8, 9: 1.5, 11: 2, 12: 2.5, 13: 0.3 }; // seconds to mine
    const BCOL = { 1: 0x58a63a, 2: 0x866043, 3: 0x7d7d7d, 4: 0xdbcfa3, 5: 0x685232, 6: 0x3a8c2c, 7: 0xa28250, 9: 0x737373, 11: 0x2a2a2a, 12: 0xc89670, 13: 0xc8e6f0 };

    // ---------- Panel elements (the markup lives in index.html) ----------
    const tabGame = document.getElementById("tabGame");
    const gamePanel = document.getElementById("gamePanel");
    if (!tabGame || !gamePanel) return;

    const $ = (id) => document.getElementById(id);
    const canvas = $("mcCanvas"), wrap = $("mcWrap"), menu = $("mcMenu");
    const playBtn = $("mcPlay"), nameInput = $("mcName"), nameBtn = $("mcNameBtn"), nameNote = $("mcNameNote");
    const msgEl = $("mcMsg"), infoEl = $("mcInfo"), playersEl = $("mcPlayers"), hotbarEl = $("mcHotbar");

    function say(text) { msgEl.textContent = text || ""; }

    // ---------- Tab wiring ----------
    let panelOpen = false;

    function otherPanels(hide) {
        ["publicPanel", "dmPanel", "adminPanel"].forEach((id) => { $(id).hidden = hide; });
    }

    tabGame.addEventListener("click", () => {
        otherPanels(true);
        document.querySelectorAll(".tabs .tab").forEach((t) => t.classList.remove("active"));
        tabGame.classList.add("active");
        gamePanel.hidden = false;
        enter();
    });

    // script.js calls this whenever the site switches to one of its own panels
    window.onPanelSwitch = function () {
        if (panelOpen) {
            gamePanel.hidden = true;
            tabGame.classList.remove("active");
            leave();
        }
    };

    // ---------- State ----------
    let THREE_ = null;
    let inited = false, running = false, looping = false, entering = 0;
    let renderer, scene, camera, atlasTex, terrainMat, waterMat, highlight;
    let sunMesh, moonMesh, stars;
    let crack, clouds, cloudMat, mineKey = null, mineT = 0;
    const particles = [];
    const litMats = [];
    const blocks = new Uint8Array(W * D * H);
    const heights = new Int16Array(W * D);
    const edits = new Map();
    const chunks = new Map();
    const dirty = new Set();

    let uid = null, myName = "player", nameChangedAt = null, cooldownColumn = true;
    let mySkinUrl = null, defaultSkinTex = null;
    let me = null; // my avatar
    let channel = null;
    const peers = new Map();
    const skinCache = new Map();

    const player = { x: W / 2 + 0.5, y: 30, z: D / 2 + 0.5, vx: 0, vy: 0, vz: 0, yaw: 0, pitch: 0, onGround: false, fly: false, inWater: false, speed: 0 };
    const keys = {};
    const mouse = { 0: false, 2: false };
    let sel = 0, view = 0, target = null, lastSpace = 0, actTimer = 0;
    let sendTimer = 0, lastSent = "", lastSentAt = 0, infoTimer = 0;
    let nameTimerId = null;

    const idx = (x, y, z) => y * W * D + z * W + x;
    const isSolid = (b) => b !== AIR && b !== WATER;

    function getBlock(x, y, z) {
        if (y < 0) return STONE;
        if (y >= H) return AIR;
        if (x < 0 || z < 0 || x >= W || z >= D) return STONE;
        return blocks[idx(x, y, z)];
    }

    // ---------- Noise + world generation ----------
    function hash2(x, z, s) {
        let h = (Math.imul(x | 0, 374761393) + Math.imul(z | 0, 668265263) + Math.imul(s | 0, 1442695041)) | 0;
        h = Math.imul(h ^ (h >>> 13), 1274126177);
        h ^= h >>> 16;
        return (h >>> 0) / 4294967295;
    }

    function valueNoise(x, z, s) {
        const ix = Math.floor(x), iz = Math.floor(z);
        let fx = x - ix, fz = z - iz;
        fx = fx * fx * (3 - 2 * fx);
        fz = fz * fz * (3 - 2 * fz);
        const a = hash2(ix, iz, s), b = hash2(ix + 1, iz, s), c = hash2(ix, iz + 1, s), d = hash2(ix + 1, iz + 1, s);
        return (a + (b - a) * fx) + ((c + (d - c) * fx) - (a + (b - a) * fx)) * fz;
    }

    function fbm(x, z) {
        let sum = 0, amp = 0.5, f = 1;
        for (let i = 0; i < 4; i++) { sum += valueNoise(x * f, z * f, 1337 + i * 11) * amp; amp *= 0.5; f *= 2; }
        return sum / 0.9375;
    }

    function generate() {
        for (let z = 0; z < D; z++) {
            for (let x = 0; x < W; x++) {
                const nx = x / W * 2 - 1, nz = z / D * 2 - 1;
                const r = Math.hypot(nx, nz);
                const n = fbm(x / 38, z / 38);
                let h = Math.floor(11 + n * 20 - Math.pow(Math.max(0, r - 0.42), 1.3) * 58);
                h = Math.max(2, Math.min(h, H - 12));
                heights[x + z * W] = h;
                const beach = h <= SEA + 1;
                for (let y = 0; y <= h; y++) {
                    let b;
                    if (y === 0) b = BEDROCK;
                    else if (y === h) b = beach ? SAND : GRASS;
                    else if (y > h - 4) b = beach ? SAND : DIRT;
                    else {
                        b = STONE;
                        const rr = hash2(x + y * 977, z, 41);
                        if (rr < 0.012) b = COAL;
                        else if (y < 22 && rr > 0.995) b = IRON;
                    }
                    // two noise surfaces intersecting make worm-like tunnels
                    if (y > 3 && y < h &&
                        Math.abs(valueNoise(x / 14 + y / 9, z / 14 - y / 11, 700) - 0.5) < 0.07 &&
                        Math.abs(valueNoise(z / 14 + y / 10, x / 14 - y / 8, 800) - 0.5) < 0.07) b = AIR;
                    blocks[idx(x, y, z)] = b;
                }
                for (let y = h + 1; y <= SEA; y++) blocks[idx(x, y, z)] = WATER;
            }
        }

        // Trees
        for (let z = 4; z < D - 4; z++) {
            for (let x = 4; x < W - 4; x++) {
                const h = heights[x + z * W];
                if (blocks[idx(x, h, z)] !== GRASS) continue;
                if (hash2(x, z, 99) > 0.012) continue;
                const th = 4 + Math.floor(hash2(x, z, 5) * 2);
                for (let y = h + 1; y <= h + th; y++) blocks[idx(x, y, z)] = LOG;
                const top = h + th;
                for (let dy = -2; dy <= 1; dy++) {
                    const rad = dy <= -1 ? 2 : 1;
                    for (let dz = -rad; dz <= rad; dz++) {
                        for (let dx = -rad; dx <= rad; dx++) {
                            if (rad === 2 && Math.abs(dx) === 2 && Math.abs(dz) === 2) continue;
                            const yy = top + dy;
                            if (yy >= H) continue;
                            if (blocks[idx(x + dx, yy, z + dz)] === AIR) blocks[idx(x + dx, yy, z + dz)] = LEAVES;
                        }
                    }
                }
            }
        }
    }

    // ---------- Texture atlas (all drawn in code) ----------
    function makeAtlas() {
        const c = document.createElement("canvas");
        c.width = TILE * NT;
        c.height = TILE;
        const g = c.getContext("2d");
        const nz = (x, y, i) => hash2(x + i * 17, y, 31);

        function tile(i, fn) {
            for (let y = 0; y < TILE; y++) {
                for (let x = 0; x < TILE; x++) {
                    const p = fn(x, y);
                    g.fillStyle = "rgba(" + (p[0] | 0) + "," + (p[1] | 0) + "," + (p[2] | 0) + "," + (p[3] === undefined ? 1 : p[3]) + ")";
                    g.fillRect(i * TILE + x, y, 1, 1);
                }
            }
        }
        const j = (v, amt) => v + amt;

        tile(0, (x, y) => { const a = (nz(x, y, 0) - 0.5) * 36; return [j(88, a), j(166, a), j(58, a * 0.6)]; });
        tile(1, (x, y) => {
            const a = (nz(x, y, 1) - 0.5) * 30;
            if (y < 3 + (nz(x, 0, 9) > 0.55 ? 1 : 0)) return [j(88, a), j(166, a), j(58, a * 0.6)];
            return [j(134, a), j(96, a), j(67, a)];
        });
        tile(2, (x, y) => { const a = (nz(x, y, 2) - 0.5) * 30; return [j(134, a), j(96, a), j(67, a)]; });
        tile(3, (x, y) => { const a = (nz(x, y, 3) - 0.5) * 40; return [j(125, a), j(125, a), j(125, a)]; });
        tile(4, (x, y) => { const a = (nz(x, y, 4) - 0.5) * 22; return [j(219, a), j(207, a), j(163, a)]; });
        tile(5, (x, y) => { const a = (nz(x, y, 5) - 0.5) * 20 - (x % 4 === 0 ? 20 : 0); return [j(104, a), j(82, a), j(50, a)]; });
        tile(6, (x, y) => {
            const d = Math.max(Math.abs(x - 7.5), Math.abs(y - 7.5));
            const a = (nz(x, y, 6) - 0.5) * 14;
            if (d >= 7) return [j(104, a), j(82, a), j(50, a)];
            return Math.floor(d) % 2 ? [j(172, a), j(137, a), j(86, a)] : [j(142, a), j(110, a), j(66, a)];
        });
        tile(7, (x, y) => {
            const a = (nz(x, y, 7) - 0.5) * 50;
            return [j(58, a * 0.5), j(140, a), j(44, a * 0.5), nz(x, y, 70) > 0.8 ? 0 : 1];
        });
        tile(8, (x, y) => {
            const a = (nz(x, y, 8) - 0.5) * 18 - (y % 4 === 3 ? 28 : 0);
            return [j(162, a), j(130, a), j(80, a)];
        });
        tile(9, (x, y) => { const a = (nz(x, y, 9) - 0.5) * 14; return [j(40, a), j(90, a), j(205, a), 0.62]; });
        tile(10, (x, y) => {
            const blob = hash2(Math.floor(x / 4), Math.floor(y / 4), 88);
            const edge = x % 4 === 0 || y % 4 === 0 ? -28 : 0;
            const a = (blob - 0.5) * 50 + edge + (nz(x, y, 10) - 0.5) * 12;
            return [j(115, a), j(115, a), j(115, a)];
        });

        // New tiles: bedrock, coal ore, iron ore, glass
        const stonepx = (x, y, i) => { const a = (nz(x, y, i) - 0.5) * 40; return [j(125, a), j(125, a), j(125, a)]; };
        tile(11, (x, y) => { const a = (nz(x, y, 11) - 0.5) * 60; return [j(55, a), j(55, a), j(55, a)]; });
        tile(12, (x, y) => hash2(Math.floor(x / 3), Math.floor(y / 3), 55) > 0.78 ? [30, 30, 30] : stonepx(x, y, 12));
        tile(13, (x, y) => hash2(Math.floor(x / 3), Math.floor(y / 3), 56) > 0.8 ? [210, 160, 120] : stonepx(x, y, 13));
        tile(14, (x, y) => (x === 0 || y === 0 || x === 15 || y === 15) ? [200, 230, 240]
            : (x === y && x > 2 && x < 8) ? [255, 255, 255] : [0, 0, 0, 0]);

        const tex = new THREE_.CanvasTexture(c);
        tex.magFilter = THREE_.NearestFilter;
        tex.minFilter = THREE_.NearestFilter;
        tex.generateMipmaps = false;
        atlasCanvas = c;
        return tex;
    }
    let atlasCanvas = null;

    function tileFor(b, face) { // face: 0 top, 1 bottom, 2 side
        switch (b) {
            case GRASS: return face === 0 ? 0 : face === 1 ? 2 : 1;
            case DIRT: return 2;
            case STONE: return 3;
            case SAND: return 4;
            case LOG: return face === 2 ? 5 : 6;
            case LEAVES: return 7;
            case PLANKS: return 8;
            case WATER: return 9;
            case COBBLE: return 10;
            case BEDROCK: return 11;
            case COAL: return 12;
            case IRON: return 13;
            case GLASS: return 14;
        }
        return 3;
    }

    // ---------- Chunk meshing ----------
    const FACES = [
        { d: [1, 0, 0], k: 2, shade: 0.8, c: [[1, 0, 1], [1, 0, 0], [1, 1, 0], [1, 1, 1]] },
        { d: [-1, 0, 0], k: 2, shade: 0.8, c: [[0, 0, 0], [0, 0, 1], [0, 1, 1], [0, 1, 0]] },
        { d: [0, 1, 0], k: 0, shade: 1.0, c: [[0, 1, 1], [1, 1, 1], [1, 1, 0], [0, 1, 0]] },
        { d: [0, -1, 0], k: 1, shade: 0.5, c: [[0, 0, 0], [1, 0, 0], [1, 0, 1], [0, 0, 1]] },
        { d: [0, 0, 1], k: 2, shade: 0.7, c: [[0, 0, 1], [1, 0, 1], [1, 1, 1], [0, 1, 1]] },
        { d: [0, 0, -1], k: 2, shade: 0.7, c: [[1, 0, 0], [0, 0, 0], [0, 1, 0], [1, 1, 0]] }
    ];
    const UVU = [0, 1, 1, 0], UVV = [0, 0, 1, 1];

    // Ambient occlusion: corners next to solid blocks get darker
    const AOB = [0.5, 0.68, 0.84, 1];
    const aoSolid = (x, y, z) => { const b = getBlock(x, y, z); return b !== AIR && b !== WATER && b !== GLASS; };

    function addFace(T, x, y, z, F, tile, lowTop, useAO) {
        const e = 0.02 / (TILE * NT);
        const u0 = tile / NT + e, u1 = (tile + 1) / NT - e;
        const base = T.n, ao = [3, 3, 3, 3];
        const t = F.d[0] ? [1, 2] : F.d[1] ? [0, 2] : [0, 1];
        const px = x + F.d[0], py = y + F.d[1], pz = z + F.d[2];
        for (let k = 0; k < 4; k++) {
            const c = F.c[k];
            let cy = c[1];
            if (lowTop && cy === 1) cy = 0.88;
            T.p.push(x + c[0], y + cy, z + c[2]);
            T.u.push(UVU[k] ? u1 : u0, UVV[k] ? 1 - e : e);
            let br = 1;
            if (useAO) {
                const a = [0, 0, 0], b = [0, 0, 0];
                a[t[0]] = c[t[0]] * 2 - 1;
                b[t[1]] = c[t[1]] * 2 - 1;
                const s1 = aoSolid(px + a[0], py + a[1], pz + a[2]);
                const s2 = aoSolid(px + b[0], py + b[1], pz + b[2]);
                const cr = aoSolid(px + a[0] + b[0], py + a[1] + b[1], pz + a[2] + b[2]);
                ao[k] = s1 && s2 ? 0 : 3 - (s1 + s2 + cr);
                br = AOB[ao[k]];
            }
            const sh = F.shade * br;
            T.c.push(sh, sh, sh);
        }
        // flip the quad's diagonal so the shading doesn't look lopsided
        if (ao[0] + ao[2] > ao[1] + ao[3]) T.i.push(base + 1, base + 2, base + 3, base + 1, base + 3, base);
        else T.i.push(base, base + 1, base + 2, base, base + 2, base + 3);
        T.n += 4;
    }

    function makeMesh(T, mat, order) {
        if (!T.n) return null;
        const g = new THREE_.BufferGeometry();
        g.setAttribute("position", new THREE_.Float32BufferAttribute(T.p, 3));
        g.setAttribute("uv", new THREE_.Float32BufferAttribute(T.u, 2));
        g.setAttribute("color", new THREE_.Float32BufferAttribute(T.c, 3));
        g.setIndex(new THREE_.BufferAttribute(new Uint32Array(T.i), 1));
        g.computeBoundingSphere();
        const m = new THREE_.Mesh(g, mat);
        m.renderOrder = order;
        scene.add(m);
        return m;
    }

    function buildChunk(cx, cz) {
        const key = cx + cz * NCX;
        const old = chunks.get(key);
        if (old) old.forEach((m) => { scene.remove(m); m.geometry.dispose(); });

        const A = { p: [], u: [], c: [], i: [], n: 0 };
        const B = { p: [], u: [], c: [], i: [], n: 0 };

        for (let y = 0; y < H; y++) {
            for (let z = cz * CH; z < cz * CH + CH; z++) {
                for (let x = cx * CH; x < cx * CH + CH; x++) {
                    const b = blocks[idx(x, y, z)];
                    if (b === AIR) continue;
                    const isW = b === WATER;
                    const lowTop = isW && getBlock(x, y + 1, z) !== WATER;
                    for (let f = 0; f < 6; f++) {
                        const F = FACES[f];
                        const nb = getBlock(x + F.d[0], y + F.d[1], z + F.d[2]);
                        if (isW) { if (nb !== AIR) continue; }
                        else if (b === LEAVES) { if (nb !== AIR && nb !== WATER) continue; }
                        else if (b === GLASS) { if (nb !== AIR && nb !== WATER && nb !== LEAVES) continue; }
                        else if (nb !== AIR && nb !== WATER && nb !== LEAVES && nb !== GLASS) continue;
                        addFace(isW ? B : A, x, y, z, F, tileFor(b, F.k), lowTop, !isW);
                    }
                }
            }
        }

        const list = [makeMesh(A, terrainMat, 0), makeMesh(B, waterMat, 1)].filter(Boolean);
        chunks.set(key, list);
    }

    function markDirty(x, z) {
        const cx = x >> 4, cz = z >> 4;
        dirty.add(cx + cz * NCX);
        if ((x & 15) === 0 && cx > 0) dirty.add((cx - 1) + cz * NCX);
        if ((x & 15) === 15 && cx < NCX - 1) dirty.add((cx + 1) + cz * NCX);
        if ((z & 15) === 0 && cz > 0) dirty.add(cx + (cz - 1) * NCX);
        if ((z & 15) === 15 && cz < NCZ - 1) dirty.add(cx + (cz + 1) * NCX);
    }

    function setBlock(x, y, z, t, broadcast) {
        if (x < 0 || z < 0 || x >= W || z >= D || y < 1 || y >= H) return;
        if (blocks[idx(x, y, z)] === t) return;
        blocks[idx(x, y, z)] = t;
        edits.set(idx(x, y, z), t);
        markDirty(x, z);
        if (broadcast && channel) {
            channel.send({ type: "broadcast", event: "block", payload: { x: x, y: y, z: z, t: t } });
        }
    }

    function flushDirty(max) {
        let n = 0;
        for (const key of dirty) {
            buildChunk(key % NCX, Math.floor(key / NCX));
            dirty.delete(key);
            if (++n >= max) break;
        }
    }

    // ---------- Skins ----------
    function paintDefaultSkin() {
        const c = document.createElement("canvas");
        c.width = 64; c.height = 64;
        const g = c.getContext("2d");
        const fill = (x, y, w, h, col) => { g.fillStyle = col; g.fillRect(x, y, w, h); };
        const box = (u, v, w, h, d, col) => {
            [[u + d, v, w, d], [u + d + w, v, w, d], [u, v + d, d, h], [u + d, v + d, w, h], [u + d + w, v + d, d, h], [u + d + w + d, v + d, w, h]]
                .forEach((r) => fill(r[0], r[1], r[2], r[3], col));
        };
        const skin = "#d8c8c6", hair = "#0c0c10", band = "#a89a88", dark = "#4b3b36", top = "#101012", dress = "#e4e0de";

        // Head: black hair, tan band, face half hidden by a fringe
        box(0, 0, 8, 8, 8, hair);
        fill(8, 8, 8, 8, skin);
        fill(8, 8, 8, 1, hair);
        fill(0, 9, 32, 2, band);
        fill(8, 11, 8, 1, hair);
        fill(8, 12, 4, 3, hair);
        fill(13, 13, 1, 1, "#1a1214");
        fill(12, 15, 2, 1, "#9b6a6a");
        fill(8, 0, 8, 8, band);
        fill(11, 0, 2, 8, dark);
        fill(8, 3, 8, 2, dark);

        // Body: black top, pale dress hem
        box(16, 16, 8, 12, 4, top);
        fill(16, 28, 16, 4, dress);
        fill(32, 28, 8, 4, dress);

        // Arms: pale skin, black sleeves
        box(40, 16, 4, 12, 4, skin);
        fill(40, 20, 16, 3, top); fill(44, 16, 4, 4, top);
        box(32, 48, 4, 12, 4, skin);
        fill(32, 52, 16, 3, top); fill(36, 48, 4, 4, top);

        // Legs: long pale skirt look
        box(0, 16, 4, 12, 4, dress);
        box(16, 48, 4, 12, 4, dress);

        // A little pixel noise so it doesn't look flat
        const img = g.getImageData(0, 0, 64, 64);
        for (let i = 0; i < 64 * 64; i++) {
            if (img.data[i * 4 + 3] === 0) continue;
            const a = (hash2(i, 3, 77) - 0.5) * 16;
            img.data[i * 4] = Math.max(0, Math.min(255, img.data[i * 4] + a));
            img.data[i * 4 + 1] = Math.max(0, Math.min(255, img.data[i * 4 + 1] + a));
            img.data[i * 4 + 2] = Math.max(0, Math.min(255, img.data[i * 4 + 2] + a));
        }
        g.putImageData(img, 0, 0);
        return c;
    }

    function skinTexture(canvasEl) {
        const t = new THREE_.CanvasTexture(canvasEl);
        t.magFilter = THREE_.NearestFilter;
        t.minFilter = THREE_.NearestFilter;
        t.generateMipmaps = false;
        return t;
    }

    // Loads a 64x64 (or old 64x32) skin image; resolves a texture or null
    function loadSkin(url) {
        if (skinCache.has(url)) return skinCache.get(url);
        const p = new Promise((resolve) => {
            const img = new Image();
            img.crossOrigin = "anonymous";
            img.onload = () => {
                if (img.width !== 64 || (img.height !== 64 && img.height !== 32)) { resolve(null); return; }
                const c = document.createElement("canvas");
                c.width = 64; c.height = 64;
                const g = c.getContext("2d");
                g.imageSmoothingEnabled = false;
                g.drawImage(img, 0, 0);
                if (img.height === 32) { // old format: reuse right limbs for the left side
                    g.drawImage(c, 0, 16, 16, 16, 16, 48, 16, 16);
                    g.drawImage(c, 40, 16, 16, 16, 32, 48, 16, 16);
                }
                resolve(skinTexture(c));
            };
            img.onerror = () => resolve(null);
            img.src = url;
        });
        skinCache.set(url, p);
        return p;
    }

    // ---------- Avatars ----------
    function skinBox(w, h, d, u, v, inf) {
        const g = new THREE_.BoxGeometry((w + inf * 2) * S, (h + inf * 2) * S, (d + inf * 2) * S);
        const uv = g.attributes.uv;
        const R = (f, x, y, rw, rh) => {
            const u0 = x / 64, u1 = (x + rw) / 64, vT = 1 - y / 64, vB = 1 - (y + rh) / 64;
            uv.setXY(f * 4, u0, vT); uv.setXY(f * 4 + 1, u1, vT);
            uv.setXY(f * 4 + 2, u0, vB); uv.setXY(f * 4 + 3, u1, vB);
        };
        R(0, u + d + w, v + d, d, h); // model left
        R(1, u, v + d, d, h);         // model right
        R(2, u + d, v, w, d);         // top
        R(3, u + d + w, v, w, d);     // bottom
        R(4, u + d, v + d, w, h);     // front
        R(5, u + d + w + d, v + d, w, h); // back
        return g;
    }

    function nameTag(text) {
        const c = document.createElement("canvas");
        const g = c.getContext("2d");
        g.font = "bold 20px monospace";
        const w = Math.ceil(g.measureText(text).width) + 14;
        c.width = w; c.height = 28;
        g.font = "bold 20px monospace";
        g.fillStyle = "rgba(0,0,0,0.45)";
        g.fillRect(0, 0, w, 28);
        g.fillStyle = "#ffffff";
        g.textBaseline = "middle";
        g.fillText(text, 7, 15);
        const tex = new THREE_.CanvasTexture(c);
        tex.minFilter = THREE_.LinearFilter;
        tex.generateMipmaps = false;
        const spr = new THREE_.Sprite(new THREE_.SpriteMaterial({ map: tex, transparent: true, depthTest: false, fog: false }));
        spr.scale.set(w / 28 * 0.26, 0.26, 1);
        spr.position.y = 2.1;
        spr.renderOrder = 999;
        return spr;
    }

    function createAvatar(tex, name) {
        const baseMat = new THREE_.MeshBasicMaterial({ map: tex });
        const overMat = new THREE_.MeshBasicMaterial({ map: tex, transparent: true, alphaTest: 0.5 });
        litMats.push(baseMat, overMat);

        const root = new THREE_.Group();
        const geos = [];

        function limb(w, h, d, u, v, ou, ov, ox, oy, cy, oinf) {
            const pivot = new THREE_.Group();
            pivot.position.set(ox * S, oy * S, 0);
            const g1 = skinBox(w, h, d, u, v, 0), g2 = skinBox(w, h, d, ou, ov, oinf);
            geos.push(g1, g2);
            const m1 = new THREE_.Mesh(g1, baseMat), m2 = new THREE_.Mesh(g2, overMat);
            m1.position.y = m2.position.y = cy * S;
            pivot.add(m1, m2);
            root.add(pivot);
            return pivot;
        }

        const av = {
            root: root,
            head: limb(8, 8, 8, 0, 0, 32, 0, 0, 24, 4, 0.5),
            body: limb(8, 12, 4, 16, 16, 16, 32, 0, 24, -6, 0.25),
            armR: limb(4, 12, 4, 40, 16, 40, 32, -6, 24, -6, 0.25),
            armL: limb(4, 12, 4, 32, 48, 48, 48, 6, 24, -6, 0.25),
            legR: limb(4, 12, 4, 0, 16, 0, 32, -2, 12, -6, 0.25),
            legL: limb(4, 12, 4, 16, 48, 0, 48, 2, 12, -6, 0.25),
            amp: 0, tag: null, mats: [baseMat, overMat], tex: tex
        };

        av.setName = (n) => {
            if (av.tag) { root.remove(av.tag); av.tag.material.map.dispose(); av.tag.material.dispose(); }
            av.tag = nameTag(n);
            root.add(av.tag);
        };
        av.setSkin = (t) => { av.tex = t; baseMat.map = t; overMat.map = t; baseMat.needsUpdate = true; overMat.needsUpdate = true; };
        av.animate = (moving, t, dt) => {
            av.amp += ((moving ? 0.85 : 0) - av.amp) * Math.min(1, dt * 10);
            const s = Math.sin(t * 9) * av.amp;
            av.armR.rotation.x = s; av.armL.rotation.x = -s;
            av.legR.rotation.x = -s; av.legL.rotation.x = s;
        };
        av.dispose = () => {
            scene.remove(root);
            geos.forEach((g) => g.dispose());
            if (av.tag) { av.tag.material.map.dispose(); av.tag.material.dispose(); }
            av.mats.forEach((m) => { const i = litMats.indexOf(m); if (i >= 0) litMats.splice(i, 1); m.dispose(); });
        };

        av.setName(name);
        scene.add(root);
        return av;
    }

    // ---------- Networking (Supabase realtime broadcast) ----------
    function onPos(p) {
        if (!p || p.i === uid || !Number.isFinite(p.x) || !Number.isFinite(p.y) || !Number.isFinite(p.z)) return;
        let peer = peers.get(p.i);
        const nm = String(p.n || "player").slice(0, 30);
        const sk = typeof p.s === "string" ? p.s : null;

        if (!peer) {
            peer = { id: p.i, name: nm, skin: null, av: createAvatar(defaultSkinTex, nm), tx: p.x, ty: p.y, tz: p.z, ta: p.a || 0, tp: p.p || 0, moving: false, last: 0 };
            peer.av.root.position.set(p.x, p.y, p.z);
            peers.set(p.i, peer);
        }

        peer.tx = p.x; peer.ty = p.y; peer.tz = p.z;
        peer.ta = Number(p.a) || 0; peer.tp = Number(p.p) || 0;
        peer.moving = !!p.m;
        peer.last = performance.now();

        if (nm !== peer.name) { peer.name = nm; peer.av.setName(nm); }

        if (sk !== peer.skin) {
            peer.skin = sk;
            if (!sk) peer.av.setSkin(defaultSkinTex);
            else if (sk.startsWith(THIS_SUPABASE + "/storage/")) {
                loadSkin(sk).then((t) => { if (t && peer.skin === sk) peer.av.setSkin(t); });
            }
        }
    }

    const THIS_SUPABASE = typeof SUPABASE_URL === "string" ? SUPABASE_URL : "";

    function removePeer(id) {
        const peer = peers.get(id);
        if (!peer) return;
        peer.av.dispose();
        peers.delete(id);
    }

    function onPresence() {
        if (!channel) return;
        const st = channel.presenceState();
        const ids = Object.keys(st);
        for (const id of Array.from(peers.keys())) if (!ids.includes(id)) removePeer(id);
        const names = ids.map((id) => (st[id] && st[id][0] && st[id][0].name) || "player");
        playersEl.textContent = "Online (" + names.length + "): " + names.join(", ");
    }

    function sendEdits() {
        if (!channel || edits.size === 0) return;
        const list = [];
        let n = 0;
        for (const [i, t] of edits) {
            const y = Math.floor(i / (W * D)), r = i % (W * D);
            list.push(r % W, y, Math.floor(r / W), t);
            if (++n >= 3000) break;
        }
        channel.send({ type: "broadcast", event: "edits", payload: { list: list } });
    }

    function applyEdits(list) {
        if (!Array.isArray(list)) return;
        for (let i = 0; i + 3 < list.length; i += 4) {
            const x = list[i] | 0, y = list[i + 1] | 0, z = list[i + 2] | 0, t = list[i + 3] | 0;
            if (okBlock(t)) setBlock(x, y, z, t, false);
        }
    }

    function connect() {
        if (channel || !uid) return;
        channel = db.channel("mc-world", { config: { broadcast: { self: false }, presence: { key: uid } } });
        channel
            .on("broadcast", { event: "pos" }, (m) => onPos(m.payload))
            .on("broadcast", { event: "block" }, (m) => {
                const p = m.payload || {};
                if (okBlock(p.t | 0)) setBlock(p.x | 0, p.y | 0, p.z | 0, p.t | 0, false);
            })
            .on("broadcast", { event: "hello" }, () => setTimeout(sendEdits, Math.random() * 500))
            .on("broadcast", { event: "edits" }, (m) => applyEdits(m.payload && m.payload.list))
            .on("presence", { event: "sync" }, onPresence)
            .subscribe(async (state) => {
                if (state === "SUBSCRIBED" && channel) {
                    await channel.track({ name: myName });
                    channel.send({ type: "broadcast", event: "hello", payload: {} });
                }
            });
    }

    function disconnect() {
        if (channel) { db.removeChannel(channel); channel = null; }
        for (const id of Array.from(peers.keys())) removePeer(id);
        playersEl.textContent = "";
    }

    function sendPos(dt) {
        sendTimer += dt;
        if (sendTimer < 0.1 || !channel) return;
        sendTimer = 0;
        const r = (v) => Math.round(v * 100) / 100;
        const moving = player.speed > 0.5 && (player.onGround || player.fly || player.inWater);
        const payload = { i: uid, n: myName, x: r(player.x), y: r(player.y), z: r(player.z), a: r(player.yaw), p: r(player.pitch), m: moving ? 1 : 0, s: mySkinUrl };
        const sig = payload.x + "," + payload.y + "," + payload.z + "," + payload.a + "," + payload.p + "," + payload.m + "," + payload.n + "," + payload.s;
        const now = performance.now();
        if (sig === lastSent && now - lastSentAt < 1000) return;
        lastSent = sig; lastSentAt = now;
        channel.send({ type: "broadcast", event: "pos", payload: payload });
    }

    // ---------- Name (website display name, 2-hour cooldown) ----------
    async function loadMe() {
        let res = await db.from("profiles").select("username, display_name, name_changed_at").eq("id", uid).single();
        cooldownColumn = true;
        if (res.error) {
            cooldownColumn = false;
            res = await db.from("profiles").select("username, display_name").eq("id", uid).single();
        }
        if (res.data) {
            myName = res.data.display_name || res.data.username || "player";
            nameChangedAt = res.data.name_changed_at ? new Date(res.data.name_changed_at).getTime() : null;
        }
        nameInput.value = myName;
        $("mcWho").textContent = "Playing as " + myName;
        if (me) me.setName(myName);
        refreshNameUI();
    }

    function refreshNameUI() {
        if (!cooldownColumn) {
            nameBtn.disabled = true;
            nameNote.textContent = "Name changes are locked until name-cooldown.sql is run in Supabase (it enforces the 2-hour limit).";
            return;
        }
        const left = nameChangedAt ? nameChangedAt + NAME_COOLDOWN_MS - Date.now() : 0;
        if (left > 0) {
            const m = Math.ceil(left / 60000);
            nameBtn.disabled = true;
            nameNote.textContent = "You can change your name again in " + Math.floor(m / 60) + "h " + (m % 60) + "m.";
        } else {
            nameBtn.disabled = false;
            nameNote.textContent = "You can change your name now. After that you must wait 2 hours.";
        }
    }

    nameBtn.addEventListener("click", async () => {
        const v = nameInput.value.trim().slice(0, 30);
        if (!v) { say("Name can't be empty."); return; }
        if (v === myName) { say("That's already your name."); return; }
        nameBtn.disabled = true;
        const { data, error } = await db.from("profiles").update({ display_name: v }).eq("id", uid).select();
        if (error) { say("Name change failed: " + error.message); refreshNameUI(); return; }
        if (!data || data.length === 0) { say("Name change was blocked by the database."); refreshNameUI(); return; }
        myName = data[0].display_name || v;
        nameChangedAt = data[0].name_changed_at ? new Date(data[0].name_changed_at).getTime() : Date.now();
        try { profileCache.delete(uid); } catch (e) { /* optional */ }
        if (me) me.setName(myName);
        if (channel) channel.track({ name: myName });
        $("mcWho").textContent = "Playing as " + myName;
        say("Name changed to " + myName + ".");
        refreshNameUI();
        if (typeof loadMessages === "function") loadMessages();
    });

    // ---------- Skin upload ----------
    $("mcSkinFile").addEventListener("change", async (event) => {
        const file = event.target.files[0];
        event.target.value = "";
        if (!file) return;
        if (file.type !== "image/png" || file.size > 1024 * 1024) { say("Skin must be a PNG under 1 MB."); return; }
        const blobUrl = URL.createObjectURL(file);
        skinCache.delete(blobUrl);
        const tex = await loadSkin(blobUrl);
        URL.revokeObjectURL(blobUrl);
        if (!tex) { say("Skin must be 64x64 (or 64x32) pixels."); return; }
        const path = uid + "/skin";
        const { error } = await db.storage.from("avatars").upload(path, file, { upsert: true, contentType: "image/png" });
        if (error) { say("Skin upload failed: " + error.message); return; }
        mySkinUrl = db.storage.from("avatars").getPublicUrl(path).data.publicUrl + "?v=" + Date.now();
        if (me) me.setSkin(tex);
        say("Skin updated!");
    });

    $("mcSkinReset").addEventListener("click", async () => {
        await db.storage.from("avatars").remove([uid + "/skin"]);
        mySkinUrl = null;
        if (me) me.setSkin(defaultSkinTex);
        say("Using the default skin.");
    });

    async function loadMySkin() {
        const url = db.storage.from("avatars").getPublicUrl(uid + "/skin").data.publicUrl + "?v=" + Date.now();
        const tex = await loadSkin(url);
        if (tex) { mySkinUrl = url; if (me) me.setSkin(tex); }
    }

    // ---------- Physics ----------
    function collides(x, y, z) {
        const x0 = Math.floor(x - 0.3), x1 = Math.floor(x + 0.3);
        const y0 = Math.floor(y), y1 = Math.floor(y + 1.79);
        const z0 = Math.floor(z - 0.3), z1 = Math.floor(z + 0.3);
        for (let yy = y0; yy <= y1; yy++)
            for (let zz = z0; zz <= z1; zz++)
                for (let xx = x0; xx <= x1; xx++)
                    if (isSolid(getBlock(xx, yy, zz))) return true;
        return false;
    }

    function physics(dt) {
        const p = player;
        let f = (keys.KeyW ? 1 : 0) - (keys.KeyS ? 1 : 0);
        let s = (keys.KeyD ? 1 : 0) - (keys.KeyA ? 1 : 0);
        if (!isLocked()) { f = 0; s = 0; }
        const len = Math.hypot(f, s) || 1;
        f /= len; s /= len;
        const sin = Math.sin(p.yaw), cos = Math.cos(p.yaw);
        const wx = -sin * f + cos * s, wz = -cos * f - sin * s;

        p.inWater = getBlock(Math.floor(p.x), Math.floor(p.y + 0.4), Math.floor(p.z)) === WATER;
        const sprint = keys.ShiftLeft || keys.ShiftRight;
        let speed = p.fly ? 10 : p.inWater ? 2.4 : sprint ? 5.8 : 4.3;
        const lerp = Math.min(1, dt * (p.fly ? 10 : p.onGround ? 14 : 4));
        p.vx += (wx * speed - p.vx) * lerp;
        p.vz += (wz * speed - p.vz) * lerp;

        const space = isLocked() && keys.Space;
        if (p.fly) {
            const up = (space ? 1 : 0) - (sprint ? 1 : 0);
            p.vy += (up * 8 - p.vy) * Math.min(1, dt * 10);
        } else if (p.inWater) {
            p.vy -= 8 * dt;
            p.vy *= 1 - Math.min(0.9, 3 * dt);
            if (space) p.vy = Math.min(p.vy + 30 * dt, 3.8);
        } else {
            p.vy = Math.max(-50, p.vy - 27 * dt);
            if (space && p.onGround) p.vy = 8.4;
        }

        p.onGround = false;

        let nx = p.x + p.vx * dt;
        if (collides(nx, p.y, p.z)) p.vx = 0; else p.x = nx;
        let nz = p.z + p.vz * dt;
        if (collides(p.x, p.y, nz)) p.vz = 0; else p.z = nz;

        const ny = p.y + p.vy * dt;
        if (collides(p.x, ny, p.z)) {
            if (p.vy < 0) { p.y = Math.floor(ny) + 1; p.onGround = true; if (p.fly) p.fly = false; }
            else p.y = Math.floor(ny + 1.8) - 1.8 - 0.001;
            p.vy = 0;
        } else {
            p.y = ny;
        }

        p.speed = Math.hypot(p.vx, p.vz);
        if (p.y < -5) respawn();
    }

    function respawn() {
        const x = Math.floor(W / 2), z = Math.floor(D / 2);
        player.x = x + 0.5; player.z = z + 0.5;
        player.y = heights[x + z * W] + 2;
        while (collides(player.x, player.y, player.z) && player.y < H - 3) player.y++;
        player.vx = player.vy = player.vz = 0;
    }

    // ---------- Interaction ----------
    function raycast(ox, oy, oz, dx, dy, dz, max) {
        let lx = Math.floor(ox), ly = Math.floor(oy), lz = Math.floor(oz);
        for (let t = 0; t < max; t += 0.03) {
            const x = Math.floor(ox + dx * t), y = Math.floor(oy + dy * t), z = Math.floor(oz + dz * t);
            const b = getBlock(x, y, z);
            if (b !== AIR && b !== WATER) return { x: x, y: y, z: z, px: lx, py: ly, pz: lz };
            lx = x; ly = y; lz = z;
        }
        return null;
    }

    function lookDir() {
        const cp = Math.cos(player.pitch);
        return [-Math.sin(player.yaw) * cp, Math.sin(player.pitch), -Math.cos(player.yaw) * cp];
    }

    const banned = () => typeof isBanned !== "undefined" && isBanned;

    // Little square-wave blip for breaking / placing
    function sfx(f) {
        try {
            audioCtx = audioCtx || new AudioContext();
            const n = audioCtx.currentTime, o = audioCtx.createOscillator(), g = audioCtx.createGain();
            o.type = "square";
            o.frequency.setValueAtTime(f, n);
            o.frequency.exponentialRampToValueAtTime(f / 2, n + 0.1);
            g.gain.setValueAtTime(0.04, n);
            g.gain.exponentialRampToValueAtTime(0.001, n + 0.12);
            o.connect(g);
            g.connect(audioCtx.destination);
            o.start();
            o.stop(n + 0.12);
        } catch (e) { /* sound is optional */ }
    }

    let partGeo = null;

    function burst(x, y, z, b) {
        partGeo = partGeo || new THREE_.BoxGeometry(0.12, 0.12, 0.12);
        for (let i = 0; i < 10; i++) {
            const m = new THREE_.Mesh(partGeo, new THREE_.MeshBasicMaterial({ color: BCOL[b] || 0x888888 }));
            m.position.set(x + Math.random(), y + Math.random(), z + Math.random());
            scene.add(m);
            particles.push({ m: m, vx: (Math.random() - 0.5) * 3, vy: 1 + Math.random() * 3, vz: (Math.random() - 0.5) * 3, life: 0.7 });
        }
        sfx(140);
    }

    function updateParticles(dt) {
        for (let i = particles.length - 1; i >= 0; i--) {
            const p = particles[i];
            p.life -= dt;
            p.vy -= 18 * dt;
            p.m.position.x += p.vx * dt;
            p.m.position.y += p.vy * dt;
            p.m.position.z += p.vz * dt;
            if (p.life <= 0) { scene.remove(p.m); p.m.material.dispose(); particles.splice(i, 1); }
        }
    }

    function actBreak() {
        if (banned() || !target || target.y === 0) return;
        setBlock(target.x, target.y, target.z, AIR, true);
    }

    // Hold left click to mine; harder blocks take longer
    function updateMining(dt) {
        if (isLocked() && mouse[0] && target && !banned() && target.y > 0) {
            const key = idx(target.x, target.y, target.z);
            if (key !== mineKey) { mineKey = key; mineT = 0; }
            mineT += dt;
            const b = getBlock(target.x, target.y, target.z);
            const need = HARD[b] || 0.5;
            crack.visible = true;
            crack.position.set(target.x + 0.5, target.y + 0.5, target.z + 0.5);
            crack.material.opacity = Math.min(0.7, mineT / need * 0.7);
            if (mineT >= need) {
                burst(target.x, target.y, target.z, b);
                actBreak();
                mineKey = null;
                mineT = 0;
            }
        } else {
            mineKey = null;
            mineT = 0;
            if (crack) crack.visible = false;
        }
    }

    function actPlace() {
        if (banned() || !target) return;
        const { px, py, pz } = target;
        if (px === target.x && py === target.y && pz === target.z) return;
        const cur = getBlock(px, py, pz);
        if (cur !== AIR && cur !== WATER) return;
        const p = player;
        if (p.x - 0.3 < px + 1 && p.x + 0.3 > px && p.y < py + 1 && p.y + 1.8 > py && p.z - 0.3 < pz + 1 && p.z + 0.3 > pz) return;
        setBlock(px, py, pz, HOTBAR[sel], true);
        sfx(200);
    }

    const isLocked = () => document.pointerLockElement === canvas;

    function selectSlot(i) {
        sel = (i + HOTBAR.length) % HOTBAR.length;
        Array.from(hotbarEl.children).forEach((el, n) => el.classList.toggle("sel", n === sel));
    }

    function drawSlot(n) {
        const slot = hotbarEl.children[n];
        if (!slot) return;
        const g = slot.querySelector("canvas").getContext("2d");
        const b = HOTBAR[n];
        g.imageSmoothingEnabled = false;
        g.clearRect(0, 0, 32, 32);
        g.drawImage(atlasCanvas, (b === GRASS ? 1 : tileFor(b, 2)) * TILE, 0, TILE, TILE, 0, 0, 32, 32);
    }

    function setSlot(n, b) {
        HOTBAR[n] = b;
        drawSlot(n);
    }

    function buildHotbar() {
        hotbarEl.replaceChildren();
        HOTBAR.forEach((b, n) => {
            const slot = document.createElement("div");
            slot.className = "slot";
            const c = document.createElement("canvas");
            c.width = 32; c.height = 32;
            slot.appendChild(c);
            const num = document.createElement("span");
            num.textContent = n + 1;
            slot.appendChild(num);
            slot.addEventListener("click", () => selectSlot(n));
            hotbarEl.appendChild(slot);
            drawSlot(n);
        });
        selectSlot(0);
    }

    // ---------- Input ----------
    document.addEventListener("keydown", (e) => {
        if (!panelOpen || !isLocked()) return;
        if (e.code === "Space" || e.code.startsWith("Arrow")) e.preventDefault();
        if (e.repeat) return;
        keys[e.code] = true;
        if (e.code === "Space") {
            const now = performance.now();
            if (now - lastSpace < 300) { player.fly = !player.fly; player.vy = 0; }
            lastSpace = now;
        }
        if (e.code === "KeyV") view = (view + 1) % 3;
        if (e.code === "KeyE" || e.code === "KeyQ") {
            const cur = PALETTE.indexOf(HOTBAR[sel]);
            const step = e.code === "KeyE" ? 1 : -1;
            setSlot(sel, PALETTE[(cur + step + PALETTE.length) % PALETTE.length]);
        }
        if (e.code.startsWith("Digit")) {
            const n = parseInt(e.code.slice(5), 10);
            if (n >= 1 && n <= HOTBAR.length) selectSlot(n - 1);
        }
    });

    document.addEventListener("keyup", (e) => { keys[e.code] = false; });

    document.addEventListener("mousemove", (e) => {
        if (!isLocked()) return;
        player.yaw -= e.movementX * 0.0022;
        player.pitch = Math.max(-1.55, Math.min(1.55, player.pitch - e.movementY * 0.0022));
    });

    canvas.addEventListener("mousedown", (e) => {
        if (!isLocked()) return;
        e.preventDefault();
        if (e.button === 0) mouse[0] = true;
        if (e.button === 2) { mouse[2] = true; actPlace(); actTimer = 0; }
        if (e.button === 1 && target) { // middle click: pick block
            const b = getBlock(target.x, target.y, target.z);
            if (PALETTE.includes(b)) setSlot(sel, b);
        }
    });
    document.addEventListener("mouseup", (e) => { mouse[e.button] = false; });
    canvas.addEventListener("contextmenu", (e) => e.preventDefault());
    canvas.addEventListener("wheel", (e) => {
        if (!isLocked()) return;
        e.preventDefault();
        selectSlot(sel + (e.deltaY > 0 ? 1 : -1));
    }, { passive: false });

    document.addEventListener("pointerlockchange", () => {
        const locked = isLocked();
        menu.hidden = locked && panelOpen;
        if (!locked) { for (const k in keys) keys[k] = false; mouse[0] = mouse[2] = false; }
        if (locked) say("");
    });

    playBtn.addEventListener("click", () => canvas.requestPointerLock());
    canvas.addEventListener("click", () => { if (!isLocked() && panelOpen && !playBtn.disabled) canvas.requestPointerLock(); });

    $("mcFull").addEventListener("click", () => {
        if (document.fullscreenElement) document.exitFullscreen();
        else wrap.requestFullscreen && wrap.requestFullscreen();
    });

    // ---------- Sky ----------
    function lerpColor(a, b, t) {
        return [a[0] + (b[0] - a[0]) * t, a[1] + (b[1] - a[1]) * t, a[2] + (b[2] - a[2]) * t];
    }

    function updateSky() {
        const cycle = 480000;
        const a = ((Date.now() % cycle) / cycle) * Math.PI * 2;
        const raw = Math.sin(a);
        const df = Math.max(0, Math.min(1, (raw + 0.15) / 0.5));
        const sm = df * df * (3 - 2 * df);
        const night = [5, 7, 18], day = [120, 167, 255];
        const c = lerpColor(night, day, sm);
        const col = new THREE_.Color(c[0] / 255, c[1] / 255, c[2] / 255);
        renderer.setClearColor(col);
        scene.fog.color.copy(col);
        const b = 0.22 + 0.78 * sm;
        litMats.forEach((m) => m.color.setScalar(b));
        terrainMat.color.setScalar(b);
        waterMat.color.setScalar(b);
        cloudMat.color.setScalar(b);

        const cp = camera.position;
        sunMesh.position.set(cp.x + Math.cos(a) * 150, cp.y + Math.sin(a) * 150, cp.z + 20);
        moonMesh.position.set(cp.x - Math.cos(a) * 150, cp.y - Math.sin(a) * 150, cp.z - 20);
        sunMesh.lookAt(cp); moonMesh.lookAt(cp);
        stars.position.copy(cp);
        stars.material.opacity = Math.max(0, Math.min(1, 1 - sm * 1.6));
    }

    // ---------- Init ----------
    function loadScript(src) {
        return new Promise((resolve, reject) => {
            const s = document.createElement("script");
            s.src = src;
            s.onload = resolve;
            s.onerror = () => reject(new Error("Could not load " + src));
            document.head.appendChild(s);
        });
    }

    async function init() {
        if (!window.THREE) await loadScript(THREE_URL);
        THREE_ = window.THREE;
        THREE_.ColorManagement.enabled = false;

        renderer = new THREE_.WebGLRenderer({ canvas: canvas, antialias: false });
        renderer.outputColorSpace = THREE_.LinearSRGBColorSpace;
        renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));

        scene = new THREE_.Scene();
        scene.fog = new THREE_.Fog(0x78a7ff, 45, 115);
        camera = new THREE_.PerspectiveCamera(75, 1, 0.05, 400);
        camera.rotation.order = "YXZ";

        atlasTex = makeAtlas();
        terrainMat = new THREE_.MeshBasicMaterial({ map: atlasTex, vertexColors: true, alphaTest: 0.5 });
        waterMat = new THREE_.MeshBasicMaterial({ map: atlasTex, vertexColors: true, transparent: true, depthWrite: false, side: THREE_.DoubleSide });

        highlight = new THREE_.LineSegments(
            new THREE_.EdgesGeometry(new THREE_.BoxGeometry(1.003, 1.003, 1.003)),
            new THREE_.LineBasicMaterial({ color: 0x000000 })
        );
        highlight.visible = false;
        scene.add(highlight);

        // Dark overlay that fades in while you mine a block
        crack = new THREE_.Mesh(
            new THREE_.BoxGeometry(1.01, 1.01, 1.01),
            new THREE_.MeshBasicMaterial({ color: 0x000000, transparent: true, opacity: 0, depthWrite: false, fog: false })
        );
        crack.visible = false;
        scene.add(crack);

        // Blocky clouds that drift across the sky
        const cc = document.createElement("canvas");
        cc.width = cc.height = 32;
        const cg = cc.getContext("2d");
        cg.fillStyle = "#fff";
        for (let i = 0; i < 32; i += 2) {
            for (let k = 0; k < 32; k += 2) {
                if (fbm(i / 8, k / 8) > 0.55) cg.fillRect(i, k, 2, 2);
            }
        }
        const ct = new THREE_.CanvasTexture(cc);
        ct.magFilter = THREE_.NearestFilter;
        ct.minFilter = THREE_.NearestFilter;
        ct.generateMipmaps = false;
        ct.wrapS = ct.wrapT = THREE_.RepeatWrapping;
        ct.repeat.set(4, 4);
        cloudMat = new THREE_.MeshBasicMaterial({ map: ct, transparent: true, opacity: 0.8, depthWrite: false, fog: false, side: THREE_.DoubleSide });
        clouds = new THREE_.Mesh(new THREE_.PlaneGeometry(512, 512), cloudMat);
        clouds.rotation.x = -Math.PI / 2;
        clouds.position.y = H + 12;
        scene.add(clouds);

        const orb = (color) => {
            const m = new THREE_.Mesh(new THREE_.PlaneGeometry(26, 26), new THREE_.MeshBasicMaterial({ color: color, fog: false }));
            scene.add(m);
            return m;
        };
        sunMesh = orb(0xfff3b0);
        moonMesh = orb(0xd5dcf0);

        const sp = [];
        for (let i = 0; i < 500; i++) {
            const u = Math.random() * 2 - 1, th = Math.random() * Math.PI * 2, r = Math.sqrt(1 - u * u);
            sp.push(Math.cos(th) * r * 200, Math.abs(u) * 200, Math.sin(th) * r * 200);
        }
        const sg = new THREE_.BufferGeometry();
        sg.setAttribute("position", new THREE_.Float32BufferAttribute(sp, 3));
        stars = new THREE_.Points(sg, new THREE_.PointsMaterial({ color: 0xffffff, size: 2, sizeAttenuation: false, transparent: true, fog: false, depthWrite: false }));
        scene.add(stars);

        const skinCanvas = paintDefaultSkin();
        defaultSkinTex = skinTexture(skinCanvas);

        generate();
        for (let cz = 0; cz < NCZ; cz++) for (let cx = 0; cx < NCX; cx++) buildChunk(cx, cz);

        buildHotbar();
        respawn();
        player.pitch = 0;

        new ResizeObserver(resize).observe(wrap);
        document.addEventListener("fullscreenchange", resize);
        inited = true;
    }

    function resize() {
        if (!renderer) return;
        const w = wrap.clientWidth, h = wrap.clientHeight;
        if (!w || !h) return;
        renderer.setSize(w, h, false);
        camera.aspect = w / h;
        camera.updateProjectionMatrix();
    }

    // ---------- Frame update ----------
    let lastFrame = 0;

    function update(dt) {
        const t = performance.now() / 1000;

        let left = dt;
        while (left > 0) { const st = Math.min(left, 0.02); physics(st); left -= st; }

        if (isLocked()) {
            actTimer += dt;
            if (actTimer > 0.22 && mouse[2]) { actPlace(); actTimer = 0; }
        }
        updateMining(dt);
        updateParticles(dt);

        flushDirty(4);

        // Camera
        const eye = [player.x, player.y + 1.62, player.z];
        const dir = lookDir();
        if (view === 0) {
            camera.position.set(eye[0], eye[1], eye[2]);
            camera.rotation.set(player.pitch, player.yaw, 0);
        } else {
            const sign = view === 1 ? -1 : 1;
            let d = 4;
            for (let k = 0.3; k <= 4; k += 0.1) {
                const px = eye[0] + dir[0] * sign * k, py = eye[1] + dir[1] * sign * k, pz = eye[2] + dir[2] * sign * k;
                if (isSolid(getBlock(Math.floor(px), Math.floor(py), Math.floor(pz)))) { d = Math.max(0.4, k - 0.25); break; }
            }
            camera.position.set(eye[0] + dir[0] * sign * d, eye[1] + dir[1] * sign * d, eye[2] + dir[2] * sign * d);
            camera.lookAt(eye[0], eye[1], eye[2]);
        }

        // Clouds follow the camera, and the texture scrolls so they stay put in the world
        clouds.position.x = camera.position.x;
        clouds.position.z = camera.position.z;
        cloudMat.map.offset.set(camera.position.x / 128 + t * 0.003, -camera.position.z / 128);

        // Target block
        target = raycast(eye[0], eye[1], eye[2], dir[0], dir[1], dir[2], 6);
        if (target && isLocked()) {
            highlight.visible = true;
            highlight.position.set(target.x + 0.5, target.y + 0.5, target.z + 0.5);
        } else {
            highlight.visible = false;
        }

        // My avatar
        me.root.visible = view !== 0;
        me.root.position.set(player.x, player.y, player.z);
        me.root.rotation.y = player.yaw + Math.PI;
        me.head.rotation.x = -Math.max(-1, Math.min(1, player.pitch));
        me.animate(player.speed > 0.5 && (player.onGround || player.fly || player.inWater), t, dt);

        // Other players
        const now = performance.now();
        const k = 1 - Math.exp(-dt * 12);
        for (const peer of Array.from(peers.values())) {
            if (now - peer.last > 8000) { removePeer(peer.id); continue; }
            const r = peer.av.root;
            r.position.x += (peer.tx - r.position.x) * k;
            r.position.y += (peer.ty - r.position.y) * k;
            r.position.z += (peer.tz - r.position.z) * k;
            let da = (peer.ta + Math.PI) - r.rotation.y;
            da = Math.atan2(Math.sin(da), Math.cos(da));
            r.rotation.y += da * k;
            peer.av.head.rotation.x = -Math.max(-1, Math.min(1, peer.tp));
            peer.av.animate(peer.moving, t, dt);
        }

        sendPos(dt);
        updateSky();

        infoTimer += dt;
        if (infoTimer > 0.25) {
            infoTimer = 0;
            infoEl.textContent = "XYZ " + player.x.toFixed(1) + " " + player.y.toFixed(1) + " " + player.z.toFixed(1) + (player.fly ? "  (flying)" : "");
        }
    }

    function loop() {
        if (!running) { looping = false; return; }
        requestAnimationFrame(loop);
        const now = performance.now();
        const dt = Math.min(0.05, (now - lastFrame) / 1000);
        lastFrame = now;
        update(dt);
        renderer.render(scene, camera);
    }

    // ---------- Enter / leave ----------
    async function enter() {
        if (panelOpen) return;
        panelOpen = true;
        const token = ++entering;
        menu.hidden = false;
        playBtn.disabled = true;
        playBtn.textContent = "Loading...";
        say("");

        try {
            const { data } = await db.auth.getSession();
            if (!data.session) { say("Please log in first."); return; }
            uid = data.session.user.id;

            if (!inited) await init();
            if (token !== entering || !panelOpen) return;

            if (!me) me = createAvatar(defaultSkinTex, myName);
            await loadMe();
            loadMySkin();
            if (token !== entering || !panelOpen) return;

            connect();
            resize();
            running = true;
            if (!looping) { looping = true; lastFrame = performance.now(); loop(); }

            playBtn.disabled = false;
            playBtn.textContent = "Click to play";
            clearInterval(nameTimerId);
            nameTimerId = setInterval(refreshNameUI, 30000);
        } catch (err) {
            console.error(err);
            say("Could not start the game: " + err.message);
        }
    }

    function leave() {
        panelOpen = false;
        running = false;
        entering++;
        clearInterval(nameTimerId);
        if (document.pointerLockElement) document.exitPointerLock();
        disconnect();
    }
})();
