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
    // console.log(diceRolls[result]);
    historyList.push(diceRolls[result]); 
    // console.log(historyList)
    return diceRolls[result];
}

buttonEl.addEventListener("click", () => {
    diceEl.classList.add("roll-animation");
    setTimeout(() => {
        diceEl.classList.remove("roll-animation");
        diceEl.innerHTML = `<div class="dice" id="dice">${getDiceFace()}</div>`;
        updateHistoryList();
        // console.log(updateHistoryList);
    }, 1000);
});
