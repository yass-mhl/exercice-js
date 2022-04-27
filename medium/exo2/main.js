var readline = require("readline-sync");
var calcul = require("./calculManager");


function menu() {
  var txt = "";
  txt += "1 : Addition des n premiers nombres \n";
  txt += "2 : Multiplication des n premiers nombres \n";
  txt += "3 : Quitter";
  console.log(txt);
}

do {
  menu();
  var saisie = parseInt(readline.question("Quel est votre choix ? "));
  if(saisie === 1){
    var nombre = parseInt(readline.question("Combien de nombre ? "));
    calcul.addition(nombre);
  }else if(saisie === 2){
    var nombre = parseInt(readline.question("Combien de nombre ? "));
    calcul.multiplication(nombre);
  }else if(saisie === 3) {
    console.log("Au revoir !");
  }
} while (saisie !== 3);
