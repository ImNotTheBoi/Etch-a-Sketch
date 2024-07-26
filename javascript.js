const gridContainer = document.querySelector("#gridContainer")

function createDiv (num) {
    for (let i = 0; i < num; ++i) {
        const newDiv = document.createElement("div")
        gridContainer.appendChild(newDiv)
    }
}

createDiv(256);

let divArray = document.querySelectorAll("#gridContainer div")

divArray.forEach(function(element) {
    element.addEventListener("mouseover", function() {
        element.classList.add("hover")
        console.log(element)
    })
})