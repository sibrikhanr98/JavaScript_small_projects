let firstCard = randomCard()
let secondCard = randomCard()

let sum = firstCard + secondCard
let cards = [firstCard, secondCard]
let hasBlackjack = false
let isAlive = true
let message = ''
let messageEl = document.getElementById('message-el')
let sumEl = document.getElementById('sum-el')
let cardEl = document.getElementById('card-el')


function randomCard()
{
    let randomCards = Math.floor(Math.random()*13)+1
    if (randomCards > 10)
    {
        return randomCards = 10
    }
    else if (randomCards === 1)
    {
        return randomCards = 11
    }
    else
    {
        return randomCards
    }
}

function startGame()
{
    renderGame()
}
function renderGame()
{
    cardEl.textContent = "Cards: "

    for (let i = 0; i<cards.length; i++)
    {
        cardEl.textContent += cards[i] + " "
    }
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
    let card = randomCard()
    sum += card
    cards.push(card)
    renderGame()
}