const characterAmountRange = document.getElementById('characterAmountRange')
const characterAmountNumber = document.getElementById('characterAmountNumber')
const includeUppercaseElement = document.getElementById('includeUppercase')
const includeNumbersElement = document.getElementById('includeNumbers')
const includeSymbolsElement = document.getElementById('includeSymbols')
const form = document.getElementById('passwordGeneratorForm')
const passwordDisplay = document.getElementById('passwordDisplay')

const lowToHigh = arrayFromLowToHigh(8, 128)

// This is the lowercase, uppercase, and symbol characters
var lowercase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', ];

var uppercase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

var numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']

var symbols = ['!', '@', '#', '$', '%', '^', '&', '*', '.', ',', '?', '√', '©', '∆', '˚', 'π', '®'];



// This syncs up the number input and slider
characterAmountNumber.addEventListener('input', syncCharacterAmount)
characterAmountRange.addEventListener('input', syncCharacterAmount)

function syncCharacterAmount(e) {
    const value = e.target.value
    characterAmountNumber.value = value
    characterAmountRange.value = value
}

form.addEventListener('submit', e => {
    e.preventDefault()
    const characterAmount = characterAmountNumber.value
    const includeUppercase = includeUppercaseElement.checked
    const includeNumbers = includeNumbersElement.checked
    const includeSymbols = includeSymbolsElement.checked
    const password = generatePassword(characterAmount, includeUppercase, includeNumbers, includeSymbols)
    passwordDisplay.innerText = password
})

function generatePassword(characterAmount, includeUppercase, includeNumbers, includeSymbols) {
    let characters = lowercase
    if (includeUppercase) characters = characters.concat(uppercase)
    if (includeNumbers) characters = characters.concat(numbers)
    if (includeSymbols) characters = characters.concat(symbols)

    const passwordCharacters = []
    for (let i = 0; i < characterAmount; i++) {
        const characterCode = characters[Math.floor(Math.random() * characters.length)]
        passwordCharacters.push(characterCode)
    }
    return passwordCharacters.join('')
}

function arrayFromLowToHigh(low, high) {
    const array = []
    for (var i = low; i <= high; i++) {
        array.push(i)
    }
    return array
}