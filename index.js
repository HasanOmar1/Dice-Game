


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

roll.addEventListener('click' , function(){
    randomizeNumbers()    
})


playerOneTotal.innerText = 0 
playerTwoTotal.innerText = 0 
currentScoreOf1.innerText = 0
currentScoreOf2.innerText = 0


const randomizeNumbers = ()=>{
    let rand1 = Math.ceil(Math.random()*6)
    let rand2 = Math.ceil(Math.random()*6)


    // First Dice
        
    if(rand1 === 1){
        // console.log('The random is 1')
        if(!firstDice.classList.contains('diceOne')){
            let remove = firstDice.classList.item(1)
            firstDice.classList.remove(remove)
            firstDice.classList.add('diceOne')
        }
        currentPlus(1)

        }
        
        else if(rand1 === 2){
            // console.log('The random is 2')
            if(!firstDice.classList.contains('diceTwo')){
                let remove = firstDice.classList.item(1)
                firstDice.classList.remove(remove)
                firstDice.classList.add('diceTwo')
            }
            currentPlus(2)
            
        }
        
        else if(rand1 === 3){
            // console.log('The random is 3')
            if(!firstDice.classList.contains('diceThree')){
                let remove = firstDice.classList.item(1)
                firstDice.classList.remove(remove)
                firstDice.classList.add('diceThree')
            }
            currentPlus(3)
            
        }

        else if(rand1 === 4){
            // console.log('The random is 4')
            if(!firstDice.classList.contains('diceFour')){
                let remove = firstDice.classList.item(1)
                firstDice.classList.remove(remove)
                firstDice.classList.add('diceFour') 
            }
            currentPlus(4)
            
        }

        else if(rand1 === 5){
            // console.log('The random is 5')
            if(!firstDice.classList.contains('diceFive')){
                let remove = firstDice.classList.item(1)
                firstDice.classList.remove(remove)
                firstDice.classList.add('diceFive')
            }
            currentPlus(5)
                
            }
            
            else if(rand1 === 6){
                // console.log('The random is 6')
            if(!firstDice.classList.contains('diceSix')){
                let remove = firstDice.classList.item(1)
                firstDice.classList.remove(remove)
                firstDice.classList.add('diceSix')
            }
            currentPlus(6)
        }
        
        
        // Second Dice
        
        // console.log(rand2)
        
        if(rand2 === 1){
            // console.log('The random is 1')
            if(!secondDice.classList.contains('diceOne')){
            let remove = secondDice.classList.item(1)
            secondDice.classList.remove(remove)
            secondDice.classList.add('diceOne')
        }
        currentPlus(1)

    }

    else if(rand2 === 2){
            // console.log('The random is 2')
            if(!secondDice.classList.contains('diceTwo')){
                let remove = secondDice.classList.item(1)
                secondDice.classList.remove(remove)
                secondDice.classList.add('diceTwo')
            }
            currentPlus(2)
            
        }

        else if(rand2 === 3){
            // console.log('The random is 3')
            if(!secondDice.classList.contains('diceThree')){
            let remove = secondDice.classList.item(1)
            secondDice.classList.remove(remove)
            secondDice.classList.add('diceThree')
        }
        currentPlus(3)

        }
        
        else if(rand2 === 4){
            // console.log('The random is 4')
            if(!secondDice.classList.contains('diceFour')){
                let remove = secondDice.classList.item(1)
                secondDice.classList.remove(remove)
                secondDice.classList.add('diceFour')
            }
            currentPlus(4)

        }

        else if(rand2 === 5){
            // console.log('The random is 5')
            if(!secondDice.classList.contains('diceFive')){
                let remove = secondDice.classList.item(1)
                secondDice.classList.remove(remove)
                secondDice.classList.add('diceFive')
            }
            currentPlus(5)
                
            }
        
            else if(rand2 === 6){
            // console.log('The random is 6')
            if(!secondDice.classList.contains('diceSix')){
                let remove = secondDice.classList.item(1)
                secondDice.classList.remove(remove)
                secondDice.classList.add('diceSix')
            }
            currentPlus(6)
            }

            // if(rand1 && rand2 === 6){
            //     alert('You Have Lost')
            //     window.location.reload()


            // }

            
        }
        // GAME RESET
        resetBtn.addEventListener('click', function() {
            window.location.reload()
        })


        function currentPlus(n){
            currentScoreOf1.innerText =  parseInt(currentScoreOf1.innerText ) + n;
        }

        start.addEventListener('click' , function() {
            // console.log(input.value)
        })