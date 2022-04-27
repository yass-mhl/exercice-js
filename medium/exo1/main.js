var readline = require("readline-sync");
var tab = [3, 5, 10, 12];
var end = false;
var txt = "1/ ajouter un chiffre \n2/afficher le tableau \n0/ quitter";

do {
  console.log(tab);
  console.log(txt);
  var saisie = parseInt(readline.question("Quel est votre choix : "));
  choice(saisie);
  if(saisie === 0) { end = true }
} while (!end);


function choice(n) {
  if(n === 1){
    var number = parseInt(readline.question("Quel chiffre voulez vous ajouter : "));
    tab.push(number);
    tab.sort(function(a, b){return a - b});
  }else if(n === 2){
    console.log(tab);
  }
}
