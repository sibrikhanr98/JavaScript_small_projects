let firstCard = 4
let secondCard = 11

let sum = firstCard + secondCard

let hasBlackjack = false
let isAlive = true
let message = ''
let messageEl = document.getElementById('message-el')
let sumEl = document.getElementById('sum-el')
let cardEl = document.getElementById('card-el')

function startGame()
{
    renderGame()
}
function renderGame()
{
    cardEl.textContent = "Cards: " + firstCard + " " + secondCard
    sumEl.textContent = "Sum: " + sum
        
    if (sum <= 20)
        {
            message = "Do you want to draw a new card? "
        }
    else if (sum === 21)
        {
            message = "You've got Blackjack! "
            hasBlackjack = true
        }
    else
        {
            message = "You're out of the game! "
            isAlive = false
        }
    messageEl.textContent = message
    
}
function newCard()
{
    // console.log("Drawing new card from the deck!")
    let card = 4
    sum += card
    renderGame()
}