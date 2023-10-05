
// GAME RESET
let resetBtn = document.querySelector('.reset')
resetBtn.addEventListener('click', function() {
    window.location.reload()
})


// Buttons

let start = document.querySelector('.start')
let roll = document.querySelector('.roll')


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



roll.addEventListener('click' , function(){
    // if(diceOne.classList.contains('diceOne'))
    // diceOne.classList.remove('diceOne')
    // diceOne.classList.add('diceThree')
    // diceOne.value = 3
    // console.log(diceOne.value)
    // console.log(diceOne.classList.contains('diceThree'))
    // if(diceTwo.classList.contains('dicetwo')){
    //     diceTwo.classList.remove('diceTwo')
    //     diceTwo.classList.add('diceFive')
    //     diceTwo.value = 5
    // }    
})


 const randomizeNumbers = ()=>{
        let rand1 = Math.ceil(Math.random()*6)
        let rand2 = Math.ceil(Math.random()*6)
        
        // First Dice
        
        console.log(rand1);

        if(rand1 === 1){
            // console.log('The random is 1')
            if(!firstDice.classList.contains('diceOne')){
            let remove = firstDice.classList.item(1)
            firstDice.classList.remove(remove)
            firstDice.classList.add('diceOne')
            }

        }

       else if(rand1 === 2){
            // console.log('The random is 2')
            if(!firstDice.classList.contains('diceTwo')){
                let remove = firstDice.classList.item(1)
                firstDice.classList.remove(remove)
                firstDice.classList.add('diceTwo')

            }

        }

        else if(rand1 === 3){
            // console.log('The random is 3')
            if(!firstDice.classList.contains('diceThree')){
            let remove = firstDice.classList.item(1)
            firstDice.classList.remove(remove)
            firstDice.classList.add('diceThree')
            }

        }

        else if(rand1 === 4){
            // console.log('The random is 4')
            if(!firstDice.classList.contains('diceFour')){
                let remove = firstDice.classList.item(1)
                firstDice.classList.remove(remove)
                firstDice.classList.add('diceFour')
                }

        }

        else if(rand1 === 5){
            // console.log('The random is 5')
            if(!firstDice.classList.contains('diceFive')){
                let remove = firstDice.classList.item(1)
                firstDice.classList.remove(remove)
                firstDice.classList.add('diceFive')
                }

        }

        else if(rand1 === 6){
            // console.log('The random is 6')
            if(!firstDice.classList.contains('diceSix')){
                let remove = firstDice.classList.item(1)
                firstDice.classList.remove(remove)
                firstDice.classList.add('diceSix')
                }
        }


        // Second Dice

        console.log(rand2)

       if(rand2 === 1){
            // console.log('The random is 1')
            if(!secondDice.classList.contains('diceOne')){
            let remove = secondDice.classList.item(1)
            secondDice.classList.remove(remove)
            secondDice.classList.add('diceOne')
            }

        }

       else if(rand2 === 2){
            // console.log('The random is 2')
            if(!secondDice.classList.contains('diceTwo')){
                let remove = secondDice.classList.item(1)
                secondDice.classList.remove(remove)
                secondDice.classList.add('diceTwo')

            }

        }

        else if(rand2 === 3){
            // console.log('The random is 3')
            if(!secondDice.classList.contains('diceThree')){
            let remove = secondDice.classList.item(1)
            secondDice.classList.remove(remove)
            secondDice.classList.add('diceThree')
            }

        }

        else if(rand2 === 4){
            // console.log('The random is 4')
            if(!secondDice.classList.contains('diceFour')){
                let remove = secondDice.classList.item(1)
                secondDice.classList.remove(remove)
                secondDice.classList.add('diceFour')
                }

        }

        else if(rand2 === 5){
            // console.log('The random is 5')
            if(!secondDice.classList.contains('diceFive')){
                let remove = secondDice.classList.item(1)
                secondDice.classList.remove(remove)
                secondDice.classList.add('diceFive')
                }

        }
        
        else if(rand2 === 6){
            // console.log('The random is 6')
            if(!secondDice.classList.contains('diceSix')){
                let remove = secondDice.classList.item(1)
                secondDice.classList.remove(remove)
                secondDice.classList.add('diceSix')
                }
        }


    }
    randomizeNumbers()
