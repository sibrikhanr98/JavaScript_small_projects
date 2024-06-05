
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
    inputEl.value = ""
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

        //list_item += "<li><a target = '_blank' href ='" + myLeads[i] + "'>" + myLeads[i] + "</a></li>"

        // Let's make the above code easier

        list_item += `
            <li>
                <a target = '_blank' href ='${myLeads[i]}'>
                    ${myLeads[i]}
                </a>
            </li>
        `
    }
    ulEl.innerHTML = list_item

}

