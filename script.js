const diceEl = document.querySelector("#dice");
const buttonEl = document.querySelector(".roll-btn");
const diceRolls = [
    "&#9856;",
    "&#9857;",
    "&#9858;",
    "&#9859;",
    "&#9860;",
    "&#9861;",
];
let historyList = [];

function getDiceFace() {
    let result = Math.floor(Math.random() * 6); // give a number between 0-5
    historyList.push(diceRolls[result]); 
    return diceRolls[result];
}

buttonEl.addEventListener("click", () => {
    diceEl.classList.add("roll-animation");
    setTimeout(() => {
        diceEl.classList.remove("roll-animation");
        diceEl.innerHTML = `<div class="dice" id="dice">${getDiceFace()}</div>`;
        updateHistoryList();
    },1000);
});

// drag pawn
var dragEl = document.querySelectorAll(".drag");
dragEl.forEach(element =>{
    element.addEventListener('dragstart',drag_start,false);
}) 
 
document.body.addEventListener('dragover',drag_over,false); 
document.body.addEventListener('drop',drop,false); 

function drag_start(event) {
    let style = window.getComputedStyle(event.target, null);
    event.dataTransfer.setData("text/plain",
    (parseInt(style.getPropertyValue("left"),10) - event.clientX) + ',' + (parseInt(style.getPropertyValue("top"),10) - event.clientY)+','+event.target.id);
} 
function drag_over(event) { 

    event.preventDefault(); 
    return false; 
} 
function drop(event) { 
    event.preventDefault();
    let offset = event.dataTransfer.getData("text/plain").split(',');

    let dm = document.getElementById(`${offset[2]}`);
    
    dm.style.left = (event.clientX + parseInt(offset[0],10)) + 'px';
    dm.style.top = (event.clientY + parseInt(offset[1],10)) + 'px';
    return false;
} 