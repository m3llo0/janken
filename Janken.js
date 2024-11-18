let humanScore = 0
let compScore = 0

function getComputerChoice() {
    compChoice = Math.floor(Math.random() * 3);
}

getComputerChoice()
// Mapping random number to choice
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
// I have to turn the human choice into case-insensitive
function getHumanChoice(){
    humChoice = prompt("Rock, Paper or Scissors?").toLowerCase()
}
// Getting the player's input
getHumanChoice()
console.log(humChoice)

function playround(humChoice, compChoice) {
    if (humChoice == compChoice) {
        console.log(`Tie! You: ${humanScore}, Computer: ${compScore}`)
    } else {
        switch(humChoice) {
            case "rock":
                if(compChoice == "scissors") {
                    humanScore += 1
                    console.log(`Win! You: ${humanScore}, Computer: ${compScore}`)
                } else {
                    compScore += 1
                    console.log(`Lose! You: ${humanScore}, Computer: ${compScore}`)
                }
                break
            case "paper":
                if(compChoice == "rock") {
                    humanScore += 1
                    console.log(`Win! You: ${humanScore}, Computer: ${compScore}`)
                } else {
                    compScore += 1
                    console.log(`Lose! You: ${humanScore}, Computer: ${compScore}`)
                }
                break
            case "scissors":
                if(compChoice == "paper") {
                    humanScore += 1
                    console.log(`Win! You: ${humanScore}, Computer: ${compScore}`)
                } else {
                    compScore += 1
                    console.log(`Lose! You: ${humanScore}, Computer: ${compScore}`)
                }
                break
            default: console.log("wtf man")
        }
    }
}
    

playround(humChoice, compChoice)