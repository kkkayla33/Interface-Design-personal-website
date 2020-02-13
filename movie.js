/*                         movie                          */

function likeLala() { 
  //get the title of the movie
var lala = document.getElementById("lala");
localStorage.setItem("lala", lala.innerText);
  //alert
var getLala = localStorage.getItem("lala")
alert("You have successfully marked " + getLala + " as ❤️");
  //change text
var lalaCount = document.getElementById("likeLala");
lalaCount.text="❤️+1";

}
function likeBird() { 
var bird = document.getElementById("bird");
localStorage.setItem("bird", bird.innerText);
  
var getBird = localStorage.getItem("bird")
alert("You have successfully marked " + getBird + " as ❤️");
  
var birdCount = document.getElementById("likeBird");
birdCount.text="❤️+1";

}
function likeLove() { 
var love = document.getElementById("love");
localStorage.setItem("love", love.innerText);
  
var getLove = localStorage.getItem("love")
alert("You have successfully marked " + getLove+ " as ❤️");
  
var loveCount = document.getElementById("likeLove");
loveCount.text="❤️+1";

}
function likeMatrix() { 
var matrix = document.getElementById("matrix");
localStorage.setItem("matrix", matrix.innerText);
  
var getMatrix = localStorage.getItem("matrix")
alert("You have successfully marked " + getMatrix + " as ❤️");
  
var matrixCount = document.getElementById("likeMatrix");
matrixCount.text="❤️+1";

}
function likeHe() { 
var he = document.getElementById("he");
localStorage.setItem("he", he.innerText);
  
var getHe = localStorage.getItem("he")
alert("You have successfully marked " + getHe + " as ❤️");
  
var heCount = document.getElementById("likeHe");
heCount.text="❤️+1";

}
function likeMe() { 
var me = document.getElementById("me");
localStorage.setItem("me", me.innerText);
  
var getMe = localStorage.getItem("me")
alert("You have successfully marked " + getMe + " as ❤️");
  
var meCount = document.getElementById("likeMe");
meCount.text="❤️+1";

}

document.getElementById('likeLala').addEventListener('click', likeLala);
document.getElementById('likeBird').addEventListener('click', likeBird);
document.getElementById('likeLove').addEventListener('click', likeLove);
document.getElementById('likeMatrix').addEventListener('click', likeMatrix);
document.getElementById('likeHe').addEventListener('click', likeHe);
document.getElementById('likeMe').addEventListener('click', likeMe);




