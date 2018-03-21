const spanish = {
    "dinosaurs": "dinosaurios",
    "and": "y",
    "cats": "gatos",
    "are": "son",
    "cool": "guay"
};

const french = {
    "dinosaurs": "dinosaures",
    "and": "et",
    "cats": "chats",
    "are": "sont",
    "cool": "cool"
};

const german = {
    "dinosaurs": "Dinosaurier",
    "and": "uns",
    "cats": "Katzen",
    "are": "sind",
    "cool": "cool"
};

const inputBox = document.getElementById('toTranslate');
const spanishBtn = document.getElementById('spanish');
const frenchBtn= document.getElementById('french');
const germanBtn = document.getElementById('german');
const outputBox = document.getElementById('output');

// spanishBtn.addEventListener('click', (e) => {
//     console.log("my event", e);
//     const userInput = inputBox.value.toLowerCase();
//     let domOutput = spanish[userInput];
//     outputBox.innerHTML = domOutput;
// })

// frenchBtn.addEventListener('click', (e) => {
//     console.log("my event", e);
//     const userInput = inputBox.value.toLowerCase();
//     let domOutput = french[userInput];
//     outputBox.innerHTML = domOutput;
// })

// germanBtn.addEventListener('click', (e) => {
//     console.log("my event", e);
//     const userInput = inputBox.value.toLowerCase();
//     let domOutput = german[userInput];
//     outputBox.innerHTML = domOutput;
// })


const allMyButtons = document.getElementsByClassName('translator');

for (let i = 0; i < allMyButtons.length; i++) {
    allMyButtons[i].addEventListener('click', (e) => {
        const userInput = inputBox.value.toLowerCase();
        let domOutput = '';
        if (e.target.id === 'spanish') {
            domOutput = spanish[userInput];
        } else if (e.target.id === 'french') {
            domOutput = french[userInput];
        } else {
            domOutput = german[userInput];
        }

        outputBox.innerHTML = domOutput;
    })
}