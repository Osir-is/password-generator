// Assignment Code
var generateBtn = document.querySelector("#generate");
var passwordCriteria = {};
var alphabetLowerCase = 'abcdefghijklmnopqrstuvwxyz'
var alphabetUpperCase = alphabetLowerCase.toUpperCase()
var numeric = '12345678902345678901234567'
var special = '!£$%^&*@?.,!£$%^&*@?.,!£$%^&*@?.,'



function passwordLength (){
  var userPasswordLength = prompt("How long would you like the password?")
    console.log(userPasswordLength)
    console.log(!Number.isNaN(userPasswordLength))
    var userPasswordLengthParsed = parseInt(userPasswordLength);
  if(!Number.isNaN(userPasswordLengthParsed)){
    if(userPasswordLengthParsed >= 8 && userPasswordLengthParsed <= 128 ){
      passwordCriteria.passwordLength = userPasswordLengthParsed
      console.log(passwordCriteria)
    };
  };
}
function checkLowercase(){
   var isLowerCase = confirm("Is it lower case")
   passwordCriteria.isLowerCase = isLowerCase
}
function checkUpperCase(){
  var isUpperCase = confirm("Is it upper case")
  passwordCriteria.isUpperCase = isUpperCase
}
function checkNumeric(){
  var isNumeric = confirm("Is it numeric")
  passwordCriteria.isNumeric = isNumeric
}
function checkSpecial(){
  var isSpecial = confirm("Is it special")
  passwordCriteria.isSpecial = isSpecial
}

function generatePasswordCriteria (){
  passwordLength();
  checkLowercase();
  checkUpperCase();
  checkNumeric();
  checkSpecial();
  console.log(passwordCriteria);
}

function generatePassword (){
  var length = passwordCriteria.passwordLength;
  var charset = "";
  if (passwordCriteria.isLowerCase){
    charset += alphabetLowerCase
  }
  if (passwordCriteria.isUpperCase){
    charset += alphabetUpperCase
  }
  if (passwordCriteria.isNumeric){
    charset += numeric
  }
  if (passwordCriteria.isSpecial){
    charset += special
  }
  
  var retVal = "";
for (var i = 0, n = charset.length; i < length; ++i) {
  retVal += charset.charAt(Math.floor(Math.random() * n));
}
return retVal;
}

// Write password to the #password input
function writePassword() {
  generatePasswordCriteria();
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
