var classe = {
  marc : {
    nom : "Marc",
    age : 21,
    notes : [12,15,13,10,7]
  },
  eric : {
    nom : "Eric",
    age : 18,
    notes : [5,15,3,8,17]
  },
  marie : {
      nom : "Marie",
      age : 22,
      notes : [10,10,11,12,11]
  },
  afficherEleve : function(eleve){
    console.log("Nom : " + eleve.nom);
    console.log("Age : " + eleve.age);
    console.log("Notes : ");
    var noteTxt = "";
    for(var i =0 ; i < eleve.notes.length; i++){
        noteTxt += "num" + i + " - " + eleve.notes[i] + "\n";
    }
    console.log(noteTxt);
},
  calculerMoyenneEleve : function(eleve){
      var moyenne = 0;
      for(var i =0 ; i < eleve.notes.length; i++){
          moyenne += eleve.notes[i];
      }
      return moyenne / eleve.notes.length
  },
  afficherClasse : function(){
      this.afficherEleve(this.marc);
      this.afficherEleve(this.eric);
      this.afficherEleve(this.marie);
  },
  calculerMoyenneClasse : function(){
      var moyenneMarc = this.calculerMoyenneEleve(this.marc);
      var moyenneEric = this.calculerMoyenneEleve(this.eric);
      var moyenneMarie = this.calculerMoyenneEleve(this.marie);
      return (moyenneEric + moyenneMarc + moyenneMarie)/3;
  }
}

console.log("Voici vos élèves : ");
classe.afficherClasse();
console.log("Voici la moyenne de la classe : " + classe.calculerMoyenneClasse());
