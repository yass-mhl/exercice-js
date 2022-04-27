var readline = require("readline-sync");
var end = false;

do {
  var number = parseInt(readline.question("Saisir le chiffre 3 : "));
  if (number === 3) {
    console.log("Bravo ! Vous avez saisi le chiffre 3 !")
    end = true
  }else{
    console.log("Vous n'avez pas saisi le bon chiffre...")
  }
} while (!end);
