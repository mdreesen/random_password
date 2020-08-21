// creating arrays for each password use case
var lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', ];
var upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
var specialCharacters = ['!', '@', '#', '$', '%', '^', '&', '*', '.', ',', '?', '√', '©', '∆', '˚', 'π', '®'];

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;
    console.log(writePassword);

}

function generatePassword() {
    var choose = prompt("Please choose LowerCase (L), UpperCase (U), Numbers (N), or Symbols (S)")
    console.log(lowerCase);
    if (choose === "L" || "l") {
        for (var i = 0; i < lowerCase.length; i++) {
            writePassword();
        }
    }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);