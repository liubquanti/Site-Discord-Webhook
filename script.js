function openDialog() {
    var data = prompt("Введіть дані:");

    if (data !== null) {
        sendDataToDiscord(data);
    }
}

function sendDataToDiscord(data) {
    var webhookURL = "https://discord.com/api/webhooks/1153049281138282616/DkxqZUV9tunX89UraLZMNsjdV05XzQNzo0ohIM4h7V-_ePm9pa6cHYGUfh0B1OubJMXw"; // Замініть на свій webhook URL

    var xhr = new XMLHttpRequest();
    xhr.open("POST", webhookURL, true);
    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");

    var payload = {
        content: data
    };

    xhr.send(JSON.stringify(payload));
}
