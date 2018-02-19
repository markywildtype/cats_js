// const addCat = function(name, food, image){
const addCat = function(params){

  const cat = document.createElement('ul');

  const catName = document.createElement('li');
  // catName.innerText = name;
  catName.innerText = params.name;

  const favFood = document.createElement('li');
  // favFood.innerText = food;
  favFood.innerText = params.food;

  const catImage = document.createElement('li');
  // catImage.innerHTML = '<img src ="' + image + '" width="500" />';
  catImage.innerHTML = '<img src ="' + params.image + '" width="500" />';

  const catSection = document.getElementById('cats')
  cat.appendChild(catName);
  cat.appendChild(favFood);
  cat.appendChild(catImage);
  catSection.appendChild(cat);

  console.log("I am loading!");
}

const catArray = [
  {name: "Boba", food: "Sock Fluff", image: "http://bit.ly/2riTB4W"},
  {name: "Barnaby", food: "Tuna", image: "http://bit.ly/2CwgpTW"},
  {name: "Max", food: "Whiskas Temptations", image: "http://bit.ly/2CwgpTW"},
  {name: "Salem", food: "Lizard Flakes", image: "http://bit.ly/2FbWSex"}
]

const app = function(){
  for (var i = 0; i < catArray.length; i++) {
    addCat(catArray[i])
  }
  // addCat("Boba", "Sock fluff", "http://bit.ly/2riTB4W");
  // addCat("Barnaby", "Tuna", "http://bit.ly/2CwgpTW");
  // addCat("Max", "Whiskas Temptations", "http://bit.ly/2CwgpTW");
  // addCat("Salem", "Lizard Flakes", "http://bit.ly/2FbWSex");
}

window.document.addEventListener("DOMContentLoaded", app);
