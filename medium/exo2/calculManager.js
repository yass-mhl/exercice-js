var calcul = {
  addition : function(n) {
    var total = 0;
    for (let i = 1; i <= n; i++) {
      total += i;
      console.log(`Step : ${i} : ${total}`);
    }
    console.log(`L'addition des ${n} premiers nombres est ${total}`);
  },

  multiplication : function(n) {
    var total = 1;
    for (let i = 1; i <= n; i++) {
      total *= i;
      console.log(`Step : ${i} : ${total}`);
    }
    console.log(`La multiplications des ${n} premiers nombres est ${total}`);
  }
};
module.exports = calcul;
