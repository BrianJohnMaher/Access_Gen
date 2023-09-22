var generateBtn = document.querySelector("#generate");

var lowercase = 'abcdefghijklmnopqrstuvwxyz';
var uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var numbers = '0123456789'
var symbols = ' !@"#$%&\'()*+,-./:;=<>?[\\]^_{}|~';

function generatePassword() {

  // TODO: ask the user for the length of the password
  var passwordLength = prompt('Password Length? Please enter a number of at least 8 characters and no more than 128 characters');

  // TODO: VALIDATE THAT THE USER SELECTED A NUMBER THAT IS NOT LESS THAN 8 AND NOT MORE THAN 128

  passwordLength = parseInt(passwordLength);

  if (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
    alert('Please enter a number of at least 8 characters and no more than 128 characters');
    return null;
  }

  var includeUpper = confirm('Would you like to include uppercase letters?  Enter Y or N');
  var includeLower = confirm('Would you like to include lowercase letters?  Enter Y or N');
  var includeNumbers = confirm('Would you like to include numbers?  Enter Y or N');
  var includeSymbols = confirm('Would you like to include special characters?  Enter Y or N');

  // TODO: validate at least one character type should be selected

  if (includeUpper === false && includeLower === false && includeNumbers === false && includeSymbols === false) {
    alert('At least one character typre should be selected.');
    return null;

  }

  var newPassword = "";
  var chars = '';

  if (includeLower) {
    chars += lowercase;
  }
  
  if (includeUpper) {
    chars += uppercase;
  }
  
  if (includeNumbers) {
    chars += numbers;
  }

  for (var x = 0; x < passwordLength; x++) {
    var randomNum = Math.floor(Math.random() * chars.length);
    newPassword += chars.substring(randomNum, randomNum + 1);
  }
  
  return newPassword;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
