let text = document.querySelector('#textOutput');
let splitText = text.innerHTML.split(' ');
let userInput = document.querySelector('#input-type');
let startButton = document.querySelector('#startButton');
let key = document.querySelectorAll('.key')

userInput.addEventListener('input', acceptInput) // lunching the main function to check for the words and change the color
userInput.addEventListener('click', resetValue) // resetting value in input field
userInput.addEventListener('keydown', function(event) { // applying PRESSED style to a on screen button once pressed
    let k = event.key;
        for(j = 0; j < key.length; j++) {
            if(k === key[j].id.toLowerCase()) { 
                keyPressedStyle(key[j])
            } else {
                if(k === key[j].id) { 
                    keyPressedStyle(key[j])
                }
            }
        }
})

// TODO: display data from stats to HTML
// TODO Finilie pressed button for the rest of the keyboard
// TODO Input canvas in respective place
// TODO Include Session ID in the navbar for future developments
// TODO WPM counter function
// TODO Pretify HTML + CSS?

let correctWords = 0;
let mistakes = 0;
let words = [];

// Resetting input once clicked on the input
function resetValue() {
    if(userInput.value === 'Press Start when you are ready to type') {
        userInput.value = null;
    }
     
}

// Giving input back default text if the focus gone away from the input
userInput.onblur = function() {
    if(userInput.value === '') {
        userInput.value = 'Press Start when you are ready to type'
    }
}


function acceptInput() {
    userInput.onkeydown = function(e){
        if(e.keyCode == 32){
            words = userInput.value.split(' ');        
            console.log(words); 
            console.log(splitText);
            let position = words.length-1;
            compareWordsArrays(position);
        }
    }
}

function compareWordsArrays(position) {
    
    for(i = position; i < words.length; i++) {
        if(words[i] === splitText[i]) {
            console.log(`Correct word detected: ${words[i]}`);
            let wordIndex = words.indexOf(words[i]);
            changeColor(wordIndex);
            correctWords += 1;

        } else {
            console.log('Incorrect word;');
            mistakes += 1;
            console.log(mistakes);
            
        }
    }
    
}

function changeColor(pos) {
    splitText[pos]="<font color=green>"+splitText[pos]+"</font>";
    let c = splitText.join(' ');
    text.innerHTML = c;
}



function keyPressedStyle(div) {
    div.classList.add('js__border');
    setTimeout(function(){
        div.classList.remove('js__border')
    }, 100)
}
