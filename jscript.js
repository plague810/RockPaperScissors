let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");
const smallUserWord = "user".fontsize(3).sub().fontcolor("green");
const smallCompWord = "comp".fontsize(3).sub().fontcolor("red");

function convertToWord(letter){
    if(letter === "r") return "Rock";
    if(letter === "p") return "Paper";
    return "Scissors";
}

function win(userChoice, computerChoice){
    userScore++;
    userScore_span.innerHTML = userScore;
    result_p.innerHTML = convertToWord(userChoice) + smallUserWord + " beats " + convertToWord(computerChoice) + smallCompWord + ". You win!";
}

function lose(userChoice, computerChoice){
    computerScore++;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = convertToWord(computerChoice) + smallCompWord + " beats " + convertToWord(userChoice) + smallUserWord + ". You lose.";
}

function draw(userChoice, computerChoice){
    result_p.innerHTML = convertToWord(userChoice) + smallUserWord + " and " + convertToWord(computerChoice) + smallCompWord + " are the same. Draw!";
}

function getComputerChoice(){
    const choices = ['r', 'p', 's'];
    const randomNum = Math.floor(Math.random() * 3);
    return choices[randomNum];
}

function game(userChoice){
    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice){
        case "rs":
            //user wins
            win(userChoice, computerChoice);
            break;
        case "sp":
            //user wins
            win(userChoice, computerChoice);
            break;
        case "pr":
            //user wins
            win(userChoice, computerChoice);
            break;
        case "sr":
            //computer wins
            lose(userChoice, computerChoice);
            break;
        case "rp":
            //computer wins
            lose(userChoice, computerChoice);
            break;
        case "ps":
            //computer wins
            lose(userChoice, computerChoice);
            break;
        case "ss":
            //draw
            draw(userChoice, computerChoice);
            break;
        case "rr":
            //draw
            draw(userChoice, computerChoice);
            break;
        case "pp":
            //draw
            draw(userChoice, computerChoice);
            break;
    }
}

function main(){

    result_p.innerHTML = " ";

    rock_div.addEventListener('click', function(){
        game("r");
    })
    
    paper_div.addEventListener('click', function(){
        game("p");
    })
    
    scissors_div.addEventListener('click', function(){
        game("s");
    })
}

main();

