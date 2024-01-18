

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Set lowercase Array
let low = 'abcdefghijklmnopqrstuvwxyz';
let lowArray = low.split("");

console.log("lowArray =" + lowArray);

// Set uppercase Array
let high = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
let highArray = high.split("");

console.log("highArray =" + highArray);

// Set number Array
let num = '0123456789';
let numArray = num.split("");

console.log("numArray =" + numArray);

// Set number Array
let spec = ' !#$%&()*+,-.:;<>?@[]/^_{}~';
let specArray = spec.split("");

console.log("specArray =" + specArray);

// On load use prompts to generate password components 

passlength = window.prompt("How long do you want your password to be", "1 to 128 characters");
console.log("passlength = " + passlength);
lowercase = window.prompt("Do you want to use lowercase characters", "Yes or No?");
console.log("lowercase = " + lowercase);
uppercase = window.prompt("Do you want to use uppercase characters", "Yes or No?")
console.log("uppercase = " + uppercase);
numbers = window.prompt("Do you want to use numbers", "Yes or No?");
console.log("numbers = " + numbers);
special = window.prompt("Do you want to use special characters", "Yes or No?");
console.log("special characters = " + special);

// generate a string of all characters 
if (lowercase && uppercase && numbers && special == 'yes'){
var charArray = lowArray.concat(highArray, numArray, specArray);
}

console.log(charArray);

var randomPass = writePassword(charArray, passlength);
  console.log('Randomly generated Password:', randomPass);

// Write password to the #password input
function writePassword(Array, length) {
var result = '';

// chose characters from random locations in charArray and form a string

  for (let i = 0; i < passlength; i++) {
    var randomIndex = Math.floor(Math.random() * charArray.length);
    result += charArray[randomIndex];
    
  }

  console.log("password =" + result);

// generates passwords but generating too many, need to generate 1
  

  // var password = result;
  // console.log(password);
  // var passwordText = document.querySelector("#password");

  // passwordText.value = result;
  document.getElementById("password").innerHTML = result;

  // return result;

}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
