const pseudo = document.querySelector("#pseudo");
const number = document.querySelector("#chiffre");
const btnAddition = document.querySelector("#addition");
const btnFactorielle = document.querySelector("#factorielle");
const resultat = document.querySelector("#resultat");

function afficherResultat(calcul){
    resultat.innerHTML = "<h1>Bonjour " + pseudo.value + "</h1>";
    resultat.innerHTML = "<div>Le résultat du calcul demandé est : " + calcul + "</div>";
}


btnAddition.addEventListener("click", function() {
  var calculResultat = calculManager.addition(parseInt(number.value));
    afficherResultat(calculResultat);
});

btnFactorielle.addEventListener("click", function() {
  var calculResultat = calculManager.factorielle(parseInt(number.value));
    afficherResultat(calculResultat);
});
