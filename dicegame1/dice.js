var randomDiceNumber1 = Math.floor(Math.random() * 6)+1;
var randomDiceImages = "dice" + randomDiceNumber1 + ".png";
var randomImagesSource = "images/" + randomDiceImages ;

var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src",randomImagesSource);


  var randomDiceNumber2   = Math.floor(Math.random() * 6)+1;
var randomImageSource2 = "images/dice"+ randomDiceNumber2 +".png";

var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src",randomImageSource2);

if(randomDiceNumber1 > randomDiceNumber2) {
    document.querySelector("h1").innerHTML = "playear 1 win! &#127937";
}
else if(randomDiceNumber2 > randomDiceNumber1) {
    document.querySelector("h1").innerHTML = "playear 2 win! &#127937";
}
else {
    document.querySelector("h1").innerHTML = "draw";
}