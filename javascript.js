// Variables
const gridContainer = document.querySelector("#gridContainer")
const createGrid = document.querySelector("#createGrid")

// Starter Grid
createDiv(1024);
let divArray = document.querySelectorAll("#gridContainer div")

divArray.forEach(function(element) {
    element.setAttribute("style", "flex-basis: 3.125%")
    element.addEventListener("mouseover", function() {
        element.classList.add("hover")
    })
})

function createDiv (num) {
    for (let i = 0; i < num; ++i) {
        const newDiv = document.createElement("div")
        gridContainer.appendChild(newDiv)
    }
}

// Change Grid Button
createGrid.addEventListener("click", function() {
    let promptInput = parseInt(prompt("Input your preferred grid size(Maximum grid size is 100).", "0"), 10)
    if (typeof promptInput === "number" && Number.isInteger(promptInput) && promptInput > 0 && promptInput <= 100) {
        
        // Remove Function
        divArray.forEach(function(element) {
            gridContainer.removeChild(element)
        })

        //Create Div
        let divNumber = promptInput * promptInput
        let basisNumber = 100 / promptInput
        createDiv(divNumber)

        //Set Div
        divArray = document.querySelectorAll("#gridContainer div")
        divArray.forEach(function(element) {
            element.setAttribute("style", `flex-basis: ${basisNumber}%`)
            element.addEventListener("mouseover", function() {
                element.classList.add("hover")
            })
        })
    }
})