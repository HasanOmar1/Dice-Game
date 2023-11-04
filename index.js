// PAGES
let page1 = document.querySelector('.game')
let page2 = document.querySelector('.big-cont')

// PAGE 1
// Buttons
let resetBtn = document.querySelector('.reset')
let start = document.querySelector('.start')
let roll = document.querySelector('.roll')
let hold = document.querySelector('.hold')
let music = document.querySelector('.music')

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

// Player Turn
let activePlayer = 1
let players = [1 , 2] 
let turn = 0;

let playerTotal = document.querySelector(`.total${activePlayer}`) 
let playerWinner = document.querySelector(`.winner${activePlayer}`) 
let playerScore = document.querySelector(`.currentScoreOf${activePlayer}`) 



// Local Storage Score
let scoreOne = document.querySelector('.playerScore1')
let scoreTwo = document.querySelector('.playerScore2')

localStorage.setItem('scoreOfPlayerOne', 0);
localStorage.setItem('scoreOfPlayerTwo', 0);

let scoreOfOne = +localStorage.getItem('scoreOfPlayerOne')
let scoreOfTwo = +localStorage.getItem('scoreOfPlayerTwo')


// Sides
let left = document.querySelector(`.left`)
let right = document.querySelector(`.right`)

// Sound
let backgroundMusic = new Audio('./assets/background.mp4')
let startSound = new Audio('/assets/start.mp4')
let winnerSound = new Audio('/assets/winner.m4a')
let resetSound = new Audio('./assets/reset.m4a')
let diceSound = new Audio('./assets/dice.m4a')
let nextSound = new Audio('./assets/next.m4a')
backgroundMusic.play()

// Sound Settings
startSound.volume = 0.2
resetSound.volume = 0.2
winnerSound.volume = 0.1
diceSound.volume = 0.1
nextSound.volume = 0.1
backgroundMusic.volume = 0.008

// settings
start.disabled = false;
hold.disabled = true;
roll.disabled = true;
input.value = 100;

// pop-up
let gif = document.querySelector('.pop-up')

// PAGE 2
let playAgainBtn = document.querySelector('.playAgain')
let resetGameBtn = document.querySelector('.resetGame')




// functions ---------------------------------------------------------------

    function currentPlus(n){
        playerScore.innerText =  parseInt(playerScore.innerText ) + n;
    }


    function playerTotalPlus(){
        playerTotal.innerText =  parseInt(playerTotal.innerText) + parseInt(playerScore.innerText );
        playerScore.innerText = 0
    }


   let nextPlayer =  () => {
       
       turn++
       activePlayer = players[turn]
       turn === players.length ? turn = 0 : turn
       activePlayer = players[turn]  
       
       playerTotal = document.querySelector(`.total${activePlayer}`) 
       playerWinner = document.querySelector(`.winner${activePlayer}`) 
       playerScore = document.querySelector(`.currentScoreOf${activePlayer}`) 
       
       
    }

    let turnCheck  = () => {
    
        if(activePlayer = 1){
            left.classList.toggle('opacity')
            right.classList.toggle('opacity')

        }
       
    }    

    function newPage(){
        setTimeout(function(){
            page1.classList.add('hidden')
            page2.classList.remove('hidden')

    
        }, 1200)
        }
        
    function announcement(){

        if(parseInt(playerTotal.innerText) + parseInt(playerScore.innerText) >= input.value ){
            playerTotal.innerText = parseInt(playerTotal.innerText) + parseInt(playerScore.innerText)
            playerWinner.innerText = 'We Have a Winner!'
            roll.disabled = true;
            hold.disabled = true;
            winnerSound.play()
            resetBtn.style.display = "none" 
            newPage()

        }

    }


    function incrementScore(){



        if(winner1.innerText === 'We Have a Winner!' ){
            localStorage.setItem('scoreOfPlayerOneClone', ++scoreOfOne);
            let scoreOfOneClone = +localStorage.getItem('scoreOfPlayerOneClone')
            scoreOne.innerText = scoreOfOneClone                  
            }
        
        
            else if(winner2.innerText === 'We Have a Winner!' ){
            localStorage.setItem('scoreOfPlayerTwoClone', ++scoreOfTwo);
            let scoreOfTwoClone = +localStorage.getItem('scoreOfPlayerTwoClone')
            scoreTwo.innerText = scoreOfTwoClone
            }
    }


    

    function winner(){
        
        announcement()
        incrementScore()
            

    }

    // ------
 

    function togglePlayPause(){
        backgroundMusic.paused ? backgroundMusic.play() :
        backgroundMusic.pause();
    }

    function giphy(){
        gif.classList.remove(`hidden`)
        roll.disabled = true;
        setTimeout(function(){
            gif.classList.add(`hidden`)
            roll.disabled = false;
        }, 1500)
    }
    
    //-----------------------------------------------------------------------------------------------
    
    // Event Listeners
    start.addEventListener('click' , function() {
        
        roll.disabled = false;
        start.disabled = true;
        input.disabled = true;
        startSound.play() 

        
        
    })


    hold.addEventListener('click' , () => {
        playerTotalPlus()
        nextPlayer()  
        turnCheck()  
        nextSound.play()    
        if(playerScore.innerText === '0'){
        hold.disabled = true;
        }         
    })
    
    
    roll.addEventListener('click' , function(){
        randomizeNumbers() 
        diceSound.play()
        hold.disabled = false;
        winner()
       
      
    
    })

    music.addEventListener('click', function() {
        togglePlayPause()
        
    })


// --------------------------------------------------------------------------------


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
    resetSound.play()
    nextPlayer()
    turnCheck()
    giphy()

    }

    }


// --------------------------------------------------------


   // LOCAL STORAGE 
        
   scoreOfOneClone = +localStorage.getItem('scoreOfPlayerOneClone')
   scoreOfOne = scoreOfOneClone
   scoreOne.innerText = scoreOfOne
           
   scoreOfTwoClone = +localStorage.getItem('scoreOfPlayerTwoClone')
   scoreOfTwo = scoreOfTwoClone
   scoreTwo.innerText = scoreOfTwo

   //    ---------

// --------------------------------------------------------
// GAME RESET
resetBtn.addEventListener('click', function() {
    localStorage.clear()
    window.location = window.location;
})

// --------------------------------------------------------

// PAGE 2
playAgainBtn.addEventListener('click' , function(){
 window.location = window.location; 
})
    
resetGameBtn.addEventListener('click' , function(){
window.location = window.location;
localStorage.clear()    
})