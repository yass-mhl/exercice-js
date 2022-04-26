var readline = require("readline-sync");
var personnage = {};

// var nom_perso = readline.question("Quel est le nom ? ");
personnage.nom = readline.question("Quel est le nom ? ");
personnage.age = parseInt(readline.question("Quel est l'age ? "));
personnage.carac = {}
personnage.carac.force = 12;

console.log(personnage);
