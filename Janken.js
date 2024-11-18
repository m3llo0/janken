function getComputerChoice(){
    compChoice = Math.floor(Math.random() * 3);
}

getComputerChoice()
switch (compChoice){
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
