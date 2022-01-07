var random = Math.floor(Math.random()*6)+1;

var rImage = "dice" + random+ ".png";

var imageSource = "images/" + rImage;

var image1= document.querySelectorAll("img")[0];

image1.setAttribute("src", imageSource);

var random2 = Math.floor(Math.random()*6)+1;
var rImage2 = "dice" + random2+ ".png";

var imageSource2 = "images/" + rImage2;

var image1= document.querySelectorAll("img")[1];

image1.setAttribute("src", imageSource2);

if(random>random2){
  document.querySelector("h1").innerHTML = "🚩Player 1 Wins!";
}else if(random2>random){
  document.querySelector("h1").innerHTML = "Player 2 Wins!🚩";
}else{
  document.querySelector("h1").innerHTML = "Draw!";
}
