var toto = {
  nom : "toto",
  age : 25,
  poids : 80,
  taille : 180,

  affichage : function() {
      var txt = "Nom : " + this.nom + "\n";
      txt += "Age : " + this.age + "\n";
      txt += "Poids : " + this.poids + "\n";
      txt += "Taille : " + this.taille + "\n";
      console.log(txt);
  },

  getForce : function() {
      return (this.poids * this.taille) / this.age;
  }
}

var marcel = {
  nom : "marcel",
  age : 32,
  poids : 100,
  taille : 175,

  affichage : function() {
      var txt = "Nom : " + this.nom + "\n";
      txt += "Age : " + this.age + "\n";
      txt += "Poids : " + this.poids + "\n";
      txt += "Taille : " + this.taille + "\n";
      console.log(txt);
  },

  getForce : function() {
      return (this.poids * this.taille) / this.age;
  }
}

if(marcel.getForce() > toto.getForce()){
  console.log("Marcel est plus fort que Toto ! voici ses informations : ");
  marcel.affichage();
  console.log(`Force : ${marcel.getForce()}`);
} else {
  console.log("Toto est plus fort que Marcel ! voici ses informations : ");
  toto.affichage();
  console.log(`Force : ${toto.getForce()}`);
}
