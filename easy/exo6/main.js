var readline = require("readline-sync");

var saisie = parseInt(readline.question("Quel nombre voulez vous saisir ? "));
var end = false;

while (!end) {
  if (isNaN(saisie)) {
    console.log("Veuillez recommencer la saisie, vous devez choisir un nombre");
    saisie = parseInt(readline.question("Quel nombre voulez vous saisir ? "));
  }else{
    console.log("c'est un chiffre");
    end = true;
  }
}
