let messages = document.getElementById("messages").innerHTML;
let attempts = 0;

let secretNumber = Math.floor(Math.random() * 10) + 1;
function guessChecker() {
    let guessNumber = Number(document.getElementById("guessNumber").value);
    if (!guessNumber || guessNumber < 1 || guessNumber > 10) {
        document.getElementById("messages").innerText =
            "Please enter a number between 1 and 10";
        return;
    }

    attempts++;
    if (secretNumber > guessNumber) {
        document.getElementById("messages").innerHTML = "High";
        
    }
    else if (secretNumber < guessNumber) {
        document.getElementById("messages").innerHTML = "Low";

    }
    else {
        document.getElementById("messages").innerHTML = "Correct";

    }
    document.getElementById("attempts").innerText =
        "Attempts: " + attempts;
}



function resetGame() {
    secretNumber = Math.floor(Math.random() * 10) + 1;
    attempts = 0;
    document.getElementById("messages").innerText = "";
    document.getElementById("attempts").innerText = "";
    document.getElementById("guessNumber").value = "";
}
