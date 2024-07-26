const gridContainer = document.querySelector("#gridContainer")
StyleSheet
function createDiv (num) {
    for (let i = 0; i < num; ++i) {
        const newDiv = document.createElement("div")
        gridContainer.appendChild(newDiv)
    }
}

createDiv(1024);
let divArray = document.querySelectorAll("#gridContainer div")

divArray.forEach(function(element) {
    element.setAttribute("style", "flex-basis: 3.125%")
    element.addEventListener("mouseover", function() {
        element.classList.add("hover")
        console.log(element)
    })
})