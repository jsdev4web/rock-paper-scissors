
function getComputerChoice(){
    let x = Math.floor(Math.random() * 10)
    if(x % 2 == 0){
        return "rock";
    } 

    else if(x % 3 == 0){
        return "paper";
    }

    else {
        return "scissors";
    }
};

console.log(getComputerChoice());

let getHumanChoice = (prompt("Choose now"));
console.log(getHumanChoice);

let humanScore = 0;
let computerScore = 0;
