const str=["rock","paper","scissor"];
let computerPoints=0;
let playerPoints=0;
function getComputerChoice() 
        {
           const rand=str[Math.floor(Math.random()*str.length)];
           return rand;
        }

for(i=1;i<=5;i++){
    const computerSelection=getComputerChoice();
    const playerSelection=prompt("Enter you selection").toLowerCase();
    function oneRound(computerSelection,playerSelection)
        {
                if (computerSelection===playerSelection)
                {
                    console.log("Its a tie..!");
                }
                else if (playerSelection=="rock" && computerSelection=="scissor")
                {
                    console.log("You Won. Rock beats Scissors");
                    playerPoints+=1;
                }
                else if (playerSelection=="paper" && computerSelection=="rock")
                {
                    console.log("You Won. Paper beats Rock");
                    playerPoints+=1;
                }
                else if (playerSelection=="scissor" && computerSelection=="paper")
                {
                    console.log("You Won. Scissor beats Paper");
                    playerPoints+=1;
                }
                else
                {
                    console.log("You lose");
                    computerPoints+=1;
                }
                
        }
        oneRound(computerSelection,playerSelection);
    }
if (computerPoints>playerPoints)
{
    console.log(`You lose by ${computerPoints-playerPoints} points.`);
    console.log(`your points = ${playerPoints}`);
    console.log(`computer points = ${computerPoints}`);
}
else{
    console.log(`You won by ${playerPoints-computerPoints} points.`);
    console.log(`your points = ${playerPoints}`);
    console.log(`computer points = ${computerPoints}`);
}