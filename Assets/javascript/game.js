//create an array of  Words 
const word = ['Mud City','Windy City','Chi Town', 'Second City','City of the Big Shoulders','City by the Lake','The City that Works','Heart of America','Chi Raq'];
//Choose word randomly
let ranNum = Math.floor(Math.random() * word.length);
let chooesnWord = word[randNum];
let underScore = [];
console.log(chooesnWord);
//create underscores 
let generateUnderscore = () => {
    for(let i = 0; i < chooesnWord.length; i++) {
        underScore.push('_');
    }
     return underScore;
}
console.log(generateUnderscore());
//get users guess
document.addEventListener('keypress', (event) => {
    console.log(event);
});
//check ig guess is correct
//if right push to right array
//if wrong push to wrong array
