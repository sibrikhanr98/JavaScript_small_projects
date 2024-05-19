let firstCard = 10
let secondCard = 11

let sum = firstCard + secondCard

let hasBlackjack = false
let isAlive = true
let message = ''
let messageEl = document.getElementById('message-el')
let sumEl = document.getElementById('sum-el')
let cardEl = document.getElementById('card-el')
function startgame()
{
    cardEl.textContent = "Cards: " + firstCard + " " + secondCard
    sumEl.textContent = "Sum: " + sum
        
    if (sum <= 21)
        {
            message = "Do you want to draw a new card? "
        }
    else if (sum === 21)
        {
            message = "Wohoo! You've got Blackjack! "
            hasBlackjack = true
        }
    else
        {
            message = "You're out of the game! "
            isAlive = false
        }
    messageEl.textContent = message
    
}
