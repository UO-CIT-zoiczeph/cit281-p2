/*
    CIT 281 Project 2
    Name: Zoe Turnbull
*/

// Returns a random number between min (inclusive) and max (exclusive)
function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

// Returns a random letter
function getRandomLetter(min, max){
    let randLet = Math.floor(Math.random() * (max - min) + min);
    return alphabet[randLet];
}

// Returns a random string
function getRandomString(minLength, maxLength) {
    let randString = "";
    for (let i = 0; i < getRandomInteger(minLength, (maxLength + 1)); i++) {
        randString += getRandomLetter(0, alphabet.length);
    }
    return randString;
}

// 
function getSortedString(string) {
    console.log(string.split('').sort().join(''));
}

const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");

let result = "";

let lengthOfOutputString = getRandomInteger(5, 26);

for (let i = 0; i < lengthOfOutputString; i++) {
    result += getRandomLetter(0,alphabet.length);
}

console.log(getRandomString(10, 20));
// getSortedString("edcba")