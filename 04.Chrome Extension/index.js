
// function saveIn(){
//     console.log("Button clicked from onlick attribute");
// }

let myLeads = ["www.awesomelead.com", "www.epiclead.com", "www.greatlead.com"]
const inputEl = document.getElementById('input-el')
const inputbtn = document.getElementById('input-btn')
const ulEl = document.getElementById('ul-el')

inputbtn.addEventListener("click",function(){
    myLeads.push(inputEl.value);
    console.log(myLeads) 
})

for (let i = 0; i < myLeads.length; i++){
    ulEl.textContent += myLeads[i] + " "
}