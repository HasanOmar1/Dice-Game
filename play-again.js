//Play again - Reset game   PAGE
let playAgainBtn = document.querySelector('.playAgain')
let resetGameBtn = document.querySelector('.resetGame')

playAgainBtn.addEventListener('click' , function(){
    window.location.href = "index.html";

})

resetGameBtn.addEventListener('click' , function(){
    window.location.href = "index.html";
    localStorage.clear()

})