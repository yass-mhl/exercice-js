var c1 = 123;
var c2 = 20;

function divisiblePar3(number) {
  if(number % 3 === 0){
    console.log('Le résultat de ' + c1 + ' / 3 = ' + c1/3 );
  }else{
    console.log('Le chiffre ' + c1 + " n'est pas divisible par 3");
  }
}

divisiblePar3(c1);
divisiblePar3(c2);
