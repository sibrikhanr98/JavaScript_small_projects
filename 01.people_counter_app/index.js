// document.getElementById('count-el').innerText=5
let count = 0
let countEl = document.getElementById('count-el')
let saveEl = document.getElementById('save-el')
function increment() 
{
    count +=1
    countEl.innerText = count
}

function save()
{
    let countstr = count + " - "

    saveEl.innerText += countstr
    //console.log(count)
}