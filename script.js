//need randomizer for: Div, Li, button, section, header, main

const palette = ["p-red", "p-orange", "p-yellow", "p-green", "p-sky-blue", "p-blue", "p-purple", "p-pink", "p-white"]

const bgs = ["div", "button", "section", "header", "main"]

bgs.forEach(item => {
    console.log(item)
    const screenItems = document.querySelectorAll(item);
    for(let i = 0; i < screenItems.length; i++){
        console.log(screenItems[i]);
        screenItems[i].classList.add(randomColor());
    }
}) 

function randomColor(){
    randIndex = Math.floor(Math.random()*(palette.length));
    return palette[randIndex]
}


