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
const tabBlirs = document.getElementById("tabBlirs");
const dmBadge = document.getElementById("dmBadge");
const publicPanel = document.getElementById("publicPanel");
const dmPanel = document.getElementById("dmPanel");
const blirsPanel = document.getElementById("blirsPanel");
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
        blirsApi.sync(null);
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
    blirsApi.sync(session);
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

                // Counts toward the "send 5 chat messages" blir quest
                if (currentSession && payload.new.user_id === currentSession.user.id) {
                    blirsApi.countMessage();
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

// view: false = public chat, true = DMs, "admin" = admin panel, "blirs" = blirs game
function switchPanel(view) {
    const v = view === "admin" ? "admin" : view === "blirs" ? "blirs" : view ? "dms" : "public";

    publicPanel.hidden = v !== "public";
    dmPanel.hidden = v !== "dms";
    blirsPanel.hidden = v !== "blirs";
    adminPanel.hidden = v !== "admin";
    tabPublic.classList.toggle("active", v === "public");
    tabDMs.classList.toggle("active", v === "dms");
    tabBlirs.classList.toggle("active", v === "blirs");
    tabAdmin.classList.toggle("active", v === "admin");
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
