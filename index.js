let firstCard = 10
let secondCard = 10
let sum = firstCard + secondCard
let isAlive = true
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardEl = document.querySelector("#card-el")


function start() {

    cardEl.textContent = "Cards: " + firstCard + " and " + secondCard
   
    sumEl.textContent = "Sum: " + sum

    if (sum <= 20) {
        message = "Do you want to draw a new card? 🙂"
    } else if (sum === 21) {
        message = "Wohoo! You've got Blackjack! 🥳"
    } else {
        message = "You're out of the game! 😭"  
        isAlive = false
    }

    
    messageEl.textContent = message

}