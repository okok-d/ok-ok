const SUPABASE_URL = "https://xsehbpikhmofqjeandey.supabase.co";
const SUPABASE_KEY = "sb_publishable_bC53WFgEwu4NDllgbYqjUQ_eCMcG3vl";

const supabase = window.supabase.createClient(
    SUPABASE_URL,
    SUPABASE_KEY
);
<script src="https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2"></script>
<script src="script.js"></script>
function sendMessage() {
    const input = document.getElementById("message");
    const messages = document.getElementById("messages");

    if (input.value.trim() === "") return;

    const newMessage = document.createElement("p");
    newMessage.textContent = input.value;

    messages.appendChild(newMessage);

    input.value = "";
}
