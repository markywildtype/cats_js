const catArray = [
  {name: "Boba", food: "Sock Fluff", image: "http://bit.ly/2riTB4W"},
  {name: "Barnaby", food: "Tuna", image: "http://bit.ly/2CwgpTW"},
  {name: "Max", food: "Whiskas Temptations", image: "http://bit.ly/2qkvGoE"},
  {name: "Salem", food: "Lizard Flakes", image: "http://bit.ly/2FbWSex"}
]


const addCat = function(params){
  const cat = document.createElement('ul');
  cat.style.listStyleType = "none";

  const catName = document.createElement('li');
  catName.innerText = params.name;

  const favFood = document.createElement('li');
  favFood.innerText = params.food;

  const catImage = document.createElement('li');
  catImage.innerHTML = '<img src ="' + params.image + '" width="500" />';

  const catSection = document.getElementById('cats')
  cat.appendChild(catName);
  cat.appendChild(favFood);
  cat.appendChild(catImage);
  catSection.appendChild(cat);
}


const app = function(){
  for (var i = 0; i < catArray.length; i++) {
    addCat(catArray[i])
  }
}

window.document.addEventListener("DOMContentLoaded", app);
