console.log('Hello world');

globalThis.humanSCore = 0;
globalThis.computerScore = 0;

function getComputerChoice()
{
    let x = Math.floor(Math.random()*3) + 1;
    let thro = '';
    if (x == 1)
    {
        thro = 'Rock';
    }
    else if(x == 2)
    {
        thro = 'Scissors';
    }
    else
    {
        thro = 'Paper';
    }

    return thro;
}
function getHumanChoice()
{
    let choice = prompt('Enter Rock/Paper/Scissors: ');
    return choice;
}
function playRound(comC,humC)
{
    let com = comC
    let hum = humC
    let msg = '';
    switch (hum)
    {
        case 'rock':
            if (com == 'rock') 
            {
                msg = 'Draw';
            }
            else if (com == 'Paper')
            {
                msg = 'Paper beats rock : computer';
                computerScore = computerScore + 1;
            }
            else 
            {
                msg = 'Rock beats scissiors : human';
                humanSCore = humanSCore + 1;
            }
            break;
        case 'paper':
            if (com == 'paper') 
            {
                msg = 'Draw';
            }
            else if (com == 'rock')
            {
                msg = 'Paper beats rock : human';
                humanSCore = humanSCore + 1;
            }
            else 
            {
                msg = 'Scissors beats Paper : computer ';
                computerScore = computerScore + 1;
            }
            break;
        case 'scissors':
            if (com == 'scissors') 
            {
                msg = 'Draw';
            }
            else if (com == 'Paper')
            {
                msg = 'Scissors beats paper: human';
                humanSCore = humanSCore + 1;
            }
            else 
            {
                msg = 'Rock beats scissiors: computer';
                computerScore = computerScore + 1;
            }
            break;
    }
    return msg;


}

function playGame()
{
    for (let index = 0; index < 5; index++) 
    {
        const x = getComputerChoice();
        let y = getHumanChoice();
        let comC = x.toLowerCase();
        let humC = y.toLowerCase();
        let play = playRound(comC, humC);
        console.log(play);
    }
    console.log('Human score');
    console.log(humanSCore);
    console.log('Computer score');
    console.log(computerScore);
    let z = humanSCore;
    let w = computerScore;
    if (z == w) 
    {
         console.log('Game ended in a tie.');
            
    } 
    else if (z > w)
    {
        console.log('Human is the winner.');
    }
    else
    {
        console.log('Computer is the winner');
        
    }
}
playGame();