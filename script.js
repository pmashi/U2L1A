const button = document.getElementById("1");

button.addEventListener("click", updateName);




function updateName() { 
    const name = prompt("Enter a new name"); 
    button.textContent = `Player 1: ${name}`;
}

const para = document.getElementById("level");
const levelUpBtn = document.getElementById("2"); 

levelUpBtn.addEventListener("click", levelUp);


function initNewPlayer() { 
    var level = 1; 
}

function display() {
    para.innerHTML = `Level: ${level}`;
}

function levelUp() { 
    level++1; 
    display(); 
}