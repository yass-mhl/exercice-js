var nbClick = 0;
const myDiv = document.querySelector("div");

function incrementer() {
  nbClick++;
  myDiv.innerHTML = `Vous avez cliqué ${nbClick} fois.`
  console.log(nbClick);
}
