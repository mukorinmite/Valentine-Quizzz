const chatContainer = document.getElementById("chat-container");
const optionsContainer = document.getElementById("options-container");
const scoreBox = document.getElementById("score-box");
const finalScore = document.getElementById("final-score");

const quizData = [

    { question: "ermghh jd gw bikin ini..", options: ["Ok.."], answer: null},
    { question: "ntar kalian tinggal kilik-klik aja.. Gw bikin quiz seputar gw gt..", options: [""], answer: null },
    { question: "gw ga punya ide buat bikin apalagi soalnya buat Valentine:')" , options: [""], answer: null},
    { question: "Kita mulai quiz ya!", options: ["Ok"], answer: null },
    { question: "1.) What’s mukorinmite fav color?", options: ["Blue", "Black", "Green", "Ga ada"], answer: "Blue" },
    { question: "2.) Who's mukorinmite fav person?", options: ["Payoy", "Gwendilon", "Djhonyong", "her bf", "purnawijaw", "tiduardotkom" , "nelo", "her sister"], answer: "All" },
    { question: "3.) Kalung Nero sekarang warna apa?", options: ["Pink", "Blue", "Gapake kalung", "Red"], answer: "Pink" },
    { question: "4.) Tanggal lahir Nero kapan?", options: ["ga tau", "1 Januari", "15 Agustus", "13 Maret"], answer: "15 Agustus" },
];

let currentQuestion = 0;
let score = 0;

function displayMessage(text, sender) {
    let messageDiv = document.createElement("div");
    messageDiv.classList.add("message", sender);
    messageDiv.innerText = text;
    chatContainer.appendChild(messageDiv);
    chatContainer.scrollTop = chatContainer.scrollHeight;
}

function displayOptions(options) {
    optionsContainer.innerHTML = "";
    options.forEach(option => {
        let button = document.createElement("button");
        button.classList.add("option");
        button.innerText = option;
        button.onclick = () => nextQuestion(option);
        optionsContainer.appendChild(button);
    });
}

function nextQuestion(answer) {
    optionsContainer.innerHTML = "";
    if (answer) {
        displayMessage(answer, "user");
        let correctAnswer = quizData[currentQuestion].answer;
        if (correctAnswer !== null) {
            if (correctAnswer === "All" || answer === correctAnswer) {
                score++;
            }
        }
    }
    
    currentQuestion++;
    if (currentQuestion < quizData.length) {
        setTimeout(() => {
            displayMessage(quizData[currentQuestion].question, "bot");
            displayOptions(quizData[currentQuestion].options);
        }, 1000);
    } else {
        setTimeout(showFinalScore, 1000);
    }
}

function showFinalScore() {
    let totalQuestion = quizData.filter(q=> q.answer !==null).length;
    finalScore.innerHTML = `Score: ${score} / ${totalQuestion}`;
    scoreBox.style.display = "block";
}

window.onload = () => {
    displayMessage(quizData[currentQuestion].question, "bot");
    setTimeout(() => displayOptions(quizData[currentQuestion].options), 1000);
};
