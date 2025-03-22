const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

let drawing = false;

ctx.fillStyle = "black";
ctx.fillRect(0, 0, canvas.width, canvas.height);
ctx.strokeStyle = "white";
ctx.lineWidth = 15;
ctx.lineCap = "round";

canvas.addEventListener("mousedown", () => drawing = true);
canvas.addEventListener("mouseup", () => drawing = false);
canvas.addEventListener("mousemove", draw);

function draw(event) {
    if (!drawing) return;
    const rect = canvas.getBoundingClientRect();
    ctx.beginPath();
    ctx.moveTo(event.clientX - rect.left, event.clientY - rect.top);
    ctx.lineTo(event.clientX - rect.left + 1, event.clientY - rect.top + 1);
    ctx.stroke();
}

function clearCanvas() {
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    document.getElementById("result").innerText = "Prediction: ";
}

function predictDigit() {
    canvas.toBlob((blob) => {
        const formData = new FormData();
        formData.append("file", blob, "digit.png");

        fetch("http://127.0.0.1:8000/predict/", {
            method: "POST",
            body: formData
        })
        .then(response => response.json())
        .then(data => {
            console.log("Response:", data);
            let highestConfidence = Object.entries(data.confidence)
                .sort((a, b) => b[1] - a[1])[0];
            const resultElement = document.getElementById("result");
            resultElement.innerHTML = "Prediction:<br>";
            for (const [digit, confidence] of Object.entries(data.confidence)) {
                if (digit === highestConfidence[0]) {
                    resultElement.innerHTML += `<strong style="background-color: lightgreen;">${digit}: ${confidence.toFixed(2)}</strong><br>`;
                } else {
                    resultElement.innerHTML += `${digit}: ${confidence.toFixed(2)}<br>`;
                }
            }
        })
        .catch(error => console.error("Error:", error));
    }, "image/png");
}
