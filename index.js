//Link de imagen1

var randomNumber1 = Math.floor(Math.random()*6 ) + 1; // Esto es para obtener numeros random del 1 hasta el 6
var randomDiceImage = "dice" + randomNumber1 + ".png"; // Esto para que diga dice1, dice2, etc..
var randomSource = "images/" + randomDiceImage; // Se espera que el resultado final sea images/dice2.pmg
var image1 = document.querySelectorAll("img")[0];


image1.setAttribute("src", randomSource);

//Link de imagen2

var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var randomImageSource2 = "images/dice" + randomNumber2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);

//If statement to change the h1 setAttribute

if (randomNumber1 > randomNumber2){
  document.querySelector("h1").innerHTML = "Player 1 wins! 🚩";
}

else if (randomNumber1 < randomNumber2){
  document.querySelector("h1").innerHTML = "Player 2 is the winner!! 🚩🚩";
}

else{
  alert("This is a draw, try again!");
}
