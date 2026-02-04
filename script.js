console.log('Hello world');

function getComputerChoice()
{
    let ranV = Math.random();
    let x = ranV * 10;
    let thro = '';
    if (x > 0 && x <= 3)
    {
        thro = 'Rock';
    }
    else if(x > 3 && x < 7 )
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