var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
body.onload = setGradient();

var button = document.createElement("button");
button.appendChild(document.createTextNode("randomize"));
button.style.background="yellow";
body.appendChild(button);

function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";";
};

function pickRandomColours(){
	color1.value=setRandomRGB();
	color2.value=setRandomRGB();
	setGradient();
};

function getRandomNumber() {
	// 0 to 255
	var randomNumber =  Math.floor(Math.random() * 256); 
 
	// convert decimal to hex
	var hex = randomNumber.toString(16); 
	
	// pad hex value 0-f with leading zero
	if (hex.length === 1) {
		hex = "0" + hex;
	}
	
	return (hex);
}

function setRandomRGB(){
    var number1 = getRandomNumber();
	var number2 = getRandomNumber();
	var number3 = getRandomNumber();
	var rgb="#"+number1+number2+number3;
	return rgb;
}


color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

button.addEventListener("click", pickRandomColours);