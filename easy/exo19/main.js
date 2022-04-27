var readline = require("readline-sync");
var saisie = readline.question("Factorielle de : ");
var resultat = 1;

for (let i = 1; i <= saisie; i++) {
  resultat *= i;
  console.log(`Etape ${i} : ${resultat} `);
}
console.log(`Le résultat factorielle de ${saisie} est ${resultat}`);
