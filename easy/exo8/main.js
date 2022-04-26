var readline = require("readline-sync");

function wordGreaterThan8Chars(word){
  if(word.length > 8){
    console.log("Le mot contient plus de 8 caractères");
  }else{
    console.log("Le mot contient "+ word.length + " caractères");
  }
}

var saisie = readline.question("Entrer votre mot : ");

wordGreaterThan8Chars(saisie);
