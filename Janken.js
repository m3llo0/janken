let humanScore = 0
let compScore = 0
let humChoice
let compChoice

//Method to randomise choice
function getComputerChoice() {
    return Math.floor(Math.random() * 3);
}

function playRound() {
    var display = document.querySelector(".display > h1")
    compChoice = getComputerChoice()

   // Mapping random number to computer choice
    switch (compChoice) {
        case 0:
            compChoice = "rock"
        break
        case 1:
            compChoice = "paper"
        break
        case 2:
            compChoice = "scissors"
        break
} 
    //Game Mechanism for comparing choices
    if (humChoice == compChoice) {
        display.textContent = "TIE!";
    } else {
        switch(humChoice) {
            case "rock":
                if(compChoice == "scissors") {
                    humanScore += 1
                    display.textContent = "Win! Rock beats Scissors!";
                } else {
                    compScore += 1
                    display.textContent = "Lose! Paper beats Rock!";
                }
                break
            case "paper":
                if(compChoice == "rock") {
                    humanScore += 1
                    display.textContent = "Win! Paper beats Rock!";
                } else {
                    compScore += 1
                    display.textContent = "Lose! Scissors beats Paper!";
                }
                break
            case "scissors":
                if(compChoice == "paper") {
                    humanScore += 1
                    display.textContent = "Win! Scissors beats Paper!";
                } else {
                    compScore += 1
                    display.textContent = "Lose! Scissors beats Paperr!";
                }
                break
            default: console.log("wtf man")
        }
    }
}

function updateScore() {
    document.getElementById("yourScore").textContent = `${humanScore}`
    document.getElementById("compScore").textContent = `${compScore}`
}

const buttons = document.querySelectorAll("button")
buttons.forEach((button) => {
    button.addEventListener("click", () => {
        humChoice = button.getAttribute("id")
        playRound()
        updateScore()
    })
})

//Loop to create 5 rounds
/*function playGame() {
    for (let n=0; n<3; n++) {
        playRound()
    }
    if (humanScore < compScore){
        console.log("End of Game: GG go next loser LOL")
    } else if (humanScore == compScore) {
        console.log("End of Game: Hmm nubbad nubbad")
    } else {
        console.log("End of Game: YOU ARE A WINNER SIUUUUU!")
    }
}
playGame()*/
