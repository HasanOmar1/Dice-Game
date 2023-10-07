//testing


let activePlayer = 1
let players = [1 , 2] 
let turn = 0;

// nextPlayer()

// activePlayer = players[turn]
// let playerTotal = document.querySelector(`.total${activePlayer}`) 
// let playerWinner = document.querySelector(`.winner${activePlayer}`) 
// let playerScore = document.querySelector(`.currentScoreOf${activePlayer}`) 


// activePlayer = activePlayer === 1 ? 2 : 1 ;



// ------------------------------------------------------------


// // Turn checker
// let checkTurn = document.querySelector(`.check${activePlayer}`)
// checkTurn.style.display = 'block'

// Buttons
let resetBtn = document.querySelector('.reset')
let start = document.querySelector('.start')
let roll = document.querySelector('.roll')
let hold = document.querySelector('.hold')

// Input
let input = document.querySelector('.target')


// Dices location
let firstDice = document.querySelector('.firstDice')
let secondDice = document.querySelector('.secondDice')


// Six Dices
let diceOne = document.querySelector('.diceOne')
let diceTwo = document.querySelector('.diceTwo')
let diceThree = document.querySelector('.diceThree')
let diceFour = document.querySelector('.diceFour')
let diceFive = document.querySelector('.diceFive')
let diceSix = document.querySelector('.diceSix')

// Total
let playerOneTotal = document.querySelector('.total1')
let playerTwoTotal = document.querySelector('.total2')

// Current Total
let currentScoreOf1 = document.querySelector('.currentScoreOf1')
let currentScoreOf2 = document.querySelector('.currentScoreOf2')

// Winner Text
let winner1 = document.querySelector('.winner1')
let winner2 = document.querySelector('.winner2')

// Total Score
playerOneTotal.innerText = 0 
playerTwoTotal.innerText = 0 
currentScoreOf1.innerText = 0
currentScoreOf2.innerText = 0

// settings
start.disabled = false;
hold.disabled = true;
roll.disabled = true;
input.value = 100;


console.log(activePlayer)



start.addEventListener('click' , function() {
    
    roll.disabled = false;
    start.disabled = true;
    input.disabled = true;
    // if(playerScore.innerText === '0'){
        //     hold.disabled = true;
        
    // }
    
    
    
})
// console.log(activePlayer)

// functions ---------------------------------------------------------------

function currentPlus(n){
    playerScore.innerText =  parseInt(playerScore.innerText ) + n;
}


function playerTotalPlus(){
    playerTotal.innerText =  parseInt(playerTotal.innerText) + parseInt(playerScore.innerText );
    playerScore.innerText = 0
}



    function nextPlayer(){
        
        turn++
        activePlayer = players[turn]
        turn === players.length ? turn = 0 : turn
        activePlayer = players[turn]    
    }
    
    

    // --------------------------------------------------------------
   
    //-----------------------------------------------------------------------------------------------
    
    hold.addEventListener('click' , function() {
        playerTotalPlus()
        nextPlayer()
        console.log(activePlayer)
        
        if(playerScore.innerText === '0'){
        hold.disabled = true;
        } 
                
    })
    
    

    // -------------------------------------------------------------------

        
        
roll.addEventListener('click' , function(){
    randomizeNumbers() 
    hold.disabled = false;

    if(parseInt(playerTotal.innerText) + parseInt(playerScore.innerText) >= input.value ){
    playerTotal.innerText = parseInt(playerTotal.innerText) + parseInt(playerScore.innerText)
        playerWinner.innerText = 'We Have a Winner!'
        roll.disabled = true;
        hold.disabled = true;
    }
 
})




//  random dice numbers function
const randomizeNumbers = ()=>{
    let rand1 = Math.ceil(Math.random()*6)
    let rand2 = Math.ceil(Math.random()*6)
    
    // First Dice   
    if(rand1 === 1){
        if(!firstDice.classList.contains('diceOne')){
            let remove = firstDice.classList.item(1)
            firstDice.classList.remove(remove)
            firstDice.classList.add('diceOne')
        }
        currentPlus(1)
    }
    
    else if(rand1 === 2){
        if(!firstDice.classList.contains('diceTwo')){
            let remove = firstDice.classList.item(1)
            firstDice.classList.remove(remove)
            firstDice.classList.add('diceTwo')
        }
        currentPlus(2)         
    }
    
    else if(rand1 === 3){
    if(!firstDice.classList.contains('diceThree')){
        let remove = firstDice.classList.item(1)
    firstDice.classList.remove(remove)
    firstDice.classList.add('diceThree')
    }
    currentPlus(3)        
}

else if(rand1 === 4){
    if(!firstDice.classList.contains('diceFour')){
    let remove = firstDice.classList.item(1)
    firstDice.classList.remove(remove)
    firstDice.classList.add('diceFour') 
    }
    currentPlus(4)       
    }
    
    else if(rand1 === 5){
        if(!firstDice.classList.contains('diceFive')){
            let remove = firstDice.classList.item(1)
            firstDice.classList.remove(remove)
            firstDice.classList.add('diceFive')
        }
        currentPlus(5)         
    }
    
    else if(rand1 === 6){
        if(!firstDice.classList.contains('diceSix')){
            let remove = firstDice.classList.item(1)
            firstDice.classList.remove(remove)
            firstDice.classList.add('diceSix')
            }
            currentPlus(6)
            }

     
        // Second Dice   
if(rand2 === 1){
    if(!secondDice.classList.contains('diceOne')){
    let remove = secondDice.classList.item(1)
    secondDice.classList.remove(remove)
    secondDice.classList.add('diceOne')
    }
    currentPlus(1)
    }

else if(rand2 === 2){
    if(!secondDice.classList.contains('diceTwo')){
    let remove = secondDice.classList.item(1)
    secondDice.classList.remove(remove)
    secondDice.classList.add('diceTwo')
    }
    currentPlus(2)         
    }

else if(rand2 === 3){
    if(!secondDice.classList.contains('diceThree')){
    let remove = secondDice.classList.item(1)
    secondDice.classList.remove(remove)
    secondDice.classList.add('diceThree')
    }
    currentPlus(3)
    }
        
else if(rand2 === 4){
    if(!secondDice.classList.contains('diceFour')){
    let remove = secondDice.classList.item(1)
    secondDice.classList.remove(remove)
    secondDice.classList.add('diceFour')
    }
    currentPlus(4)
    }

else if(rand2 === 5){
    if(!secondDice.classList.contains('diceFive')){
    let remove = secondDice.classList.item(1)
    secondDice.classList.remove(remove)
    secondDice.classList.add('diceFive')
    }
    currentPlus(5)        
    }
        
else if(rand2 === 6){
    if(!secondDice.classList.contains('diceSix')){
    let remove = secondDice.classList.item(1)
    secondDice.classList.remove(remove)
    secondDice.classList.add('diceSix')
    }
    currentPlus(6)
    }
   
    // reset total
    if(rand1 === 6 && rand2 === 6){
    playerTotal.innerText = 0
    playerScore.innerText = 0  
    // nextPlayer()
    // console.log(activePlayer)        
    }

    }


// --------------------------------------------------------




// GAME RESET
resetBtn.addEventListener('click', function() {
    window.location.reload()
})

// Turn checker
let checkTurn = document.querySelector(`.check${activePlayer}`)
checkTurn.style.display = 'block'


let playerTotal = document.querySelector(`.total${activePlayer}`) 
let playerWinner = document.querySelector(`.winner${activePlayer}`) 
let playerScore = document.querySelector(`.currentScoreOf${activePlayer}`) 


