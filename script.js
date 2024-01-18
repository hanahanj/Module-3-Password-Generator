

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


// Write password to the #password input
function writePassword(Array, length) {
var result = '';

passlength = window.prompt("How long do you want your password to be", "1 to 128 characters");
console.log("passlength = " + passlength);

lowercase = window.prompt("Do you want to use lowercase characters", "Yes or No?");
lowercase = lowercase.toLowerCase()
console.log("lowercase = " + lowercase);

uppercase = window.prompt("Do you want to use uppercase characters", "Yes or No?")
uppercase = uppercase.toLowerCase()
console.log("uppercase = " + uppercase);

numbers = window.prompt("Do you want to use numbers", "Yes or No?");
numbers = numbers.toLowerCase()
console.log("numbers = " + numbers);

special = window.prompt("Do you want to use special characters", "Yes or No?");
special = special.toLowerCase()
console.log("special characters = " + special);

var charArray = [];

// generate a string of all characters 
if (lowercase == 'yes'){
charArray = charArray.concat(lowArray);
} 

if (uppercase == 'yes'){
charArray = charArray.concat(highArray);
} 

if (numbers == 'yes'){
charArray = charArray.concat(numArray);
} 

if (special == 'yes'){
charArray = charArray.concat(specArray);
} 



console.log(charArray);


// chose characters from random locations in charArray and form a string

  for (let i = 0; i < passlength; i++) {
    var randomIndex = Math.floor(Math.random() * charArray.length);
    result += charArray[randomIndex];
    
  }

  console.log("password =" + result);


  document.getElementById("password").innerHTML = result;



}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
