
const SUPABASE_URL = "https://xsehbpikhmofqjeandey.supabase.co";
const SUPABASE_KEY = "sb_publishable_bC53WFgEwu4NDllgbYqjUQ_eCMcG3vl";

// Connect to Supabase
const db = window.supabase.createClient(
    SUPABASE_URL,
    SUPABASE_KEY
);

const messages = document.getElementById("messages");
const input = document.getElementById("message");
const button = document.getElementById("sendButton");
const status = document.getElementById("status");

// Display a message
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

// Load existing messages
async function loadMessages() {
    const { data, error } = await db
        .from("messages")
        .select("*")
        .order("created_at", { ascending: true });

    if (error) {
        status.textContent = "Error loading messages: " + error.message;
        console.error(error);
        return;
    }

    messages.replaceChildren();

    data.forEach(displayMessage);
}

// Send a message
window.sendMessage = async function () {
    const content = input.value.trim();

    if (!content || content.length > 1000) return;

    button.disabled = true;

    const { error } = await db
        .from("messages")
        .insert({
            username: "Guest",
            content: content
        });

    if (error) {
        status.textContent = "Message failed: " + error.message;
        console.error(error);
    } else {
        input.value = "";
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
        .subscribe((state, err) => {
            console.log("Supabase:", state, err);

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

// Allow Enter to send
input.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        window.sendMessage();
    }
});

// Start everything
async function startChat() {
    await loadMessages();
    listenForMessages();
}

startChat();
