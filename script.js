var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var color3 = document.querySelector(".color3");
var body = document.getElementById("gradient");
var randomButton = document.querySelector("button");
var changeButtonColor = document.querySelector("button");



//The colour inputs match the background generated on the first page load. 
var colorOne = color1.value;
var colorTwo = color2.value;
var colorThree = color3.value;
body.style.background = "linear-gradient(to right, " + colorOne + ", " + colorTwo + ", "+ colorThree + ")";

//Display the initial CSS linear gradient property on page load.
css.textContent = body.style.background + ";";

//Background generator function - so the generator actually works.
function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " + color1.value + ", " + color2.value + ", " + color3.value + ")";
//Display the CSS linear gradient input property on the page. 
	css.textContent = body.style.background + ";"; 
}

//1st input.
color1.addEventListener("input", setGradient);

//2nd input.
color2.addEventListener("input", setGradient);

//3rd input.
color3.addEventListener("input", setGradient);

//Generate random background with button onclick with a function.
randomButton.addEventListener("click", randomBackground);

//Change color of the button onclick with a function.
changeButtonColor.addEventListener("click", randomBackground);

//This function takes the newly generated random variable from the "randomNumbers" function and uses it for the color input values. 
function randomBackground() {
  color1.value = randomNumbers();
  color2.value = randomNumbers();
  color3.value = randomNumbers();
  //Randomly change the color of the button onclick.
  changeButtonColor.style.background = randomNumbers();
  //Set the new random gradient with function! Otherwise the gradient won't show.
  setGradient();
}

//This function generates a random number and returns it in a new variable.
function randomNumbers(){
 let newColor = Math.random().toString(16);
  newColor = "#" + newColor.slice(2, 8);
  return newColor;
}