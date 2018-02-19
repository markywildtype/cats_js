const addCat = function(name, food, image){

  const cat = document.createElement('ul');

  const catName = document.createElement('li');
  catName.innerText = "Salem";

  const favFood = document.createElement('li');
  favFood.innerText = "Lizard Flakes";

  const catImage = document.createElement('li');
  catImage.innerHTML = '<img src ="http://bit.ly/2FbWSex" width="500" />';

  const catSection = document.getElementById('cats')
  cat.appendChild(catName);
  cat.appendChild(favFood);
  cat.appendChild(catImage);
  catSection.appendChild(cat);

  console.log("I am loading!");
}

const app = function(){
  addCat()//"Salem", "Lizard Flakes", "https://www.n3rdabl3.com/wp-content/images/uploads/2018/02/salem3EDIT.jpg")
}

window.document.addEventListener("DOMContentLoaded", app);
