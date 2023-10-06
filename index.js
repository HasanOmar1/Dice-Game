
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
input.value = 30;
let player1 = 'p1'
let player2 = 'p2'
    



start.addEventListener('click' , function() {
    roll.disabled = false;
    start.disabled = true;
    input.disabled = true;
    player1 = 'p1'
    if(currentScoreOf1.innerText === '0'){
        hold.disabled = true;

    }
    
})

roll.addEventListener('click' , function(){
    randomizeNumbers() 
    hold.disabled = false;

    if(parseInt(playerOneTotal.innerText) >= input.value ||
        parseInt(currentScoreOf1.innerText) >= input.value){ 
        roll.disabled = true 
        winner1.innerText = 'Congratz You Won!'
    } 

    if(parseInt(playerOneTotal.innerText) + parseInt(currentScoreOf1.innerText) >= input.value ){
        playerOneTotal.innerText = parseInt(playerOneTotal.innerText) + parseInt(currentScoreOf1.innerText)
        winner1.innerText = 'Congratz You Won!'
        roll.disabled = true;
        hold.disabled = true;
    }
   
})


hold.addEventListener('click' , function() {
    playerTotalPlus()
    switchPlayer('p1')
    if(currentScoreOf1.innerText === '0'){
        hold.disabled = true;
    } 
    if(parseInt(playerOneTotal.innerText) >= input.value ){
        winner1.innerText = 'Congratz You Won!'
        roll.disabled = true;
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
    playerOneTotal.innerText = 0
    currentScoreOf1.innerText = 0          
    }

    }

// functions ---------------------------------------------------------------
        
function currentPlus(n){
    currentScoreOf1.innerText =  parseInt(currentScoreOf1.innerText ) + n;
    }

function playerTotalPlus(){
    playerOneTotal.innerText =  parseInt(playerOneTotal.innerText) + parseInt(currentScoreOf1.innerText );
    currentScoreOf1.innerText = 0
    }
        
    
function switchPlayer(currentPlayer){
    if(currentPlayer === 'p1'){
    currentPlayer = 'p2' 
    }
    else{
    currentPlayer = 'p1'
    }
    
    }
// --------------------------------------------------------
     //Test
   
    // let players = [player1 , player2] 
    // let turn = 0;
    
    
    // let currentPlayer = players[turn]
    
    // if clicked on hold => turn++
    // clicked again = if turn === players.length , turn = 0;
    // players[turn]
    

    // --------------------------------------------------------------


        
        
    // GAME RESET
resetBtn.addEventListener('click', function() {
    window.location.reload()
})