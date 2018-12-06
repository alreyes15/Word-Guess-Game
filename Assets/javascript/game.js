//create an array of  Words 
const word = ['Mud City', 'Windy City', 'Chi Town', 'Second City', 'City of the Big Shoulders', 'City by the Lake', 'The City that Works', 'Heart of America', 'Chi Raq'];
//Choose word randomly
let randNum = Math.floor(Math.random() * word.length);
let choosenWord = word[randNum];
let rightWord = [];
let wrongWord = [];
let underScore = []; 

console.log(choosenWord);

//create underscores 
let generateUnderscore = () => {
    for(let i = 0; i < choosenWord.length; i++) {
        underScore.push('_');
    }
     return underScore;
}
console.log(generateUnderscore());
//get users guess
document.addEventListener('keypress', (event) => {
    let keyword = String.fromCharCode(event.keyCode);

    if(choosenWord.indexOf(choosenWord) > -1) {
        rightWord.push(keyword);
        console.log(rightword);

        wrongWord.push(keyword);
        console.log(wrongword);
    }
});
//check if guess is correct
//if right push to right array
//if wrong push to wrong array
