
// function saveIn(){
//     console.log("Button clicked from onlick attribute");
// }

let myLeads = []
const inputEl = document.getElementById('input-el')
const inputbtn = document.getElementById('input-btn')
const ulEl = document.getElementById('ul-el')

inputbtn.addEventListener("click",function(){
    myLeads.push(inputEl.value);
    //console.log(myLeads)
    rednerLeads()
})


function rednerLeads(){
    // one way to do
    // for (let i = 0; i < myLeads.length; i++){
    //     // ulEl.innerHTML += "<li>" + myLeads[i] + "</li>"\


    //     // another way to render

    //     // Create element
    //     // set text content
    //     // append to ul
    //     const li = document.createElement('li')
    //     li.textContent = myLeads[i]
    //     ulEl.append(li)
    // } 

    // another way fast way
    let list_item = "" 
    for (let i = 0; i < myLeads.length; i++){
        list_item += "<li>" + myLeads[i] + "</li>"
    }
    ulEl.innerHTML = list_item

}

