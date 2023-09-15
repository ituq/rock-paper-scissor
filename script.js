let inputs = [];
inputs[0]= document.querySelector("#rock");
inputs[1]= document.querySelector("#paper");
inputs[2]= document.querySelector("#scissor");
const roundDisplay = document.querySelector(".round");
const playerScoreDisplay = document.querySelector(".left");
const compScoreDisplay = document.querySelector(".right");
const statusDisplay = document.querySelector("#result");

let scorePlayer=0, scoreMachine=0;
let round=1;
    for(let i=0;i<3;i++){
        inputs[i].addEventListener("click", () => updateScore(i))
    }


function updateScore(button){
    let output = decide(button,getComputerChoice());
    if(output.charAt(0)=="W"){
        playerScoreDisplay.textContent=`Player: ${++scorePlayer}`;
        console.log("player won");
    }
    else if(output.charAt(0)=="L"){
        compScoreDisplay.textContent=`Machine: ${++scoreMachine}`;
        console.log("computer won");
    }
    else{
        /*retry round*/
        round--;
    }
    round++;
    statusDisplay.textContent=output;
    if(round==6){
        displayResult(scorePlayer>scoreMachine ? `You won by ${scorePlayer-scoreMachine} Points!`: `You lost by ${scoreMachine-scorePlayer} points`);
        round=0;
        scoreMachine=0;
        scorePlayer=0;
    }
    roundDisplay.textContent=`Round ${round}`;

    

}
function incrementRound(roundNum, roundElem){
    roundNum++;
    roundElem.textContent=`Round: ${roundNum}`;
}


function displayResult(str){
    const out=document.querySelector("#result");
    out.textContent=str;
}

/* 0=rock, 1=paper, 2=scissor*/
function getComputerChoice(){
    let choice = 2* Math.random();
    return Math.round(choice);
}
function decide(playerChoice, computerChoice){
    if(playerChoice==1){
        if(computerChoice==0){
            return "Win! paper beats rock"
        }
        else if(computerChoice==1){
            return "Draw!"
        }
        else{
            return"Loss! Scissor beats rock"
        }
    }
    else if(playerChoice==0){
        if(playerChoice==computerChoice){
            return "Draw!"
        }
        else if(computerChoice==1){
            return "Loss! Paper beats rock"
        }
        else{
            return "Win! Rock beats scissor"
        }
    }
    else if(playerChoice==2){
        if(playerChoice==computerChoice){
            return "Draw!"
        }
        else if(computerChoice==1){
            return "Win! Scissors beat paper"
        }
        else{
            return "Loss! Rocks beats Scissor"
        }
    }
    else{
        console.warn("Player made wrong input");
    }
}
function convert(input){
    input=input.toLowerCase();
    switch (input) {
        case "rock":
            return 0;
        case "paper":
            return 1;
        case "scissor":
            return 2;
        default:
            return 3;
    }
}
function game(round, playerScore,){
    let scorePlayer=0,scoreMachine =0;
    for(let i =0;i<5;i++){
        let input=convert(prompt("What is your move?"));
        let machine=getComputerChoice();
        let output=decide(input,machine);
        if(output.charAt(0)=="W"){
            scorePlayer++;
        }
        else if(output.charAt(0)=="L"){
            scoreMachine++;
        }
        else{
            /*retry round*/
            i--;
        }
        console.log(output);
    }
    console.log(scorePlayer>scoreMachine ? `You won by ${scorePlayer-scoreMachine} Points!`: `You lost by ${scoreMachine-scorePlayer} points`)
}
