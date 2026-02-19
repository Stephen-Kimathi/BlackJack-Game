
let isAlive = false
let hasBlackJack = false
let message = ""
let cards = []

let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardEl = document.querySelector("#card-el")
let playerEl = document.getElementById("player-el")

let player = {
    name: "Edigal",
    chips: 13277
}

playerEl.textContent = player.name + ": $ " + player.chips






function getRandomCard(){
    
    random = Math.floor(
        Math.random()* 13 + 1
    )

    if (random > 10){
        return 10
    } else if(random === 1){
        return 11
    } else {
        return random
    }
}




function start(){
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    
    cards = [firstCard, secondCard]
    // Generate two random numbes
    // Re-assign the cards and sum variables so that the game can start
    sum =  firstCard + secondCard
    rendergame()
}



function rendergame() {

    console.log(cards)
    cardEl.textContent = "Cards: "


    for (let i = 0; i < cards.length; i++){

        cardEl.textContent += cards[i] + " "

    }

   
    sumEl.textContent = "Sum: " + sum

    if (sum <= 20) {
        message = "Do you want to draw a new card? 🙂"
        isAlive = true
    } else if (sum === 21) {
        message = "Wohoo! You've got Blackjack! 🥳"
        hasBlackJack = true
    } else {
        message = "You're out of the game! 😭"  
        isAlive = false
    }

    
    messageEl.textContent = message

}

function drawNewCard(){

    if (isAlive === true && hasBlackJack === false){
        
        let thirdCard = getRandomCard()
        cards.push(thirdCard)
        sum += thirdCard 
        rendergame()
    }

}
