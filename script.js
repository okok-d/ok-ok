
function sendMessage() {
    const input = document.getElementById("message");
    const messages = document.getElementById("messages");

    if (input.value.trim() === "") return;

    const newMessage = document.createElement("p");
    newMessage.textContent = input.value;

    messages.appendChild(newMessage);

    input.value = "";
}
