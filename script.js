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

function randomLetter() {

  let alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

  let selector = Math.floor(Math.random() * 26);

  return alphabet[selector];

}

function randomNumber() {

  let number = Math.floor(Math.random() * 10);
  return number;

}

function randomSymbol() {

  let symbolArray = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "+", "=", "?"]

  let selector = Math.floor(Math.random() * 13);

  return symbolArray[selector];

}

function generatePassword() {


  let checkboxes = document.querySelectorAll("input[type=checkbox]:checked");
  let checkboxNameArray = [];
  // Create new array to effectively convert checkboxes checked into strings from their names instead of the full object
  for (let i = 0; i < checkboxes.length; i++) {
    checkboxNameArray[i] = checkboxes[i].name;
  }
  let passwordLength = document.getElementById("passwordLength").value;
  // Stopping the page from refreshing upon form submission so values from form can be used
  event.preventDefault();
  let index = 0;
  let password = "";
  // Iterating through each random character generator and appending to password
  while (index < passwordLength) {
    if (checkboxNameArray.includes("uppercase") && index < passwordLength) {
      password = password + randomLetter().toUpperCase();
      index++;
    }
    if (checkboxNameArray.includes("lowercase") && index < passwordLength) {
      password = password + randomLetter().toLowerCase();
      index++;
    }
    if (checkboxNameArray.includes("numbers") && index < passwordLength) {
      password = password + randomNumber();
      index++;
    }
    if (checkboxNameArray.includes("symbols") && index < passwordLength) {
      password = password + randomSymbol();
      index++;
    }
  }
  // Randomizing password further so there is no pattern i.e. "lowercase, number, symbol, lowercase, number symbol..."
  // Splits string characters into individual array items and concatenates them back together into string
  let passwordArray = password.split("");
  password = "";
  for (let i = 0; i < passwordLength; i++) {
  // Assigns current random index to variable taking into account that next passthrough will have incrementally smaller array size
  // to make sure that randomization doesn't repeat previously used character
    let randomIndex = Math.floor(Math.random() * (passwordLength - i));
    password = password + passwordArray[randomIndex];
    passwordArray.splice(randomIndex, 1);
  }
  return password;
}

