let selectedColor;
let cardColor = "blank";

let redBtn = document.getElementById("redButton");
let greenBtn = document.getElementById("greenButton");
let blueBtn = document.getElementById("blueButton");

let gridParent = document.getElementById("gridContainer");


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



function getNewColor(_cardColor, _selectedColor) {
    console.log(_cardColor);
    console.log(_selectedColor)
    if ((_cardColor === "blank" || _cardColor === "red") && _selectedColor === "red"){ // BLANK/RED + RED = RED
        return "red";
       
    }

    else if ((_cardColor === "blank" || _cardColor === "green") && _selectedColor === "green"){ // BLANK/GREEN + GREEN = GREEN
        return "green";
    }

    else if ((_cardColor === "blank" || _cardColor === "blue") && _selectedColor === "blue"){ // BLANK/BLUE + BLUE = BLUE
        return "blue";
    }

    else if ((_cardColor === "brown" || _cardColor === "purple" || _cardColor === "teal") && _selectedColor === "red" || _selectedColor === "green" || _selectedColor === "blue"){ // Sets to black if already brown, purple, or teal
        return "black";
    }

    else if (_cardColor === "red" && _selectedColor === "green"){
        return "brown";
    }

    else if (_cardColor === "red" && _selectedColor === "blue"){
        return "purple";
    }

    else if (_cardColor === "green" && _selectedColor === "blue"){
        return "teal";
    }


};

let result = getNewColor("blank", "blue");
console.log(result);


gridParent.addEventListener("click",function(e){
    if(e.target.matches('.gridBlocks')){
        e.target.style.backgroundColor = "Red";
    }
});

