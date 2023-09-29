// access Player button
const button = document.getElementById("1");
button.addEventListener("click", updateName);

function updateName() { 
    const name = prompt("Enter a new name"); 
    button.textContent = `Player 1: ${name}`;
}

//access <p> tag "Level" and and button "levelup" 
const para = document.getElementById("level");
const levelUpBtn = document.getElementById("2"); 
levelUpBtn.addEventListener("click", levelUp);

var level; 
function initNewPlayer() { 
    level = 1; 
}

function display() {
    para.innerHTML = `Level: ${level}` + (level == 100 ? " (MAX)" : "");
}

function levelUp() { 
    if(level < 100) {
        level++
    }
    display(); 
}