//need randomizer for: Div, Li, button, section, header, main

const pastelPalette = ["p-red", "p-orange", "p-yellow", "p-green", "p-sky-blue", "p-blue", "p-purple", "p-pink", "p-white"]
const greenPalette = ["g1", "g2", "g3", "g4", "g5", "g6", "g7", "g8", "g9"];
const bgs = ["div", "button", "section", "header", "main"]
let currentPalette = greenPalette;

bgs.forEach(item => {
    console.log(item)
    const screenItems = document.querySelectorAll(item);
    for(let i = 0; i < screenItems.length; i++){
        console.log(screenItems[i]);
        screenItems[i].classList.add(randomColor());
    }
}) 

function randomColor(){
    randIndex = Math.floor(Math.random()*(currentPalette.length));
    return currentPalette[randIndex]
}


