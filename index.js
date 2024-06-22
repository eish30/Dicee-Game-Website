var randomVariable1 = Math.floor(((Math.random()*6)+1));
var randomVariable2 = Math.floor(((Math.random()*6)+1));

var imagePath1 = "./images/dice"+randomVariable1+".png";
var imagePath2 = "./images/dice"+randomVariable2+".png";

document.querySelectorAll("img")[0].setAttribute("src", imagePath1);
document.querySelectorAll("img")[1].setAttribute("src", imagePath2);

if (randomVariable1===randomVariable2) {
    document.querySelector("h1").textContent ="Draw!";
}
else if (randomVariable1>randomVariable2) {
    document.querySelector("h1").textContent="Player 1 wins!";
}
else {
    document.querySelector("h1").textContent="Player 2 wins!";
}