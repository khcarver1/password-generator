var arr = [];
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  '~'
];


function generatePassword() {

  var generatedPassword = "";
  //How many chars
  var passwordLength = window.prompt("length");
  if (passwordLength < 8 || passwordLength > 128) {
    alert("Password must be between 8 and 128 characters");
    return;
  }
  var includeUpperCase = window.confirm("Would you like it to include uppercase letters?");
  if (includeUpperCase) {
    arr = arr.concat(upperCasedCharacters);
  }
  var includeLowerCase = window.confirm("Would you like it to include lower case letters?");
  if (includeLowerCase) {
    arr = arr.concat(lowerCasedCharacters);
  }
  var includeNumbers = window.confirm("Would you like it to include numbers?");
  if (includeNumbers) {
    arr = arr.concat(numericCharacters);
  }
  var includeSymbols = window.confirm("Would you like it to include symbols?");
  if (includeSymbols) {
    arr = arr.concat(specialCharacters);
  }
  if (!includeUpperCase && !includeLowerCase && !includeNumbers && !includeSymbols) {
    alert("You must select at least one character type");
    return generatePassword();
  }
  for (var i = 0; i < passwordLength; i++) {
    generatedPassword += arr[Math.floor(Math.random() * arr.length)];
  }
  return generatedPassword;
}
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);