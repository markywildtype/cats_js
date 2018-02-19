const addCat = function(name, food, image){

  const cat = document.createElement('ul');

  const catName = document.createElement('li');
  catName.innerText = name;

  const favFood = document.createElement('li');
  favFood.innerText = food;

  const catImage = document.createElement('li');
  catImage.innerHTML = '<img src ="' + image + '" width="500" />';

  const catSection = document.getElementById('cats')
  cat.appendChild(catName);
  cat.appendChild(favFood);
  cat.appendChild(catImage);
  catSection.appendChild(cat);

  console.log("I am loading!");
}

const app = function(){
  addCat("Boba", "Sock fluff", "http://bit.ly/2riTB4W");
  addCat("Barnaby", "Tuna", "http://bit.ly/2CwgpTW");
  addCat("Max", "Whiskas Temptations", "http://bit.ly/2qkvGoE");
  addCat("Salem", "Lizard Flakes", "http://bit.ly/2FbWSex");
}

window.document.addEventListener("DOMContentLoaded", app);
