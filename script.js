let selectedColor;
let currentColor = "blank";

let redBtn = document.getElementById("redButton");
let greenBtn = document.getElementById("greenButton");
let blueBtn = document.getElementById("blueButton");


redBtn.addEventListener("click", function(){
    selectedColor = "red";
    redBtn.style.borderColor = ("white");
    blueBtn.style.borderColor = ("black");
    greenBtn.style.borderColor = ("black");
    console.log(selectedColor);
});

greenBtn.addEventListener("click", function(){
    selectedColor = "green";
    redBtn.style.borderColor = ("black");
    blueBtn.style.borderColor = ("black");
    greenBtn.style.borderColor = ("white");
    console.log(selectedColor);
});

blueBtn.addEventListener("click", function(){
    selectedColor = "blue";
    redBtn.style.borderColor = ("black");
    blueBtn.style.borderColor = ("white");
    greenBtn.style.borderColor = ("black");
    console.log(selectedColor);
});


