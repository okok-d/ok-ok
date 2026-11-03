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
    blirsApi.resetProfileView();

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

    // Blir showcase (loads on its own; doesn't block the rest of the profile)
    blirsApi.showProfile(userId, !!isMine);

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

// =====================================================================
// RESTORED: admin panel (your pasted file ended before this existed).
// If your real script.js already has loadAdmin() and its handlers, delete
// this whole block and keep yours.
// =====================================================================

let adminUsers = [];
let adminBadgeKeys = new Map(); // user id -> [badge keys]

async function clearRoom(room) {
    if (!isOwner) return;
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
    if (room === activeRoom) loadMessages();
}

function renderAdminList() {
    const q = adminSearch.value.trim().toLowerCase();

    adminList.replaceChildren();

    adminUsers
        .filter((u) =>
            !q ||
            (u.username || "").toLowerCase().includes(q) ||
            (u.display_name || "").toLowerCase().includes(q))
        .slice(0, 200)
        .forEach((u) => {
            const row = document.createElement("div");
            row.className = "admin-row";

            const info = document.createElement("div");
            info.className = "admin-info";

            const name = document.createElement("strong");
            name.textContent = u.display_name || u.username;

            const handle = document.createElement("span");
            handle.className = "handle";
            handle.textContent = "@" + u.username;

            const badges = document.createElement("div");
            badges.className = "badges";

            (adminBadgeKeys.get(u.id) || []).forEach((key) => {
                const b = allBadges.find((x) => x.key === key);
                if (!b) return;

                const pill = document.createElement("span");
                pill.className = "pill";
                pill.append(makeIcon(b.icon), " " + b.label);
                pill.style.color = b.color;
                pill.style.borderColor = b.color;
                badges.appendChild(pill);
            });

            info.append(name, handle, badges);

            const actions = document.createElement("div");
            actions.className = "admin-actions";

            const open = document.createElement("button");
            open.textContent = "Open profile";
            open.addEventListener("click", () => openProfile(u.id));
            actions.appendChild(open);

            row.append(info, actions);
            adminList.appendChild(row);
        });
}

async function loadAdmin() {
    if (!isOwner) return;

    adminRooms.replaceChildren();

    roomTabs.querySelectorAll(".room").forEach((r) => {
        const button = document.createElement("button");
        button.className = "room danger";
        button.textContent = r.textContent;
        button.addEventListener("click", () => clearRoom(r.dataset.room));
        adminRooms.appendChild(button);
    });

    const [users, owned, msgCount, banCount] = await Promise.all([
        db.from("profiles").select("id, username, display_name").order("username"),
        db.from("user_badges").select("user_id, badge_key"),
        db.from("messages").select("id", { count: "exact", head: true }),
        db.from("bans").select("user_id", { count: "exact", head: true })
    ]);

    if (users.error) {
        status.textContent = "Admin load failed: " + users.error.message;
        return;
    }

    adminUsers = users.data || [];
    adminBadgeKeys = new Map();

    (owned.data || []).forEach((r) => {
        if (!adminBadgeKeys.has(r.user_id)) adminBadgeKeys.set(r.user_id, []);
        adminBadgeKeys.get(r.user_id).push(r.badge_key);
    });

    adminStats.textContent =
        "Users: " + adminUsers.length +
        " · Public messages: " + (msgCount.count || 0) +
        " · Banned: " + (banCount.count || 0);

    renderAdminList();
}

tabAdmin.addEventListener("click", () => {
    switchPanel("admin");
    loadAdmin();
});

adminRefresh.addEventListener("click", loadAdmin);
adminSearch.addEventListener("input", renderAdminList);

// =====================================================================
// Heartbeat monitor (bottom-left ECG). heartbeat.spike() = big spike.
// =====================================================================

const heartbeat = (function () {
    const box = document.getElementById("heartbeatBox");
    const canvas = document.getElementById("heartbeatCanvas");
    const bpmEl = document.getElementById("heartbeatBpm");
    const dot = document.getElementById("hbDot");
    const ctx = canvas.getContext("2d");

    const SPEED = 80; // trace pixels per second

    let w = 150;
    let h = 44;
    let samples = [];
    let colors = { fg: "#000000", line: "#dddddd" };
    let bpm = 72;
    let restBpm = 72;
    let beatT = 0;
    let period = 60 / 72;
    let beatAmp = 1;
    let queue = [];       // amplitudes of upcoming beats (used by big spikes)
    let acc = 0;
    let last = performance.now();
    let shown = 0;
    let spikeTimer = null;

    function readColors() {
        const cs = getComputedStyle(document.documentElement);
        colors.fg = cs.getPropertyValue("--fg").trim() || "#000000";
        colors.line = cs.getPropertyValue("--line").trim() || "#dddddd";
    }

    function resize() {
        const dpr = window.devicePixelRatio || 1;
        w = Math.max(40, Math.round(canvas.clientWidth));
        h = Math.max(20, Math.round(canvas.clientHeight));
        canvas.width = Math.round(w * dpr);
        canvas.height = Math.round(h * dpr);
        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
        samples = new Array(w).fill(0);
    }

    function gauss(p, center, width, amp) {
        const d = p - center;
        return amp * Math.exp(-(d * d) / (2 * width * width));
    }

    // One heartbeat (P, Q, R, S, T waves); p runs 0..1 across the beat
    function wave(p, amp) {
        return gauss(p, 0.14, 0.035, 0.12) +
            gauss(p, 0.27, 0.014, -0.15 * amp) +
            gauss(p, 0.30, 0.02, 1.0 * amp) +
            gauss(p, 0.335, 0.016, -0.28 * amp) +
            gauss(p, 0.58, 0.05, 0.22 + (amp > 1 ? 0.08 * (amp - 1) : 0));
    }

    function startBeat() {
        beatT = 0;
        period = 60 / Math.max(45, bpm);

        if (queue.length) {
            beatAmp = queue.shift();
        } else if (Math.random() < 0.12) {
            beatAmp = 1.4 + Math.random() * 0.3;   // small idle spike
        } else {
            beatAmp = 1 + (Math.random() - 0.5) * 0.1;
        }

        dot.classList.remove("beat");
        void dot.offsetWidth;
        dot.classList.add("beat");
    }

    function push(step) {
        beatT += step;
        if (beatT >= period) startBeat();

        const value = wave(beatT / period, beatAmp) + (Math.random() - 0.5) * 0.015;
        samples.push(value);
        samples.shift();
    }

    function draw() {
        const base = h * 0.72;
        const unit = h * 0.22;

        ctx.clearRect(0, 0, w, h);

        // faint monitor grid
        ctx.lineWidth = 1;
        ctx.strokeStyle = colors.line;
        ctx.globalAlpha = 0.8;
        ctx.beginPath();
        for (let x = 0; x <= w; x += 15) { ctx.moveTo(x + 0.5, 0); ctx.lineTo(x + 0.5, h); }
        for (let y = 0; y <= h; y += 11) { ctx.moveTo(0, y + 0.5); ctx.lineTo(w, y + 0.5); }
        ctx.stroke();
        ctx.globalAlpha = 1;

        // the trace
        ctx.strokeStyle = colors.fg;
        ctx.fillStyle = colors.fg;
        ctx.lineWidth = 1.6;
        ctx.lineJoin = "round";
        ctx.beginPath();

        let lastY = base;

        for (let i = 0; i < samples.length; i++) {
            const y = Math.min(h - 1.5, Math.max(1.5, base - samples[i] * unit));
            if (i === 0) ctx.moveTo(i + 0.5, y); else ctx.lineTo(i + 0.5, y);
            lastY = y;
        }

        ctx.stroke();

        // bright "head" at the newest sample
        ctx.beginPath();
        ctx.arc(samples.length - 1.5, lastY, 2, 0, Math.PI * 2);
        ctx.fill();
    }

    function frame(now) {
        requestAnimationFrame(frame);

        const dt = Math.min(0.1, (now - last) / 1000);
        last = now;

        // heart rate eases back to its resting value after a spike
        bpm += (restBpm - bpm) * Math.min(1, dt * 0.6);

        acc += dt * SPEED;
        while (acc >= 1) {
            acc -= 1;
            push(1 / SPEED);
        }

        draw();

        const rounded = Math.round(bpm);
        if (rounded !== shown) {
            shown = rounded;
            bpmEl.textContent = String(rounded);
        }
    }

    // Big, noticeable spike (called when a Blir is collected)
    function spike() {
        queue = [2.7, 1.8, 1.4];             // big beat, then two aftershocks
        bpm = 132 + Math.random() * 16;
        beatT = period;                      // start the big beat right away

        box.classList.remove("spike");
        void box.offsetWidth;
        box.classList.add("spike");

        clearTimeout(spikeTimer);
        spikeTimer = setTimeout(() => box.classList.remove("spike"), 2600);
    }

    readColors();
    resize();
    window.addEventListener("resize", resize);

    new MutationObserver(readColors).observe(document.documentElement, {
        attributes: true,
        attributeFilter: ["data-theme"]
    });

    // resting heart rate drifts a little
    setInterval(() => { restBpm = 66 + Math.random() * 14; }, 4000);

    requestAnimationFrame(frame);

    return { spike: spike };
})();

// =====================================================================
// Blirs: collectibles, inventory, rewards, profile showcase
// =====================================================================

const RARITIES = ["common", "uncommon", "rare", "epic", "legendary", "mythic"];
const RARITY_LABELS = {
    common: "Common", uncommon: "Uncommon", rare: "Rare",
    epic: "Epic", legendary: "Legendary", mythic: "Mythic"
};
const BLIR_ANIMATIONS = ["pop", "spin", "drop", "shake", "glitch", "glow", "float", "flip"];
const SHOWCASE_MAX = 6;
const QUEST_TARGET = 5;

// Blir elements
const blirTotalEl = document.getElementById("blirTotal");
const blirUniqueEl = document.getElementById("blirUnique");
const claimDailyButton = document.getElementById("claimDaily");
const claimQuestButton = document.getElementById("claimQuest");
const questProgressEl = document.getElementById("questProgress");
const blirSearch = document.getElementById("blirSearch");
const blirFilter = document.getElementById("blirFilter");
const blirSort = document.getElementById("blirSort");
const blirGrid = document.getElementById("blirGrid");
const blirEmpty = document.getElementById("blirEmpty");

const blirModal = document.getElementById("blirModal");
const closeBlirModal = document.getElementById("closeBlirModal");
const blirModalArt = document.getElementById("blirModalArt");
const blirModalName = document.getElementById("blirModalName");
const blirModalRarity = document.getElementById("blirModalRarity");
const blirModalDesc = document.getElementById("blirModalDesc");
const blirModalOwned = document.getElementById("blirModalOwned");
const blirModalFirst = document.getElementById("blirModalFirst");
const blirShowcaseToggle = document.getElementById("blirShowcaseToggle");

const blirReveal = document.getElementById("blirReveal");
const revealArtWrap = document.getElementById("revealArtWrap");
const revealArt = document.getElementById("revealArt");
const revealName = document.getElementById("revealName");
const revealRarity = document.getElementById("revealRarity");
const revealNote = document.getElementById("revealNote");
const revealClose = document.getElementById("revealClose");
const blirToasts = document.getElementById("blirToasts");

const showcaseSection = document.getElementById("profileShowcase");
const showcaseGrid = document.getElementById("showcaseGrid");
const showcaseEditButton = document.getElementById("showcaseEditButton");
const showcaseEditor = document.getElementById("showcaseEditor");
const showcaseCount = document.getElementById("showcaseCount");
const showcaseSlots = document.getElementById("showcaseSlots");
const showcasePicker = document.getElementById("showcasePicker");
const showcaseSaveButton = document.getElementById("showcaseSave");
const showcaseCancelButton = document.getElementById("showcaseCancel");

// ----- helpers -----

function safeColor(value, fallback) {
    return /^#[0-9a-f]{6}$/i.test(value || "") ? value : fallback;
}

function rarityRank(rarity) {
    return Math.max(0, RARITIES.indexOf(rarity));
}

function rarityPill(rarity) {
    const r = RARITIES.includes(rarity) ? rarity : "common";
    const pill = document.createElement("span");
    pill.className = "rarity r-" + r;
    pill.textContent = RARITY_LABELS[r];
    return pill;
}

function utcDay() {
    return new Date().toISOString().slice(0, 10);
}

// Only images from your own Supabase storage or a relative file are trusted
function trustedBlirImage(url) {
    if (!url) return null;
    if (url.startsWith(SUPABASE_URL + "/storage/")) return url;
    if (/^[\w\-./]+\.(png|jpe?g|webp|gif|svg)$/i.test(url) && !url.startsWith("/") && !url.includes("..")) {
        return url;
    }
    return null;
}

function svgEl(name, attrs) {
    const el = document.createElementNS("http://www.w3.org/2000/svg", name);
    Object.keys(attrs).forEach((k) => el.setAttribute(k, attrs[k]));
    return el;
}

// Draws a Blir character from its id and colors
function drawBlirSvg(b) {
    const id = String((b && b.id) || "x");
    let hash = 0;
    for (let i = 0; i < id.length; i++) hash = (hash * 31 + id.charCodeAt(i)) >>> 0;

    const color = safeColor(b && b.color, "#999999");
    const accent = safeColor(b && b.accent, "#ffffff");
    const shape = hash % 4;
    const extra = (hash >> 3) % 3;
    const mouth = (hash >> 5) % 3;
    const body = { fill: color, stroke: "rgba(128,128,128,0.65)", "stroke-width": 3 };

    const svg = svgEl("svg", {
        viewBox: "0 0 100 100",
        class: "blir-art",
        role: "img",
        "aria-label": (b && b.name) || "Blir"
    });

    if (extra === 1) {
        svg.appendChild(svgEl("circle", Object.assign({ cx: 27, cy: 26, r: 10 }, body)));
        svg.appendChild(svgEl("circle", Object.assign({ cx: 73, cy: 26, r: 10 }, body)));
    } else if (extra === 2) {
        svg.appendChild(svgEl("line", { x1: 50, y1: 22, x2: 50, y2: 8, stroke: "rgba(128,128,128,0.8)", "stroke-width": 3 }));
        svg.appendChild(svgEl("circle", { cx: 50, cy: 7, r: 5, fill: accent, stroke: "rgba(128,128,128,0.65)", "stroke-width": 2 }));
    }

    if (shape === 0) {
        svg.appendChild(svgEl("circle", Object.assign({ cx: 50, cy: 54, r: 35 }, body)));
    } else if (shape === 1) {
        svg.appendChild(svgEl("rect", Object.assign({ x: 18, y: 24, width: 64, height: 62, rx: 24 }, body)));
    } else if (shape === 2) {
        svg.appendChild(svgEl("ellipse", Object.assign({ cx: 50, cy: 54, rx: 31, ry: 37 }, body)));
    } else {
        svg.appendChild(svgEl("path", Object.assign({
            d: "M20 86 L20 50 Q20 16 50 16 Q80 16 80 50 L80 86 Q70 78 60 86 Q50 78 40 86 Q30 78 20 86 Z",
            "stroke-linejoin": "round"
        }, body)));
    }

    // cheeks, eyes, mouth
    svg.appendChild(svgEl("circle", { cx: 28, cy: 62, r: 5, fill: accent, opacity: 0.85 }));
    svg.appendChild(svgEl("circle", { cx: 72, cy: 62, r: 5, fill: accent, opacity: 0.85 }));
    svg.appendChild(svgEl("circle", { cx: 38, cy: 50, r: 8, fill: "#ffffff" }));
    svg.appendChild(svgEl("circle", { cx: 62, cy: 50, r: 8, fill: "#ffffff" }));
    svg.appendChild(svgEl("circle", { cx: 39, cy: 51, r: 4, fill: "#111111" }));
    svg.appendChild(svgEl("circle", { cx: 63, cy: 51, r: 4, fill: "#111111" }));

    if (mouth === 0) {
        svg.appendChild(svgEl("path", { d: "M38 66 Q50 78 62 66", fill: "none", stroke: "#111111", "stroke-width": 3, "stroke-linecap": "round" }));
    } else if (mouth === 1) {
        svg.appendChild(svgEl("path", { d: "M42 69 L58 69", fill: "none", stroke: "#111111", "stroke-width": 3, "stroke-linecap": "round" }));
    } else {
        svg.appendChild(svgEl("circle", { cx: 50, cy: 70, r: 5, fill: "#111111" }));
    }

    return svg;
}

function blirArt(b) {
    const url = trustedBlirImage(b && b.image_url);

    if (url) {
        const img = document.createElement("img");
        img.className = "blir-art";
        img.src = url;
        img.alt = (b && b.name) || "Blir";
        img.onerror = () => img.replaceWith(drawBlirSvg(b));
        return img;
    }

    return drawBlirSvg(b);
}

function artWrap(b) {
    const wrap = document.createElement("div");
    wrap.className = "blir-art-wrap";
    wrap.appendChild(blirArt(b));
    return wrap;
}

// ----- the Blirs module -----

const blirsApi = (function () {
    let catalog = new Map();   // blir id -> definition
    let owned = new Map();     // blir id -> { quantity, first_obtained_at, last_obtained_at }
    let myShowcase = [];       // my showcased blir ids, in order
    let claimedToday = new Set();
    let messagesToday = 0;
    let ready = false;
    let busy = false;
    let syncId = 0;
    let editDraft = [];
    let detailId = null;
    let profileIsMine = false;

    function me() {
        return currentSession ? currentSession.user.id : null;
    }

    function explain(error) {
        const m = (error && error.message) || String(error);

        if (/schema cache|does not exist|Could not find the (table|function)/i.test(m)) {
            return "Blirs aren't set up yet. Run the Blir SQL in Supabase.";
        }

        return m;
    }

    function fail(prefix, error) {
        console.error(prefix, error);
        status.textContent = prefix + ": " + explain(error);
    }

    // ----- loading -----

    async function loadCatalog() {
        const { data, error } = await db
            .from("blirs")
            .select("id, name, rarity, description, image_url, color, accent, animation, sort_order")
            .order("sort_order");

        if (error) {
            fail("Could not load Blirs", error);
            return false;
        }

        catalog = new Map(data.map((b) => [b.id, b]));
        return true;
    }

    async function loadInventory() {
        const uid = me();
        if (!uid) return false;

        const { data, error } = await db
            .from("user_blirs")
            .select("blir_id, quantity, first_obtained_at, last_obtained_at")
            .eq("user_id", uid);

        if (error) {
            fail("Could not load your inventory", error);
            return false;
        }

        if (uid !== me()) return false;
        owned = new Map(data.map((r) => [r.blir_id, r]));
        return true;
    }

    async function fetchShowcase(userId) {
        const { data, error } = await db
            .from("blir_showcase")
            .select("blir_id, slot")
            .eq("user_id", userId)
            .order("slot");

        if (error) {
            fail("Could not load showcase", error);
            return null;
        }

        return data.map((r) => r.blir_id);
    }

    async function refreshRewards() {
        const uid = me();
        if (!uid) return;

        const day = utcDay();

        const [claims, count] = await Promise.all([
            db.from("blir_claims").select("source").eq("user_id", uid).eq("claim_day", day),
            db.from("messages")
                .select("id", { count: "exact", head: true })
                .eq("user_id", uid)
                .gte("created_at", day + "T00:00:00Z")
        ]);

        if (uid !== me()) return;

        if (!claims.error) claimedToday = new Set(claims.data.map((r) => r.source));
        if (!count.error) messagesToday = count.count || 0;

        renderRewards();
    }

    // ----- rendering: inventory -----

    function renderRewards() {
        const dailyDone = claimedToday.has("daily");
        const questDone = claimedToday.has("chat_quest");

        claimDailyButton.disabled = !ready || busy || dailyDone;
        claimDailyButton.textContent = dailyDone ? "Daily Blir claimed ✓" : "Claim daily Blir";

        questProgressEl.textContent =
            "Send " + QUEST_TARGET + " chat messages today: " +
            Math.min(messagesToday, QUEST_TARGET) + "/" + QUEST_TARGET;

        claimQuestButton.disabled = !ready || busy || questDone || messagesToday < QUEST_TARGET;
        claimQuestButton.textContent = questDone ? "Quest Blir claimed ✓" : "Claim quest Blir";
    }

    function renderInventory() {
        let total = 0;
        owned.forEach((row) => { total += row.quantity; });

        blirTotalEl.textContent = String(total);
        blirUniqueEl.textContent = owned.size + " / " + catalog.size;

        const filter = blirFilter.value;
        const q = blirSearch.value.trim().toLowerCase();

        let list = [];
        owned.forEach((row, id) => {
            const b = catalog.get(id);
            if (b) list.push({ b: b, row: row });
        });

        list = list.filter((x) =>
            (filter === "all" || x.b.rarity === filter) &&
            (!q || x.b.name.toLowerCase().includes(q)));

        const byName = (a, c) => a.b.name.localeCompare(c.b.name);
        const sorters = {
            "rarity-desc": (a, c) => rarityRank(c.b.rarity) - rarityRank(a.b.rarity) || byName(a, c),
            "rarity-asc": (a, c) => rarityRank(a.b.rarity) - rarityRank(c.b.rarity) || byName(a, c),
            "name": byName,
            "qty": (a, c) => c.row.quantity - a.row.quantity || byName(a, c),
            "recent": (a, c) => String(c.row.last_obtained_at).localeCompare(String(a.row.last_obtained_at))
        };

        list.sort(sorters[blirSort.value] || sorters["rarity-desc"]);

        blirGrid.replaceChildren();
        blirEmpty.hidden = list.length > 0;
        blirEmpty.textContent = owned.size === 0
            ? "You don't own any Blirs yet. Claim your daily Blir above!"
            : "No Blirs match your search or filter.";

        list.forEach((x) => {
            const card = document.createElement("button");
            card.className = "blir-card r-" + x.b.rarity;
            card.title = x.b.name;

            const qty = document.createElement("span");
            qty.className = "qty";
            qty.textContent = "×" + x.row.quantity;

            const name = document.createElement("span");
            name.className = "blir-name";
            name.textContent = x.b.name;

            card.append(qty, artWrap(x.b), name, rarityPill(x.b.rarity));
            card.addEventListener("click", () => openDetail(x.b.id, true));
            blirGrid.appendChild(card);
        });
    }

    function renderAll() {
        renderRewards();
        renderInventory();
    }

    // ----- detail modal -----

    function updateShowcaseToggle() {
        const inShowcase = myShowcase.includes(detailId);

        blirShowcaseToggle.textContent = inShowcase ? "Remove from showcase" : "Add to showcase";
        blirShowcaseToggle.disabled = busy || (!inShowcase && myShowcase.length >= SHOWCASE_MAX);
        blirShowcaseToggle.title = !inShowcase && myShowcase.length >= SHOWCASE_MAX
            ? "Your showcase is full (" + SHOWCASE_MAX + ")"
            : "";
    }

    function openDetail(id, mine) {
        const b = catalog.get(id);
        if (!b) return;

        detailId = id;

        blirModalArt.className = "detail-art r-" + b.rarity;
        blirModalArt.replaceChildren(blirArt(b));
        blirModalName.textContent = b.name;
        blirModalRarity.replaceChildren(rarityPill(b.rarity));
        blirModalDesc.textContent = b.description || "";

        const row = owned.get(id);

        blirModalOwned.hidden = !mine;
        blirModalFirst.hidden = !mine;
        blirShowcaseToggle.hidden = !mine || !row;

        if (mine && row) {
            blirModalOwned.textContent = "You own ×" + row.quantity;
            blirModalFirst.textContent =
                "First collected " + new Date(row.first_obtained_at).toLocaleDateString();
        }

        updateShowcaseToggle();
        blirModal.hidden = false;
    }

    // ----- showcase (profile) -----

    async function saveShowcase(ids) {
        const { error } = await db.rpc("set_blir_showcase", { p_blir_ids: ids });

        if (error) {
            fail("Showcase not saved", error);
            return false;
        }

        myShowcase = ids.slice();

        if (!profileModal.hidden && viewedProfileId === me() && !showcaseEditor.hidden === false) {
            renderShowcaseGrid(myShowcase, true);
        }

        status.textContent = "Showcase saved!";
        return true;
    }

    function renderShowcaseGrid(ids, mine) {
        showcaseGrid.replaceChildren();

        ids.forEach((id) => {
            const b = catalog.get(id);
            if (!b) return;

            const item = document.createElement("button");
            item.className = "showcase-item r-" + b.rarity;
            item.title = b.name + " (" + RARITY_LABELS[b.rarity] + ")";

            const name = document.createElement("span");
            name.textContent = b.name;

            item.append(artWrap(b), name);
            item.addEventListener("click", () => openDetail(id, mine));
            showcaseGrid.appendChild(item);
        });

        if (!showcaseGrid.children.length) {
            const empty = document.createElement("p");
            empty.className = "showcase-empty";
            empty.textContent = mine ? "Nothing showcased yet. Press Edit to pick up to 6 Blirs." : "";
            showcaseGrid.appendChild(empty);
        }
    }

    function slotButton(label, title, onClick, disabled) {
        const button = document.createElement("button");
        button.textContent = label;
        button.title = title;
        button.disabled = !!disabled;
        button.addEventListener("click", onClick);
        return button;
    }

    function renderEditor() {
        showcaseCount.textContent = editDraft.length + " / " + SHOWCASE_MAX;
        showcaseSlots.replaceChildren();

        if (!editDraft.length) {
            const hint = document.createElement("p");
            hint.className = "showcase-empty";
            hint.textContent = "Pick Blirs below to add them.";
            showcaseSlots.appendChild(hint);
        }

        editDraft.forEach((id, i) => {
            const b = catalog.get(id);
            if (!b) return;

            const row = document.createElement("div");
            row.className = "showcase-slot r-" + b.rarity;

            const name = document.createElement("span");
            name.className = "blir-name";
            name.textContent = b.name;

            const move = (delta) => {
                const j = i + delta;
                if (j < 0 || j >= editDraft.length) return;
                const tmp = editDraft[i];
                editDraft[i] = editDraft[j];
                editDraft[j] = tmp;
                renderEditor();
            };

            row.append(
                artWrap(b),
                name,
                slotButton("↑", "Move up", () => move(-1), i === 0),
                slotButton("↓", "Move down", () => move(1), i === editDraft.length - 1),
                slotButton("✕", "Remove", () => {
                    editDraft.splice(i, 1);
                    renderEditor();
                })
            );

            showcaseSlots.appendChild(row);
        });

        // picker: everything I own that isn't already chosen
        showcasePicker.replaceChildren();

        const available = [];
        owned.forEach((row, id) => {
            const b = catalog.get(id);
            if (b && !editDraft.includes(id)) available.push(b);
        });

        available.sort((a, c) => rarityRank(c.rarity) - rarityRank(a.rarity) || a.name.localeCompare(c.name));

        if (!owned.size) {
            const none = document.createElement("p");
            none.className = "showcase-empty";
            none.textContent = "You don't own any Blirs yet.";
            showcasePicker.appendChild(none);
        }

        available.forEach((b) => {
            const mini = document.createElement("button");
            mini.className = "blir-mini r-" + b.rarity;
            mini.title = b.name + " (" + RARITY_LABELS[b.rarity] + ")";

            const name = document.createElement("span");
            name.textContent = b.name;

            mini.append(artWrap(b), name);
            mini.addEventListener("click", () => {
                if (editDraft.length >= SHOWCASE_MAX) {
                    status.textContent = "Your showcase is full (" + SHOWCASE_MAX + "). Remove one first.";
                    return;
                }

                editDraft.push(b.id);
                renderEditor();
            });

            showcasePicker.appendChild(mini);
        });
    }

    function openEditor() {
        editDraft = myShowcase.filter((id) => owned.has(id));
        showcaseEditor.hidden = false;
        showcaseGrid.hidden = true;
        showcaseEditButton.hidden = true;
        renderEditor();
    }

    function closeEditor() {
        showcaseEditor.hidden = true;
        showcaseGrid.hidden = false;
        showcaseEditButton.hidden = !profileIsMine;
    }

    function resetProfileView() {
        profileIsMine = false;
        showcaseSection.hidden = true;
        showcaseEditor.hidden = true;
        showcaseGrid.hidden = false;
        showcaseEditButton.hidden = true;
        showcaseGrid.replaceChildren();
    }

    async function showProfile(userId, isMine) {
        if (!currentSession) return;

        profileIsMine = isMine;

        if (catalog.size === 0) await loadCatalog();
        if (viewedProfileId !== userId) return;

        const ids = await fetchShowcase(userId);
        if (viewedProfileId !== userId || ids === null) return;

        if (isMine) myShowcase = ids.slice();

        renderShowcaseGrid(ids, isMine);
        showcaseEditButton.hidden = !isMine;
        showcaseSection.hidden = !isMine && ids.length === 0;
    }

    // ----- collecting -----

    function toast(b, text) {
        const el = document.createElement("div");
        el.className = "blir-toast r-" + b.rarity;

        const label = document.createElement("div");
        const strong = document.createElement("strong");
        strong.textContent = b.name;
        label.append(strong, document.createElement("br"), text + " · " + RARITY_LABELS[b.rarity]);

        el.append(artWrap(b), label);
        blirToasts.appendChild(el);

        setTimeout(() => el.remove(), 5500);
    }

    function announce(b, quantity, isNew) {
        heartbeat.spike(); // the big heartbeat spike

        const anim = BLIR_ANIMATIONS.includes(b.animation) ? b.animation : "pop";

        revealArt.className = "reveal-art";
        revealArt.replaceChildren(blirArt(b));
        revealArtWrap.className = "reveal-art-wrap r-" + b.rarity;
        revealArtWrap.style.setProperty("--rings", String(rarityRank(b.rarity) + 1));
        void revealArt.offsetWidth; // restart the animation
        revealArt.classList.add("anim-" + anim);

        revealName.textContent = b.name;
        revealRarity.replaceChildren(rarityPill(b.rarity));
        revealNote.textContent = isNew
            ? "New Blir added to your collection!"
            : "You now own ×" + quantity;

        blirReveal.hidden = false;

        toast(b, isNew ? "New Blir collected" : "Collected ×" + quantity);
        status.textContent = "Collected " + b.name + " (" + RARITY_LABELS[b.rarity] + ")!";
    }

    async function claim(source) {
        if (busy || !ready) return;

        busy = true;
        renderRewards();

        const { data, error } = await db.rpc("claim_blir", { p_source: source });

        busy = false;

        if (error) {
            fail("Claim failed", error);
            await refreshRewards();
            return;
        }

        const b = data && data.blir;

        if (!b) {
            status.textContent = "Claim failed: unexpected response.";
            await refreshRewards();
            return;
        }

        const existing = owned.get(b.id);
        const now = new Date().toISOString();

        catalog.set(b.id, b);
        owned.set(b.id, {
            blir_id: b.id,
            quantity: data.quantity,
            first_obtained_at: existing ? existing.first_obtained_at : now,
            last_obtained_at: now
        });
        claimedToday.add(source);

        renderAll();
        announce(b, data.quantity, !!data.is_new);
    }

    // ----- events (all attached once) -----

    claimDailyButton.addEventListener("click", () => claim("daily"));
    claimQuestButton.addEventListener("click", () => claim("chat_quest"));

    blirFilter.addEventListener("change", renderInventory);
    blirSort.addEventListener("change", renderInventory);
    blirSearch.addEventListener("input", renderInventory);

    closeBlirModal.addEventListener("click", () => { blirModal.hidden = true; });
    blirModal.addEventListener("click", (event) => {
        if (event.target === blirModal) blirModal.hidden = true;
    });

    revealClose.addEventListener("click", () => { blirReveal.hidden = true; });
    blirReveal.addEventListener("click", (event) => {
        if (event.target === blirReveal) blirReveal.hidden = true;
    });

    document.addEventListener("keydown", (event) => {
        if (event.key !== "Escape") return;
        if (!blirReveal.hidden) blirReveal.hidden = true;
        else if (!blirModal.hidden) blirModal.hidden = true;
    });

    blirShowcaseToggle.addEventListener("click", async () => {
        if (!detailId || !owned.has(detailId)) return;

        const next = myShowcase.includes(detailId)
            ? myShowcase.filter((id) => id !== detailId)
            : myShowcase.concat(detailId);

        if (next.length > SHOWCASE_MAX) return;

        busy = true;
        blirShowcaseToggle.disabled = true;

        await saveShowcase(next);

        busy = false;
        updateShowcaseToggle();

        if (!profileModal.hidden && viewedProfileId === me()) {
            renderShowcaseGrid(myShowcase, true);
        }
    });

    showcaseEditButton.addEventListener("click", openEditor);
    showcaseCancelButton.addEventListener("click", closeEditor);

    showcaseSaveButton.addEventListener("click", async () => {
        showcaseSaveButton.disabled = true;

        const ok = await saveShowcase(editDraft);

        showcaseSaveButton.disabled = false;

        if (ok) {
            closeEditor();
            renderShowcaseGrid(myShowcase, true);
        }
    });

    // ----- public API -----

    function closeEverything() {
        blirModal.hidden = true;
        blirReveal.hidden = true;
        blirToasts.replaceChildren();
        resetProfileView();
    }

    async function sync(session) {
        const token = ++syncId;

        ready = false;
        busy = false;
        catalog = new Map();
        owned = new Map();
        myShowcase = [];
        claimedToday = new Set();
        messagesToday = 0;
        detailId = null;

        closeEverything();
        renderAll();

        if (!session) return;

        const uid = session.user.id;
        const [, , showcase] = await Promise.all([
            loadCatalog(),
            loadInventory(),
            fetchShowcase(uid)
        ]);

        if (token !== syncId) return;

        myShowcase = showcase || [];
        ready = true;

        renderAll();
        await refreshRewards();
    }

    // Called when one of my own chat messages arrives (counts toward the quest)
    function countMessage() {
        if (!ready) return;
        messagesToday += 1;
        renderRewards();
    }

    // Called when the Blirs tab opens
    async function open() {
        renderAll();
        if (!ready) return;

        await Promise.all([loadInventory(), refreshRewards()]);
        renderAll();
    }

    return {
        sync: sync,
        countMessage: countMessage,
        open: open,
        showProfile: showProfile,
        resetProfileView: resetProfileView
    };
})();

tabBlirs.addEventListener("click", () => {
    switchPanel("blirs");
    blirsApi.open();
});

// =====================================================================
// RESTORED: app startup (your pasted file ended before this existed).
// If your real script.js already starts the app, keep yours instead.
// =====================================================================

// Fires once with the saved session (INITIAL_SESSION) and again on every sign in / out.
// Supabase calls are deferred so they don't run inside the auth callback itself.
db.auth.onAuthStateChange((event, session) => {
    setTimeout(() => updateAccount(session), 0);
});

listenForMessages();
