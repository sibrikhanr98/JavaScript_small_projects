// document.getElementById('count-el').innerText=5
let count = 0
let countEL = document.getElementById('count-el')
function increment() 
{
    count = count + 1
    countEL.innerText = count
}