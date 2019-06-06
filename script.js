let selectedColor;
let currentColor = "blank";

let redBtn = document.getElementById("redButton");
console.log(redBtn);
let greenBtn = document.getElementById("greenButton");
let blueBtn = document.getElementById("blueButton");

let gridParent = document.getElementById("gridContainer");


redBtn.addEventListener("click", function(){
    selectedColor = "red";
    console.log(selectedColor);
});

greenBtn.addEventListener("click", function(){
    selectedColor = "green";
    console.log(selectedColor);
});

blueBtn.addEventListener("click", function(){
    selectedColor = "blue";
    console.log(selectedColor);
});

gridParent.addEventListener("click",function(e){
    if(e.target.matches('.gridBlocks')){
        e.target.style.backgroundColor = "Red";
    }
});