 //alert("Connected!");
 var colors = generateRandomColor(6);


var pickedColor = pickColor();
var squares = document.getElementsByClassName("square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.getElementById("message");
var h1 = document.getElementsByTagName("h1")[0];
//var top = document.getElementById("top");
var resetButton = document.getElementById("reset");
var easybtn = document.getElementById("easybtn");
var hardbtn = document.getElementById("hardbtn");

easybtn.addEventListener("click",function(){
	easybtn.classList.add("selected");
	hardbtn.classList.remove("selected");
	colors = generateRandomColor(3);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	messageDisplay.textContent = "";
    for(var i=0;i<squares.length;i++){
    	if(colors[i]){
    		squares[i].style.backgroundColor = colors[i];
    	}
    	else
    		squares[i].style.display = "none";
    }
});

hardbtn.addEventListener("click",function(){
	hardbtn.classList.add("selected");
	easybtn.classList.remove("selected");
	colors = generateRandomColor(6);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	messageDisplay.textContent = "";
	    for(var i=0;i<squares.length;i++){
    		squares[i].style.backgroundColor = colors[i];
    		squares[i].style.display = "block";
    }
});

resetButton.addEventListener("click",function(){
	colors = generateRandomColor(6);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for(var i=0 ; i < squares.length;i++){
		squares[i].style.background = colors[i];
		h1.style.backgroundColor = "steelblue";
		messageDisplay.textContent = "";

	}
})

colorDisplay.textContent = pickedColor;

for(var i=0 ; i<squares.length ; i++ ){
	squares[i].style.backgroundColor = colors[i];
	squares[i].addEventListener("click",function(){
    var clickedColor = this.style.backgroundColor;
    if(clickedColor === pickedColor){
    	messageDisplay.textContent = "Correct";
    	resetButton.textContent = "Play Again" ;
        changeColor(clickedColor);
    	h1.style.backgroundColor = clickedColor ;
    }
    else{
    	this.style.background = "black";
    	messageDisplay.textContent = "Try Again!";
    	resetButton.textContent = "New Colors";
    }
	});
}


function changeColor(color){
	for(var i=0; i< squares.length ;i++)
		squares[i].style.backgroundColor = color;

}

function pickColor(){
	var random = Math.floor(Math.random()*colors.length);
	return (colors[random]);
}

function generateRandomColor(num){
	var arr = [];
	for(var i=0;i<num;i++){
      arr.push(randomColor());
	}
	return(arr);

}

function randomColor(){
	var r = Math.floor(Math.random() * 256 );
	var g = Math.floor(Math.random() * 256 );
	var b = Math.floor(Math.random() * 256 );
   return "rgb("+r+", "+g+", "+b+")";
}