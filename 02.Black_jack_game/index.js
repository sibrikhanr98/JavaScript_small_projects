

let sum = 0
let cards = []
let hasBlackjack = false
let isAlive = false
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
    isAlive = true
    let firstCard = randomCard()
    let secondCard = randomCard()
    cards = [firstCard,secondCard]
    sum = firstCard + secondCard
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
    if (isAlive === true && hasBlackjack === false)
    {
        let card = randomCard()
        sum += card
        cards.push(card)
        renderGame()
    }
    
}