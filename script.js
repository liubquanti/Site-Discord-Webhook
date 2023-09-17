function openDialog() {
    var data = prompt("Введіть дані:");

    if (data !== null) {
        sendDataToDiscord(data);
    }
}

function sendDataToDiscord(data) {
    var webhookURL = ""; // Замініть на свій webhook URL

    var xhr = new XMLHttpRequest();
    xhr.open("POST", webhookURL, true);
    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");

    var payload = {
        content: data
    };

    xhr.send(JSON.stringify(payload));
}
