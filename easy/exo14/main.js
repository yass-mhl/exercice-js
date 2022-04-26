const myDiv = document.querySelector("div");
var result = [];
function multiplicationTable() {
  var txt = "";
  for (let i = 0; i < 11; i++) {
    txt += `3 * ${i} = ${3*i} </br>`;
    myDiv.innerHTML = txt
  }
}
