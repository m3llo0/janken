let humanScore = 0
let compScore = 0
let humChoice
let compChoice
let roundCounter = 0
let display = document.querySelector(".display > h2")

//Method to randomise choice
function getComputerChoice() {
    return Math.floor(Math.random() * 3);
}

function playRound() {
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
        display.textContent = "It's a tie!";
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
    roundCounter += 1
}

function updateScore() {
    document.getElementById("yourScore").textContent = `${humanScore}`
    document.getElementById("compScore").textContent = `${compScore}`
}

function checkResult(){
    if (humanScore == compScore){
        display.textContent = "End of Game! It's a Tie!"
    } else if (humanScore < compScore){
        display.textContent = "End of Game! You have Lost!"
    } else if (humanScore > compScore){
        display.textContent = "End of Game! You have Won!"
    }
}

const buttons = document.querySelectorAll("button")
buttons.forEach((button) => {
    button.addEventListener("click", () => {
        humChoice = button.getAttribute("id")
        if (roundCounter == 5){
            checkResult()
        } else {
            playRound()
            updateScore()
        }
    })
})

