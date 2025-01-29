let userScore = 0;
let computerScore = 0;
const choices = document.querySelectorAll(".choice");
const message = document.querySelector("#message");
const userScoreElement = document.querySelector("#userScore");
const computerScoreElement = document.querySelector("#computerScore");
const celebrationElement = document.querySelector("#celebration");//celebration
const confettiContainer = document.createElement("div");
confettiContainer.classList.add("confetti");

const genComputerChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
};

const drawGame = () => {
    console.log("Game was a Draw");
    message.innerText = "It's a Draw. Play again!";
};

const showWinner = (userWin, userChoice, computerChoice) => {
    if (userWin) {
        console.log("You Win!");
        message.innerText = `You Win! ${userChoice} beats ${computerChoice}`;
        message.style.backgroundColor = "#081b31";
        userScore++;
        userScoreElement.innerText = userScore;
        showCelebration();  
    } else {
        console.log("You Lose!");
        message.innerText = `You Lose! ${computerChoice} beats ${userChoice}`;
        message.style.backgroundColor = "red";
        computerScore++;
        computerScoreElement.innerText = computerScore;
    }
};

const showCelebration = () => {
    celebrationElement.style.display = "block";
    generateConfetti();
    setTimeout(() => {
        celebrationElement.style.display = "none";
        confettiContainer.innerHTML = '';  
    }, 5000); 
};

const generateConfetti = () => {
    for (let i = 0; i < 50; i++) {
        const confettiPiece = document.createElement("div");
        confettiContainer.appendChild(confettiPiece);
    }
    document.body.appendChild(confettiContainer);
};

const playGame = (userChoice) => {
    console.log("User Choice =", userChoice);
    const computerChoice = genComputerChoice();
    console.log("Computer Choice =", computerChoice);

    if (userChoice === computerChoice) {
        drawGame();
    } else {
        let userWin = true;
        if (userChoice === "rock") {
            userWin = computerChoice === "paper" ? false : true;
        } else if (userChoice === "paper") {
            userWin = computerChoice === "scissors" ? false : true;
        } else {
            userWin = computerChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, computerChoice);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        console.log("Choice was clicked:", userChoice);
        playGame(userChoice);
    });
});
