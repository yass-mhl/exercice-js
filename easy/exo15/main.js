myButton = document.querySelector("button");
myDiv = document.querySelector("div");

myButton.addEventListener("click", function() {
  myDiv.innerHTML = pileFace();
});

function pileFace() {

  if(Math.floor(Math.random() * 2) == 0){
    return 'Pile';
  }else{
    return 'Face';
  }
}
