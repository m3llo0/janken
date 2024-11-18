let humanScore = 0
let compScore = 0
let humChoice
let compChoice

//Method to randomise choice
function getComputerChoice() {
    return Math.floor(Math.random() * 3);
}


// Method to obtain user input and turn it case-insensitive
function getHumanChoice(){
    return prompt("Rock, Paper or Scissors?").toLowerCase()
}

function playRound() {
    // Getting the player's input and assigning it to humChoice since its a global var
    humChoice = getHumanChoice();
    console.log(humChoice)

    compChoice = getComputerChoice();
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

//Loop to create 5 rounds
function playGame() {
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
playGame()