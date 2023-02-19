// Define Variables
let currentQuestion = 1;
let score = 0;
const startBtn = document.getElementById("startQuiz");
const containerQuestion = document.getElementsByClassName("containerQuestion");

// Define Event Listeners
startBtn.addEventListener("click", showQuestion);

// Define Functions
function showQuestion() {
    startBtn.style.display = "none";
    showFirstQuestion();
}

function showFirstQuestion() {
    containerQuestion[0].innerHTML = `
        <h2>${currentQuestion}.  Fireworks produce light and color by burning the compounds used in the pyrotechnic mixture.</h2>
        <button type='button' id='true'>TRUE</button>
        <button type='button'id='false'>FALSE</button>
    `;
    const trueBtn = document.getElementById("true");
    const falseBtn = document.getElementById("false");
    trueBtn.addEventListener("click", trueAnswer);
    falseBtn.addEventListener("click", falseAnswer);
    currentQuestion++;
}

function showSecondQuestion() {
    containerQuestion[0].innerHTML = '';
    containerQuestion[1].innerHTML = `
    <h2>${currentQuestion}. The color of light emitted by a firework depends on the specific wavelength of light emitted during the excitation and relaxation process.</h2>
    <button type='button' id='true'>TRUE</button>
    <button type='button'id='false'>FALSE</button>
`;
    const trueBtn = document.getElementById("true");
    const falseBtn = document.getElementById("false");
    trueBtn.addEventListener("click", trueAnswer);
    falseBtn.addEventListener("click", falseAnswer);
    currentQuestion++;
}

function  showThirdQuestion() {
    containerQuestion[1].innerHTML = '';
    containerQuestion[2].innerHTML = `
    <h2>${currentQuestion}.  Copper compounds are commonly used in green fireworks.</h2>
    <button type='button' id='true'>TRUE</button>
    <button type='button'id='false'>FALSE</button>
    
`;
    const trueBtn = document.getElementById("true");
    const falseBtn = document.getElementById("false");
    trueBtn.addEventListener("click", trueAnswer);
    falseBtn.addEventListener("click", falseAnswer);
    currentQuestion++;
}

function showFourthQuestion() {
    containerQuestion[2].innerHTML = '';
    containerQuestion[3].innerHTML = `
    <h2>${currentQuestion}. The use of magnesium can produce bright white sparks in fireworks.</h2>
    <button type='button' id='true'>TRUE</button>
    <button type='button'id='false'>FALSE</button>
    
`;
    const trueBtn = document.getElementById("true");
    const falseBtn = document.getElementById("false");
    trueBtn.addEventListener("click", trueAnswer);
    falseBtn.addEventListener("click", falseAnswer);
    currentQuestion++;
}

function showFifthQuestion() {
    containerQuestion[3].innerHTML = '';
    containerQuestion[4].innerHTML = `
    <h2>${currentQuestion}. The process of relaxation occurs when electrons in the excited state jump to a higher energy level.</h2>
    <button type='button' id='true'>TRUE</button>
    <button type='button'id='false'>FALSE</button>
    
`;
    const trueBtn = document.getElementById("true");
    const falseBtn = document.getElementById("false");
    trueBtn.addEventListener("click", trueAnswer);
    falseBtn.addEventListener("click", falseAnswer);
    currentQuestion++;
}

function showSixthQuestion() {
    containerQuestion[4].innerHTML = '';
    containerQuestion[5].innerHTML = `
    <h2>${currentQuestion}. Barium compounds produce red colors in fireworks.</h2>
    <button type='button' id='true'>TRUE</button>
    <button type='button'id='false'>FALSE</button>
    
`;
    const trueBtn = document.getElementById("true");
    const falseBtn = document.getElementById("false");
    trueBtn.addEventListener("click", trueAnswer);
    falseBtn.addEventListener("click", falseAnswer);
    currentQuestion++;
}

function showSeventhQuestion() {
    containerQuestion[5].innerHTML = '';
    containerQuestion[6].innerHTML = `
    <h2>${currentQuestion}. Potassium compounds can produce purple or violet colors in fireworks.</h2>
    <button type='button' id='true'>TRUE</button>
    <button type='button'id='false'>FALSE</button>
    
`;
    const trueBtn = document.getElementById("true");
    const falseBtn = document.getElementById("false");
    trueBtn.addEventListener("click", trueAnswer);
    falseBtn.addEventListener("click", falseAnswer);
    currentQuestion++;
}

function showEightQuestion() {
    containerQuestion[6].innerHTML = '';
    containerQuestion[7].innerHTML = `
    <h2>${currentQuestion}. The sound of crackling in fireworks is produced by the combustion of the compounds in the pyrotechnic mixture.</h2>
    <button type='button' id='true'>TRUE</button>
    <button type='button'id='false'>FALSE</button>
    
`;
    const trueBtn = document.getElementById("true");
    const falseBtn = document.getElementById("false");
    trueBtn.addEventListener("click", trueAnswer);
    falseBtn.addEventListener("click", falseAnswer);
    currentQuestion++;
}

function showNinthQuestion() {
    containerQuestion[7].innerHTML = '';
    containerQuestion[8].innerHTML = `
    <h2>${currentQuestion}. The energy required for excitation in fireworks is supplied by the chemical reactions occurring within the pyrotechnic mixture.</h2>
    <button type='button' id='true'>TRUE</button>
    <button type='button'id='false'>FALSE</button>
    
`;
    const trueBtn = document.getElementById("true");
    const falseBtn = document.getElementById("false");
    trueBtn.addEventListener("click", trueAnswer);
    falseBtn.addEventListener("click", falseAnswer);
    currentQuestion++;
}

function showTenthQuestion() {
    containerQuestion[8].innerHTML = '';
    containerQuestion[9].innerHTML = `
    <h2>${currentQuestion}. Sodium compounds are commonly used in yellow fireworks.</h2>
    <button type='button' id='true'>TRUE</button>
    <button type='button'id='false'>FALSE</button>
    
`;
    const trueBtn = document.getElementById("true");
    const falseBtn = document.getElementById("false");
    trueBtn.addEventListener("click", trueAnswer);
    falseBtn.addEventListener("click", falseAnswer);
    currentQuestion++;
}

function giveResult() {
        let grade = (score / 10) * 100;
        let roundedGrade = Math.round(grade * 100) / 100;
    containerQuestion[9].innerHTML = `
    <h2>You got a ${roundedGrade}%</h2>
    <button type='button'id='RESTART'>RESTART</button>
    
`;
    const restartBtn = document.getElementById("RESTART");
    restartBtn.addEventListener("click", restartGame);
}

function restartGame() {
    score = 0;
    containerQuestion[9].innerHTML = "";
    currentQuestion = 1;
    showQuestion();
}

function trueAnswer() {
    switch (true) {
        case currentQuestion === 2:
            nextQuestion();
            break;
        case currentQuestion === 3:
            score++;
            nextQuestion();
            break;
        case currentQuestion === 4:
            nextQuestion();
            break;
        case currentQuestion === 5:
            score++;
            nextQuestion();
            break;
        case currentQuestion === 6:
            nextQuestion();
            break;
        case currentQuestion === 7:
            nextQuestion();
            break;
        case currentQuestion === 8:
            score++;
            nextQuestion();
            break;
        case currentQuestion === 9:
            nextQuestion();
            break;
        case currentQuestion === 10:
            nextQuestion();
            break;
        case currentQuestion === 11:
            score++;
            currentQuestion++;
            nextQuestion();
            break;
    }
}

function falseAnswer() {
    switch (true) {
        case currentQuestion === 2: // 1 FALSE
            score++;
            nextQuestion();
            break;
        case currentQuestion === 3: // 2 TRUE
            nextQuestion();
            break;
        case currentQuestion === 4: // 3 FALSE
            score++;
            nextQuestion();
            break;
        case currentQuestion === 5: // 4 TRUE
            nextQuestion();
            break;
        case currentQuestion === 6: // 5 FALSE 
            score++;
            nextQuestion();
            break;
        case currentQuestion === 7: // 6 FALSE 
            score++;
            nextQuestion();
            break;
        case currentQuestion === 8: // 7 TRUE
            nextQuestion();
            break;
        case currentQuestion === 9: // 8 FALSE 
            score++;
            nextQuestion();
            break;
        case currentQuestion === 10: // 9 FALSE
            score++;
            nextQuestion();
            break;
        case currentQuestion === 11: // 10 TRUE
            currentQuestion++;
            nextQuestion();
            break;
    }
}

function nextQuestion() {
    switch (true) {
        case currentQuestion === 2:
            showSecondQuestion();
            break;
        case currentQuestion === 3:
            showThirdQuestion();
            break;
        case currentQuestion === 4:
            showFourthQuestion();
            break;
        case currentQuestion === 5:
            showFifthQuestion();
            break;
        case currentQuestion === 6:
            showSixthQuestion();
            break;
        case currentQuestion === 7:
            showSeventhQuestion(); 
            break;
        case currentQuestion === 8:
            showEightQuestion();
            break;
        case currentQuestion === 9:
            showNinthQuestion();
            break;
        case currentQuestion === 10:
            showTenthQuestion();
            break;
        case currentQuestion >= 12:
            giveResult();
            break;
        default:
            console.log("something went wrong");
            break;
    }
}