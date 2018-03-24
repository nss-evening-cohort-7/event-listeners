// PART 1: Translator

// const spanish = {
//     "dinosaurs": "dinosaurios",
//     "and": "y",
//     "cats": "gatos",
//     "are": "son",
//     "cool": "guay"
// };

// const french = {
//     "dinosaurs": "dinosaures",
//     "and": "et",
//     "cats": "chats",
//     "are": "sont",
//     "cool": "cool"
// };

// const german = {
//     "dinosaurs": "Dinosaurier",
//     "and": "uns",
//     "cats": "Katzen",
//     "are": "sind",
//     "cool": "cool"
// };

// const inputBox = document.getElementById('toTranslate');
// const spanishBtn = document.getElementById('spanish');
// const frenchBtn= document.getElementById('french');
// const germanBtn = document.getElementById('german');
// const outputBox = document.getElementById('output');

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


// const allMyButtons = document.getElementsByClassName('translator');

// for (let i = 0; i < allMyButtons.length; i++) {
//     allMyButtons[i].addEventListener('click', (e) => {
//         const userInput = inputBox.value.toLowerCase();
//         let domOutput = '';
//         if (e.target.id === 'spanish') {
//             domOutput = spanish[userInput];
//         } else if (e.target.id === 'french') {
//             domOutput = french[userInput];
//         } else {
//             domOutput = german[userInput];
//         }

//         outputBox.innerHTML = domOutput;
//     })
// }



// PART 2: Pie Students

const students = [
    {
        avatar: "https://robohash.org/inciduntsapientetenetur.png?size=100x100&set=set1",
        firstName: "Marinna",
        lastName: "Olliver",
        catchPhrase: "Optional global adapter"
    },
    {
        avatar: "https://robohash.org/facereinventoreexpedita.png?size=100x100&set=set1",
        firstName: "Shalne",
        lastName: "Roddell",
        catchPhrase: "Vision-oriented optimizing installation"
    },
    {
        avatar: "https://robohash.org/sintquasnam.png?size=100x100&set=set1",
        firstName: "Kamila",
        lastName: "Girardey",
        catchPhrase: "Ergonomic human-resource toolset"
    },
    {
        avatar: "https://robohash.org/autautfugiat.png?size=100x100&set=set1",
        firstName: "Conn",
        lastName: "Bemment",
        catchPhrase: "Mandatory 4th generation model"
    },
    {
        avatar: "https://robohash.org/inciduntameteum.png?size=100x100&set=set1",
        firstName: "Jeanelle",
        lastName: "Inglesent",
        catchPhrase: "Configurable value-added architecture"
    },
    {
        avatar: "https://robohash.org/vitaequiafugiat.png?size=100x100&set=set1",
        firstName: "Xymenes",
        lastName: "Nickols",
        catchPhrase: "Virtual coherent standardization"
    },
    {
        avatar: "https://robohash.org/oditexassumenda.png?size=100x100&set=set1",
        firstName: "Mandel",
        lastName: "Haycox",
        catchPhrase: "Balanced zero tolerance throughput"
    },
    {
        avatar: "https://robohash.org/ipsamnamiusto.png?size=100x100&set=set1",
        firstName: "Salim",
        lastName: "Brunker",
        catchPhrase: "Synergized impactful middleware"
    },
    {
        avatar: "https://robohash.org/quiaofficiaullam.png?size=100x100&set=set1",
        firstName: "Melanie",
        lastName: "Ivain",
        catchPhrase: "Multi-channelled solution-oriented artificial intelligence"
    }
];

const printToDom = (domString, divId) => {
    const printTo = document.getElementById(divId);
    printTo.innerHTML = domString;
};

const buildDomString = (studentArray) => {
    let domString = '';
    studentArray.forEach((student) => {
        domString += `<div class="card">`;
       domString +=     `<h1>${student.firstName} ${student.lastName}</h1>`;
       domString +=     `<h3>${student.catchPhrase}</h3>`;
       domString +=     `<img src="${student.avatar}" alt="">`;
       domString +=     `<button class="card-button">Brought Pie</button>`;
       domString +=  `</div>`;
    });
    printToDom(domString, 'card-holder');
};

buildDomString(students);

const allTheButtons = document.getElementsByClassName('card-button');

for (let i = 0; i < allTheButtons.length; i++) {
    allTheButtons[i].addEventListener('click', (e) => {
        console.log('event!!!!!!!', e);
    });
}

