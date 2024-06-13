
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

//console.log(getComputerChoice());

function getHumanChoice(){
    return (prompt("Choose now"));
}

let humanScore = 0;
let computerScore = 0;
let rounds = 0;


function playRound(humanChoice, computerChoice){
    //humanChoice = getHumanChoice().toLowerCase();

    computerChoice = getComputerChoice();

    console.log("you choose " + humanChoice)
    console.log("cpu choose " + computerChoice)
    if (humanChoice === "rock" && computerChoice === "rock" ||
        humanChoice === "paper" && computerChoice === "paper" ||
        humanChoice === "scissors" && computerChoice === "scissors"){
            console.log("human score: " + humanScore +
                " cpu score: " + computerScore);
            console.log( "draw")
        }
    else if (humanChoice === "rock" && computerChoice === "scissors" ||
             humanChoice === "paper" && computerChoice === "rock" ||
             humanChoice === "scissors" && computerChoice === "paper"){
                humanScore++
                console.log("human score: " + humanScore +
                " cpu score: " + computerScore);
                console.log( "you wins");
        }
    else if (humanChoice === "rock" && computerChoice === "paper" ||
             humanChoice === "paper" && computerChoice === "scissors" ||
             humanChoice === "scissors" && computerChoice === "rock"){
                computerScore++
                console.log("human score: " + humanScore +
                " cpu score: " + computerScore);
                console.log( "you lose");
   }
    else{
        console.log( "invalid option" );
   };

};

function winner(){
    if(humanScore === computerScore){
        return "No one wins"
    }
    else if(humanScore > computerScore){
        return "you win"
    }
    else{
        return "computer wins"
    }
    
}

//playRound()

//paper button
let paperBtn = document.getElementById("button1");

paperBtn.addEventListener("click", () => {
    if (humanScore === 5){
        alert("you win")
        return 
    } else if( computerScore === 5){
        alert("you lose")
        return 
    } else{

    playRound(humanChoice="paper")
    selections(humanChoice="paper")
    updateScore()
    }
})

let scissorBtn = document.getElementById("button2");

scissorBtn.addEventListener("click", () => {
    if (humanScore === 5){
        alert("you win")
        return 
    } else if( computerScore === 5){
        alert("you lose")
        return 
    } else{
    playRound(humanChoice="scissors")
    selections(humanChoice="scissors")
    updateScore()
    }
    
})

let rockBtn = document.getElementById("button3")

rockBtn.addEventListener("click", () => {
    if (humanScore === 5){
        alert("you win")
        return 
    } else if( computerScore === 5){
        alert("you lose")
        return 
    } else {
    playRound(humanChoice="rock")
    selections(humanChoice="rock")
    updateScore()
    }
    
})


function updateScore(){
    let html = "";
    html += 
    `human score: ${humanScore}
     cpu score: ${computerScore}`;

    let scoreRounds = document.querySelector(".scoreRounds");
    //console.log(scoreRounds);
    scoreRounds.innerHTML = html;
}

function selections(humanChoice, computerChoice){
    computerChoice = getComputerChoice();
    //console.log(computerChoice)
    //console.log(humanChoice)
    let html = "";
    html +=
    `Current Round <br> Player: ${humanChoice} CPU: ${computerChoice}`;

    let choices = document.querySelector(".choices");
    //console.log(choices)
    choices.innerHTML = html;
    
}

let resetbtn = document.getElementById("reset")

function reset(humanScore, computerScore){
    humanScore = 0;
    computerScore = 0;
    
}

resetbtn.addEventListener("click", () => {
    let scoreRounds = document.querySelector(".scoreRounds");
    let choices = document.querySelector(".choices");

    scoreRounds.innerHTML = ""
    choices.innerHTML = ""

    humanScore = 0;
    computerScore = 0;
    
})



/* function playGame(){

    console.log(rounds);

    if (rounds !== 5){
        rounds++
        playRound()
    }
    else if ( rounds === 5){
        console.log(winner())
        return "game over "
    }
    playGame()
};

//playRound();

playGame() */