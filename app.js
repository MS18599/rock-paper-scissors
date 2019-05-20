userScore = 0;
computerscore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById('comp-score');
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector('.result > p');
const rock_div = document.getElementById('r');
const paper_div = document.getElementById('p');
const scissor_div = document.getElementById('s');

function getComputerChoice(){
  const choices = ['r','p','s'];
  const randomNumber = Math.floor(Math.random()*3);
  return choices[randomNumber];

}
function convertToWord(letter){
  if(letter=="r") return "Rock";
  if(letter=="p") return "paper";
  return "Scissors";
}
function win(user,computer){
  userScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML=computerscore;
  const smallUserword = "user".fontsize(3).sub();
  const smallCompword = "comp".fontsize(3).sub();

  result_p.innerHTML=`${convertToWord(user)}${smallUserword}  beats ${convertToWord(computer)}${smallCompword}. You Win 🎉🎉`
   document.getElementById(user).classList.add('green-glow');
   setTimeout(function() {document.getElementById(user).classList.remove('green-glow')},1000);

}
function lose(user,computer){
  computerscore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML=computerscore;
  const smallUserword = "user".fontsize(3).sub();
  const smallCompword = "comp".fontsize(3).sub();

  result_p.innerHTML=`${convertToWord(user)}${smallUserword}  lose to ${convertToWord(computer)}${smallCompword}. You lose🤦‍♀️🤦‍♂️`
  document.getElementById(user).classList.add('red-glow');
  setTimeout(function() {document.getElementById(user).classList.remove('red-glow')},1000);





}
function draw(user,computer){

  const smallUserword = "user".fontsize(3).sub();
  const smallCompword = "comp".fontsize(3).sub();

  result_p.innerHTML=`${convertToWord(user)}${smallUserword}  equals ${convertToWord(computer)}${smallCompword}. it's a draw..😑😑`
  document.getElementById(user).classList.add('gray-glow');
  setTimeout(function() {document.getElementById(user).classList.remove('gray-glow')},1000);




}
function game(userChoice){
  const computerChoice = getComputerChoice();
  switch(userChoice+computerChoice){
    case "rs":
    case "pr":
    case "sp":
        win(userChoice,computerChoice);
       break;
    case "rp":
    case "ps":
    case "sr":
        lose(userChoice,computerChoice);
        break;
    case "rr":
    case "pp":
    case "ss":
         draw(userChoice,computerChoice);
         break;
  }

}

function main(){
  rock_div.addEventListener('click',function(){
    game("r");
  })

  paper_div.addEventListener('click',function(){
    game("p");
  })


  scissor_div.addEventListener('click',function(){
    game("s");
  })

}
main();
