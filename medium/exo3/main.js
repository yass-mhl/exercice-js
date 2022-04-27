var chien1 = creerAnimal("Mina",2,false);
var chien2 = creerAnimal("Pam",15,false);
var chien3 = creerAnimal("Hocket",7,true);
var chat1 = creerAnimal("Tya",7,false);
var chat2 = creerAnimal("Milo",5,true);
var chat3 = creerAnimal("Felicia",5,false);
var chat4 = creerAnimal("Lili",1,false);

var chats = [chat1, chat2, chat3, chat4];
var chiens = [chien1, chien2, chat3];

afficherListeAnimal(chiens);
console.log(`La moyenne d'age des ${chiens.length} chiens est de : ${calculerMoyenneAge(chiens)} ans`);
console.log("--------------------------------------");
afficherListeAnimal(chats);
console.log(`La moyenne d'age des ${chats.length} chats est de : ${calculerMoyenneAge(chats)} ans`);
console.log("--------------------------------------");

function creerAnimal(nom, age, sexe) {
  var animal = {};
  animal.nom = nom;
  animal.age = age;
  animal.sexe = sexe;
  return animal;
}

function afficherListeAnimal(list) {
  var txt = "";
  for (let i = 0; i < list.length; i++) {
    txt += `Nom : ${list[i].nom} \n`;
    txt += `Age : ${list[i].age} \n`;
    if (list[i].sexe){
      txt += `Sexe : Mâle \n`;
    }else{
      txt += `Sexe : Femelle \n`;
    }
  }
  console.log(txt);
}

function calculerMoyenneAge(liste) {
  var moyenne = 0;
  for (let i = 0; i < liste.length; i++) {
    moyenne += liste[i].age
  }
  return moyenne/liste.length
}
