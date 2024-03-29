var numSquares = 6; 
var colors = [] //generateRandomColors(numSquares);
var pickedColor; //= pickColor();
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

init();

function init(){
    setUpmodeButtons();
    setUpSquares();
    reset();
}

function setUpSquares(){
    for(var i = 0; i < squares.length; i++){
        // squares[i].style.backgroundColor = colors[i];// instead of stylebackground (compatible with all browser)
         squares[i].addEventListener("click", function(){
         var clickedColor = this.style.backgroundColor;
         console.log(clickedColor, pickedColor);
         if(clickedColor === pickedColor){
             messageDisplay.textContent = "Correct";
             resetButton.textContent = "Play Again?";
             changeColors(clickedColor);
             h1.style.backgroundColor = clickedColor;
         } else {
             this.style.backgroundColor = "#232323";
             messageDisplay.textContent = "Try Again"
         }
         });
     }
}
    
function setUpmodeButtons (){  //modeButtons eventlisteners
    for(var i = 0; i < modeButtons.length; i++){
        modeButtons[i].addEventListener("click", function(){
            modeButtons[0].classList.remove("selected");
            modeButtons[1].classList.remove("selected");
            this.classList.add("selected");
            // this.textContent === "Easy" ? numSquares = 3: numSquares = 6; Turnurary operator
            if(this.textContent === "Easy"){
                numSquares = 3;
            } else {
                numSquares = 6
            }
            reset();
        });
    }
}

function reset(){
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    resetButton.textContent = "New Colors";
    messageDisplay.textContent = "";
    for(var i = 0; i < squares.length; i++){
        if(colors[i]){
            squares[i].style.display = "block";
            squares[i].style.backgroundColor = colors[i];
        } else {
            squares[i].style.display = "none";
        }
    }
    h1.style.backgroundColor = "steelblue"; 
}

resetButton.addEventListener("click", function(){
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    this.textContent = "New Colors";
    messageDisplay.textContent = "";
    for(var i = 0; i < squares.length; i++){
    squares[i].style.backgroundColor = colors[i];
    }
    h1.style.backgroundColor = "steelblue"; 
}); //reset(); to replace everything

//colorDisplay.textContent = pickedColor;

function changeColors(color){
    for(var i = 0; i < squares.length; i++){
    squares[i].style.backgroundColor = color; 
    }
}

function pickColor(){
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRandomColors(num){
    var arr = [];
    for(var i = 0; i < num; i++){
    arr.push(randomColor());
    }
    return arr;
}

function randomColor(){
    var r = Math.floor(Math.random() * 256);

    var g = Math.floor(Math.random() * 256);

    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}