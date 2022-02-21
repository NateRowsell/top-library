
function computerPlay() {

    let random = Math.floor(Math.random() * 3)
    if (random === 0){
        return 'rock'
    } else if (random === 1) {
        return 'scissors'
    }else {
        return 'paper'    
}}


function playerSelect() {

    let choice = window.prompt('Enter your choice: ')
    choice = choice.toLowerCase()
    if (choice === 'scissors' || choice === 'paper' || choice === 'rock'){
        return choice
    } else  return alert('Please enter rock, paper or scissors')
}


function playRound() {

    const playerSelection = playerSelect()
    const computerSelection = computerPlay()
    if (playerSelection === computerSelection){
        console.log('Tie! You picked '+ playerSelection + ' and computer picked '+ computerSelection)
        return 'tie'
    } else if (playerSelection === 'rock' && computerSelection === 'paper'){
        console.log('You lose! You picked '+ playerSelection + ' and computer picked '+ computerSelection)
        return 'lose'
    } else if (playerSelection === 'paper' && computerSelection === 'scissors'){
        console.log('You lose! You picked '+ playerSelection + ' and computer picked '+ computerSelection)
        return 'lose'
    } else if (playerSelection === 'scissors' && computerSelection === 'rock'){
        console.log('You lose! You picked '+ playerSelection + ' and computer picked '+ computerSelection)
        return 'lose'
    } else {
        console.log('You Win! You picked '+ playerSelection + ' and computer picked '+ computerSelection)
        return 'win'
} 

}

function playGame() {


    let computerScore = 0 ;
    let playerScore = 0 ;
    let count = computerScore+playerScore ;    
    const round = playRound() ;

    for(count; count < 5; count++){

        playRound()
        
        if (round === 'win'){
            playerScore = playerScore + 1 ;
            console.log('Player score: '+playerScore);
            console.log('Player Score is: '+playerScore+' and Computer Score is: '+computerScore);
        } else if (round === 'lose'){
            computerScore = computerScore + 1
            console.log('Computer score: '+computerScore);
            console.log('Player Score is: '+playerScore+' and Computer Score is: '+computerScore);
        }
    }
}


document.getElementById('play-game').onclick = playGame;