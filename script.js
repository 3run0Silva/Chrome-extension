"use strict"

let myLeads = [];
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn");
const ulEl = document.getElementById("ul-el")


 
inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value)
    inputEl.value = ""
    renderLeads()
})

let listItems = "";

function renderLeads() {
    for (let i = 0; i < myLeads.length; i++) {
        listItems += `
            <li> 
                <a href= '${myLeads[i]}' target= '_blank'>${myLeads[i]}</a> 
            </li>`
        console.log(listItems)
    }
    ulEl.innerHTML = listItems
}







