var readline = require("readline-sync");

var lastName = readline.question('Quel est votre nom ? ');
var firstName = readline.question('Quel est votre prénom ? ');
var age = parseInt(readline.question('Quel est votre age ? '));

console.log('--------------------------------------');
console.log("-----------BIENVENUE------------------");
console.log("--------------------------------------");

console.log("Votre nom est " + lastName);
console.log("Votre prénom est " + firstName);
console.log("Vous avez " + age + " ans");
