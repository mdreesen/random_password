// creating arrays for each password use case
var lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', ];
var upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
var specialCharacters = ['!', '@', '#', '$', '%', '^', '&', '*', '.', ',', '?', '√', '©', '∆', '˚', 'π', '®'];



function choose() {
    var passLength = prompt("Please choose your password length from '8' to '128'.");
    var lower = confirm("Press 'ok' for lowercase letters");
    var caps = confirm("Press 'ok' for uppercase letters");
    var numbers = confirm("Press 'ok' for numbers");
    var sChar = confirm("Press 'ok' for special characters");

    // store all the answers into an object
    var answers = {
            small: lower,
            upper: caps,
            length: passLength,
            num: numbers,
            char: sChar
        }
        // return the name of that object created
    return answers;
}
// create function for getting a random element from an array
function randomElement(arr) {
    var num = Math.floor(Math.random() * arr.length);

    var element = arr[num];
    return element;
}
// check activity 3, in 03 Javascript



function generatePassword() {
    var promptChoice = choose();
    // Create 3 empty arrays, 1 of them is the final result
    var final = [];
    // 1 is the possible characters that can go into the password,
    var possibleChar = [];
    // 1 will be the guaranteed characters going into the password
    var guaranteed = [];
    // create if statements to see if the user wants to each confirm
    if (promptChoice.small === true) {
        possibleChar = possibleChar.concat(lowerCase)
        guaranteed.push(randomElement(lowerCase))
    }
    if (promptChoice.upper === true) {
        possibleChar = possibleChar.concat(upperCase)
        guaranteed.push(randomElement(upperCase))
    }
    if (promptChoice.num === true) {
        possibleChar = possibleChar.concat(numbers)
        guaranteed.push(randomElement(numbers))
    }
    if (promptChoice.char === true) {
        possibleChar = possibleChar.concat(specialCharacters)
        guaranteed.push(randomElement(specialCharacters))
    }
    // write for loop to loop through promptchoice.length
    for (var i = 0; i < promptChoice.length; i++) {
        var possElement = randomElement(possibleChar);
        final.push(possElement);
    }
    for (var i = 0; i < guaranteed.length; i++) {
        final[i] = guaranteed[i];
    }
    return final.join("");
}



// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;
    console.log(writePassword);

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);