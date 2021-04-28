var randomNumber1 = Math.floor((Math.random()*6)+1);
var randomNumber2 = Math.floor((Math.random()*6)+1);
var imageNew1 = "images/dice"+randomNumber1+".png";
var imageNew2 = "images/dice"+randomNumber2+".png";
document.querySelector(".img1").setAttribute("src",imageNew1);
document.querySelector(".img2").setAttribute("src",imageNew2);
var newText;
if(randomNumber1===randomNumber2){
  newText="Draw!";
}
else if(randomNumber1>randomNumber2){
  newText="🚩Player 1 Wins!";
}
else{
  newText="Player 2 Wins!🚩";
}
document.querySelector("h1").textContent=newText;
