let startButton = document.querySelector(".start-button");
let ruleButton = document.querySelector(".rule-button");
let gameBoard = document.querySelector(".board");

startButton.addEventListener("click", function(){
    startGame();
});

ruleButton.addEventListener("click", function(){
    showRules()
});


function startGame(){
    startButton.classList.add("hide");
    ruleButton.classList.add("hide");
    gameBoard.classList.remove("hide")

}

function showRules(){
    startButton.classList.add("hide");
    ruleButton.classList.add("hide");
}