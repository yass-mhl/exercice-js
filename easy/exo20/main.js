var tab = [2, 6, 10, 3, 8, 7, 20];
var resultat = 0;

for (let i = 0; i < tab.length; i++) {
  if (tab[i] % 2 === 0){
    resultat += tab[i];
    console.log(`Itération : ${i} : ${resultat}`);
  }else{
    console.log(`Itération : ${i} : non paire`)
  }
}
console.log(`Le résultat est de ${resultat}`);
