var readline = require("readline-sync");

const P = 2;
var saisie = parseInt(readline.question("saisie voulue ? "));

parseInt(saisie, 10);

console.log(P + ' à la puissance + '+ saisie+ '= ' + Math.pow(P, saisie));
