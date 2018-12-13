//create an array of  Words 
var doubleWord = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o', 'p','q','r','s','t','u','v','w','x','y','z'];
var wordBank = ['Mud City', 'Windy City', 'Chi Town', 'Second City', 'City of the Big Shoulders', 'City by the Lake', 'The City that Works', 'Heart of America', 'Chi Raq'];
var randNum = Math.floor(Math.random() * word.length);
var choosenWord = word[randNum];
var rightWord = [];
var wrongWord = [];
var underScore = []; 

var docUnderScore = document.getElementsByClassName('underscore');

//create underscores 
var generateUnderscore = () => {
    for(var i = 0; i < choosenWord.length; i++) {
        underScore.push('_');
        docUnderScore[0].innerHTML = underScore.join(' ');
    }
     return underScore;
}

// console.log(generateUnderscore());
//get users guess
document.addEventListener('keypress', (event) => {
    var keyword = String.fromCharCode(event.keyCode);
//If right
    if(choosenWord.indexOf(keyword) > -1) {
        // add letter to the array
        rightWord.push(keyword);
        //replace the underscore with the correct letter
        underScore[choosenWord.indexOf(keyword)] = keyword;
        //Matching users guesses
        if(underScore.join('') == choosenWord) {
            alert('You Win'); 
        }
    }
     else{
        wrongWord.push(keyword);
    }
});

 .innerHTML = generateUnderscore().join('');

//check if guess is correct
//if right push to right array
//if wrong push to wrong array
