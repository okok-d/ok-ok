
const SUPABASE_URL = "https://xsehbpikhmofqjeandey.supabase.co";

const SUPABASE_KEY = "sb_publishable_bC53WFgEwu4NDllgbYqjUQ_eCMcG3vl";

const db = window.supabase.createClient(
    SUPABASE_URL,
    SUPABASE_KEY
);

const messages = document.getElementById("messages");
const input = document.getElementById("message");
const usernameInput = document.getElementById("username");
const button = document.getElementById("sendButton");
const status = document.getElementById("status");

// Username rules
const usernamePattern = /^[a-z1-9_]{1,20}$/;

// Remember username on this browser
usernameInput.value = localStorage.getItem("chatUsername") || "";

// Display messages
function displayMessage(msg) {
    const item = document.createElement("div");
    item.className = "message";

    const text = document.createElement("div");
    text.textContent = msg.username + ": " + msg.content;

    const time = document.createElement("small");
    time.textContent = new Date(msg.created_at).toLocaleString();

    item.appendChild(text);
    item.appendChild(time);

    messages.appendChild(item);
    messages.scrollTop = messages.scrollHeight;
}

// Load old messages
async function loadMessages() {
    const { data, error } = await db
        .from("messages")
        .select("*")
        .order("created_at", { ascending: true });

    if (error) {
        status.textContent = "Error: " + error.message;
        console.error(error);
        return;
    }

    messages.replaceChildren();

    data.forEach(displayMessage);
}

// Send a message
window.sendMessage = async function () {
    const username = usernameInput.value.trim();
    const content = input.value.trim();

    if (!usernamePattern.test(username)) {
        status.textContent =
            "Username must be 1-20 characters: a-z, 1-9, or _";
        return;
    }

    if (!content || content.length > 1000) {
        status.textContent = "Enter a valid message.";
        return;
    }

    button.disabled = true;

    const { error } = await db
        .from("messages")
        .insert({
            username: username,
            content: content
        });

    if (error) {
        status.textContent = "Message failed: " + error.message;
        console.error(error);
    } else {
        localStorage.setItem("chatUsername", username);
        input.value = "";
        status.textContent = "Message sent!";
    }

    button.disabled = false;
    input.focus();
};

// Listen for new messages
function listenForMessages() {
    db.channel("chat-room")
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
            console.log("Supabase:", state);

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

// Enter sends message
input.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        window.sendMessage();
    }
});

// Start chat
async function startChat() {
    await loadMessages();
    listenForMessages();
}

startChat();
