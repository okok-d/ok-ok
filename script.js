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

// New chat elements
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
profileModal.hidden = true; // Ensure modal is hidden on load

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
let loadedUserId = null; 
let chatChannel = null;
let activeRoom = "goldfish";
let myUsername = "";
let replyingTo = null;
let presenceChannel = null;
const messageCache = new Map(); 

let isStaff = false;
let isOwner = false;
let isBanned = false;
let allBadges = [];

const shownMessages = new Set();  

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
    } catch (e) {}

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

    status.textContent = "Logged out.";
});

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
        loadedUserId = null; 
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

const profileCache = new Map();
let viewedProfileId = null;

let lastProfileError = "";
let profileWarned = false;

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

    if (url && url.startsWith(SUPABASE_URL + "/storage/")) {
        const img = document.createElement("img");
        img.src = url;
        img.alt = "";
        img.onerror = () => el.replaceChildren();
        el.appendChild(img);
    }
}

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
    return data.publicUrl + "?v=" + Date.now();
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
        updates.avatar_url = data.publicUrl + "?v=" + Date.now();
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

    if (!saved || saved.length === 0) {
        status.textContent =
            "Save was blocked: the database didn't let you update your profile row.";
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
    if (!adminPanel.hidden) loadAdmin();
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

async function renderModeration(userId, profile, isMine) {
    if (!isStaff || !profile) return;

    const { data: owned } = await db
        .from("user_badges")
        .select("badge_key")
        .eq("user_id", userId);

    if (viewedProfileId !== userId) return;

    const targetKeys = (owned || []).map((b) => b.badge_key);

    modSection.hidden = false;

    badgeManager.hidden = false;
    badgeManager.replaceChildren();

    allBadges.forEach((badge) => {
        const wrap = document.createElement("label");
        wrap.className = "badge-toggle";

        const cb = document.createElement("input");
        cb.type = "checkbox";
        cb.checked = targetKeys.includes(badge.key);
        cb.disabled = (!isOwner && (badge.key === "owner" || badge.key === "mod")) || (badge.key === "owner");

        cb.addEventListener("change", async () => {
            cb.disabled = true;
            const { error } = cb.checked
                ? await db.from("user_badges").insert({ user_id: userId, badge_key: badge.key })
                : await db.from("user_badges").delete().eq("user_id", userId).eq("badge_key", badge.key);

            cb.disabled = false;
            if (error) {
                status.textContent = "Badge update failed: " + error.message;
                cb.checked = !cb.checked;
            } else {
                status.textContent = "Badge updated!";
                profileCache.delete(userId);
            }
        });

        wrap.append(cb, " ", badge.label);
        badgeManager.appendChild(wrap);
    });

    const canBan = isOwner || (!targetKeys.includes("owner") && !targetKeys.includes("mod"));
    if (!isMine && canBan) {
        banButton.hidden = false;
        const { data: banCheck } = await db.from("bans").select("user_id").eq("user_id", userId).single();
        const banned = !!banCheck;
        banButton.dataset.banned = banned ? "1" : "0";
        banButton.textContent = banned ? "Unban user" : "Ban user";
        banButton.className = banned ? "unban-btn" : "ban-btn";
    }
}

// ---------- Admin Panel ----------

tabAdmin.addEventListener("click", () => {
    tabPublic.classList.remove("active");
    tabDMs.classList.remove("active");
    tabAdmin.classList.add("active");
    publicPanel.hidden = true;
    dmPanel.hidden = true;
    adminPanel.hidden = false;
    loadAdmin();
});

tabPublic.addEventListener("click", () => {
    tabAdmin.classList.remove("active");
    tabDMs.classList.remove("active");
    tabPublic.classList.add("active");
    adminPanel.hidden = true;
    dmPanel.hidden = true;
    publicPanel.hidden = false;
});

tabDMs.addEventListener("click", () => {
    tabAdmin.classList.remove("active");
    tabPublic.classList.remove("active");
    tabDMs.classList.add("active");
    adminPanel.hidden = true;
    publicPanel.hidden = true;
    dmPanel.hidden = false;
    dmBadge.hidden = true;
    dmBadge.textContent = "";
});

async function loadAdmin() {
    if (!isOwner) return;

    adminStats.textContent = "Loading stats...";
    adminRooms.replaceChildren();

    const [usersCount, bannedCount, messagesCount] = await Promise.all([
        db.from("profiles").select("*", { count: "exact", head: true }),
        db.from("bans").select("*", { count: "exact", head: true }),
        db.from("messages").select("*", { count: "exact", head: true })
    ]);

    adminStats.textContent = `${usersCount.count || 0} users, ${bannedCount.count || 0} banned, ${messagesCount.count || 0} messages`;

    const rooms = ["goldfish", "ritz", "cheezits", "takis", "hot-cheetos"];
    rooms.forEach((room) => {
        const btn = document.createElement("button");
        btn.className = "room";
        btn.textContent = `Clear #${room}`;
        btn.addEventListener("click", async () => {
            if (!confirm(`Are you sure you want to delete all messages in #${room}?`)) return;
            const { error } = await db.from("messages").delete().eq("room", room);
            if (error) status.textContent = "Clear failed: " + error.message;
            else {
                status.textContent = `Cleared #${room}!`;
                loadMessages();
            }
        });
        adminRooms.appendChild(btn);
    });

    await searchAdminUsers(adminSearch.value.trim());
}

async function searchAdminUsers(query) {
    let req = db.from("profiles").select("id, username, display_name, avatar_url");
    if (query) req = req.ilike("username", `%${query}%`);

    const { data: users, error } = await req.limit(20);
    if (error) {
        adminList.textContent = "Search failed: " + error.message;
        return;
    }

    adminList.replaceChildren();

    for (const u of users) {
        const row = document.createElement("div");
        row.className = "admin-user-row";

        const nameSpan = document.createElement("span");
        nameSpan.textContent = `${u.username} `;
        const handle = document.createElement("small");
        handle.textContent = `@${u.username}`;
        nameSpan.appendChild(handle);

        const profBtn = document.createElement("button");
        profBtn.textContent = "Badges";
        profBtn.addEventListener("click", () => openProfile(u.id));

        const delMsgBtn = document.createElement("button");
        delMsgBtn.textContent = "Delete messages";
        delMsgBtn.addEventListener("click", async () => {
            if (!confirm(`Delete all messages sent by ${u.username}?`)) return;
            await db.from("messages").delete().eq("user_id", u.id);
            status.textContent = `Deleted messages for ${u.username}`;
        });

        const delAccBtn = document.createElement("button");
        delAccBtn.textContent = "Delete account";
        delAccBtn.className = "danger";
        delAccBtn.addEventListener("click", async () => {
            if (!confirm(`Delete user account ${u.username}? This cannot be undone.`)) return;
            
            const { error: err } = await db.from("profiles").delete().eq("id", u.id);
            if (err) status.textContent = "Account delete failed: " + err.message;
            else {
                status.textContent = "Account deleted.";
                searchAdminUsers(adminSearch.value.trim());
            }
        });

        row.append(nameSpan, profBtn, delMsgBtn, delAccBtn);
        adminList.appendChild(row);
    }
}

adminSearch.addEventListener("input", () => searchAdminUsers(adminSearch.value.trim()));
adminRefresh.addEventListener("click", () => loadAdmin());

// ---------- Chat & Messages ----------

roomTabs.querySelectorAll(".room").forEach((btn) => {
    btn.addEventListener("click", async () => {
        roomTabs.querySelectorAll(".room").forEach((b) => b.classList.remove("active"));
        btn.classList.add("active");
        activeRoom = btn.dataset.room;
        clearReply();
        await loadMessages();
    });
});

async function loadMessages() {
    shownMessages.clear();
    messages.replaceChildren();

    const { data, error } = await db
        .from("messages")
        .select("id, user_id, room, content, created_at, reply_to")
        .eq("room", activeRoom)
        .order("created_at", { ascending: true })
        .limit(100);

    if (error) {
        messages.textContent = "Error loading messages: " + error.message;
        return;
    }

    if (!data.length) {
        messages.innerHTML = "<p>No messages here yet. Say something!</p>";
        return;
    }

    for (const msg of data) {
        messageCache.set(msg.id, msg);
        await appendMessage(msg);
    }
    messages.scrollTop = messages.scrollHeight;
}

async function appendMessage(msg) {
    if (shownMessages.has(msg.id)) return;
    shownMessages.add(msg.id);

    const profile = await getProfile(msg.user_id);
    const div = document.createElement("div");
    div.className = "message-row";

    const avatar = document.createElement("div");
    avatar.className = "avatar small";
    renderAvatar(avatar, profile);
    avatar.addEventListener("click", () => openProfile(msg.user_id));

    const contentBox = document.createElement("div");
    contentBox.className = "message-content";

    const header = document.createElement("div");
    header.className = "message-header";
    
    const author = document.createElement("strong");
    author.textContent = displayNameOf(profile);
    applyNameFont(author, profile);
    author.addEventListener("click", () => openProfile(msg.user_id));

    header.appendChild(author);
    renderBadges(header, profile);

    const text = document.createElement("p");
    text.textContent = msg.content;

    contentBox.append(header, text);
    div.append(avatar, contentBox);
    messages.appendChild(div);
}

sendButton.addEventListener("click", sendMessage);
input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") sendMessage();
});

async function sendMessage() {
    const text = input.value.trim();
    if (!text || isBanned || !currentSession) return;

    input.value = "";
    const { error } = await db.from("messages").insert({
        room: activeRoom,
        content: text,
        user_id: currentSession.user.id,
        reply_to: replyingTo ? replyingTo.id : null
    });

    if (error) {
        status.textContent = postError(error);
    } else {
        clearReply();
    }
}

function clearReply() {
    replyingTo = null;
    replyBar.hidden = true;
    replyText.textContent = "";
}

function setupRealtime() {
    db.channel("public-messages")
        .on("postgres_changes", { event: "INSERT", schema: "public", table: "messages" }, (payload) => {
            const msg = payload.new;
            messageCache.set(msg.id, msg);
            if (msg.room === activeRoom) {
                appendMessage(msg);
                messages.scrollTop = messages.scrollHeight;
            }
        })
        .subscribe();
}

function joinPresence() {
    presenceChannel = db.channel("online-users");
    presenceChannel.subscribe(async (status) => {
        if (status === "SUBSCRIBED") {
            await presenceChannel.track({ user_id: currentSession.user.id, online_at: new Date() });
        }
    });
}

function leavePresence() {
    if (presenceChannel) db.removeChannel(presenceChannel);
}

function listenForDMs() {}
function resetDMs() {}
function openConversation(userId) {
    tabDMs.click();
}

db.auth.onAuthStateChange((event, session) => {
    updateAccount(session);
});

setupRealtime();
