// Assignment Code

var generateBtn = document.querySelector("#generate");
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
var specialChar = [
  "~",
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "-",
  "+",
  "=",
  ":",
  ";",
  "<",
  ">",
  ".",
  "?",
];
var letters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];

function generatePassword() {
  //Beginning
  var workingArray = [];
  var password = [];
  var questionNumbChar = prompt(
    "How many characters do you want? It has to be between 8-128"
  );
  if (8 <= questionNumbChar && questionNumbChar <= 128) {
    var questionUpper = confirm("Would you like to use uppercase letters?");
    var questionLower = confirm("Would you like to use lowercase letters?");
    var questionSpecChar = confirm("Would you like to use special characters?");
    var questionNumbers = confirm("Would you like to use numbers?");
    //Checking for inclusions
    if (questionUpper === true) {
      var lettersUpper = letters.map(function (x) {
        return x.toUpperCase();
      });
      workingArray.push(...lettersUpper);
    }
    if (questionLower === true) {
      workingArray.push(...letters);
    }
    if (questionSpecChar === true) {
      workingArray.push(...specialChar);
    }
    if (questionNumbers === true) {
      workingArray.push(...numbers);
    }
    for (i = 0; i < questionNumbChar; i++) {
      var x = Math.floor(Math.random() * workingArray.length + 1);
      password.push(workingArray[x]);
    }
    return password.join("");
  } else if (8 > questionNumbChar || 128 < questionNumbChar);
  {
    return (password = ["N/A"]);
  }
}
