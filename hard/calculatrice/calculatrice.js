const divResultat = document.querySelector("#resultat");
const divTouche = document.querySelector("#touches");
const divRecap = document.querySelector("#recap");

var chiffreSaisi = "";
var operateur = "+";
var recap = "";
var resultat = 0;

var nbCalcul = 0;
var reinit = true;

divTouche.addEventListener("click", function(event){
    var button = event.target.id;

    if(button.substring(0,1) === "c"){
       chiffreSaisi += button.substring(1,2);
       divResultat.value = chiffreSaisi;
    } else if(button.substring(0,1) === "b"){
        manageOperation();
        switch (button){
            case "bPlus" : operateur ="+";
            break;
            case "bMin" : operateur = "-";
            break;
            case "bDiv" : operateur = "/";
            break;
            case "bMul" : operateur = "*";
            break;
            default :
            break;
        }
        if(reinit){
            recap = "";
            reinit= false;
        }
        if(nbCalcul > 1) recap += "<br />";
        recap += resultat + " " + operateur + " ";
    } else if(button === "point") {
        chiffreSaisi += ".";
    } else if(button === "Egal"){
        manageOperation();
        recap += " = " + resultat;
        nbCalcul=1;
        reinit = true;
    }
    divRecap.innerHTML = recap;
    divRecap.scrollTop = divRecap.scrollHeight - divRecap.clientHeight;
});

function manageOperation(){
    if(chiffreSaisi !== ""){
        resultat = doOperation(operateur, resultat , parseFloat(chiffreSaisi));
        if(nbCalcul > 0){
            recap += parseFloat(chiffreSaisi);
        }
        divResultat.value = resultat;
        chiffreSaisi = "";
        nbCalcul ++;
    } else {
        var position = recap.lastIndexOf("<br />");
        recap = recap.substring(0,position);
    }

}

function doOperation(operateur, chiffreA , chiffreB){
    var res = 0;
    switch (operateur){
        case "+" : res = chiffreA + chiffreB;
        break;
        case "-" : res = chiffreA - chiffreB;
        break;
        case "*" : res = chiffreA * chiffreB;
        break;
        case "/" : res = chiffreA / chiffreB;
        break;
    }

    return res;
}
