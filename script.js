// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function randomLetter(){

  let alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

  let selector = Math.floor(Math.random() * 26);

  return alphabet[selector];

}

function randomNumber(){

  let number = Math.floor(Math.random() * 10);
  return number;

}

function randomSymbol(){

  let symbolArray = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "+", "=", "?"]


}