
// function saveIn(){
//     console.log("Button clicked from onlick attribute");
// }

let myLeads = []

// String to array and array to String to use local Storage

    // let myArray = `["Hello world"]` //String

    // myArray = JSON.parse(myArray)  //String to Array

    // myArray.push("Pushing to array")

    // myArray = JSON.stringify(myArray) //Array to String

    // console.log(myArray)

//

const inputEl = document.getElementById('input-el')
const inputbtn = document.getElementById('input-btn')
const ulEl = document.getElementById('ul-el')
const deleteBtn = document.getElementById('delete-btn')

const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))

if(leadsFromLocalStorage){
    myLeads = leadsFromLocalStorage
    render(myLeads)
}

function render(leads){
    // one way to do
    // for (let i = 0; i < leads.length; i++){
    //     // ulEl.innerHTML += "<li>" + leads[i] + "</li>"\


    //     // another way to render

    //     // Create element
    //     // set text content
    //     // append to ul
    //     const li = document.createElement('li')
    //     li.textContent = leads[i]
    //     ulEl.append(li)
    // } 

    // another way fast way
    let list_item = "" 
    for (let i = 0; i < leads.length; i++){

        //list_item += "<li><a target = '_blank' href ='" + leads[i] + "'>" + leads[i] + "</a></li>"

        // Let's make the above code easier

        list_item += `
            <li>
                <a target = '_blank' href ='${leads[i]}'>
                    ${leads[i]}
                </a>
            </li>
        `
    }
    ulEl.innerHTML = list_item

}



deleteBtn.addEventListener("dblclick",function(){
    localStorage.clear() // clear the localStorage
    myLeads = [] // clear the array
    render(myLeads) // clear the DOM
})

inputbtn.addEventListener("click",function(){
    myLeads.push(inputEl.value);
    //console.log(myLeads)
    inputEl.value = ""
    localStorage.setItem("myLeads",JSON.stringify(myLeads))
    render(myLeads)
    console.log(localStorage.getItem("myLeads"))
})



