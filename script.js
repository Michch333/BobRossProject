let selectedColor;
let cardColor = "blank";

let redBtn = document.getElementById("redButton");
let greenBtn = document.getElementById("greenButton");
let blueBtn = document.getElementById("blueButton");

let gridParent = document.getElementById("gridContainer");


redBtn.addEventListener("click", function(){
    selectedColor = "red";
    redBtn.style.borderColor = ("white");
    redBtn.style.backgroundImage = ('url("bross.jpg")');
    redBtn.style.backgroundSize = "contain";
    blueBtn.style.borderColor = ("black");
    blueBtn.style.backgroundImage = "none";
    greenBtn.style.borderColor = ("black");
    greenBtn.style.backgroundImage = "none";
});

greenBtn.addEventListener("click", function(){
    selectedColor = "green";
    redBtn.style.borderColor = ("black");
    redBtn.style.backgroundImage = "none";
    blueBtn.style.borderColor = ("black");
    blueBtn.style.backgroundImage = "none";
    greenBtn.style.borderColor = ("white");
    greenBtn.style.backgroundImage = ('url("bross.jpg")');
    greenBtn.style.backgroundSize = "contain";
});

blueBtn.addEventListener("click", function(){
    selectedColor = "blue";
    redBtn.style.borderColor = ("black");
    redBtn.style.backgroundImage = "none";
    blueBtn.style.borderColor = ("white");
    blueBtn.style.backgroundImage =  ('url("bross.jpg")');
    blueBtn.style.backgroundSize = "contain";
    greenBtn.style.borderColor = ("black");
    greenBtn.style.backgroundImage = "none";
});

let currentCardColor = {
    "a1": "blank",
    "a2": "blank",
    "a3": "blank",
    "b1": "blank",
    "b2": "blank",
    "b3": "blank",
    "c1": "blank",
    "c2": "blank",
    "c3": "blank"
};



function getNewColor(_cardColor, _selectedColor) {
    if ((_cardColor === "blank" || _cardColor === "red") && _selectedColor === "red"){ // BLANK/RED + RED = RED
        return "red";
       
    };

    if ((_cardColor === "blank" || _cardColor === "green") && _selectedColor === "green"){ // BLANK/GREEN + GREEN = GREEN
        return "green";
    };

    if ((_cardColor === "blank" || _cardColor === "blue") && _selectedColor === "blue"){ // BLANK/BLUE + BLUE = BLUE
        return "blue";
    };

    if ((_cardColor === "brown" || _cardColor === "purple" || _cardColor === "teal") && (_selectedColor === "red" || _selectedColor === "green" || _selectedColor === "blue")){ // Sets to black if already brown, purple, or teal
        return "black";
    };

    if (_cardColor === "red" && _selectedColor === "green"){
        return "brown";
    };

    if (_cardColor === "red" && _selectedColor === "blue"){
        return "purple";
    };

    if (_cardColor === "green" && _selectedColor === "blue"){
        return "teal";
    };

    if (_cardColor === "green" && _selectedColor === "red"){
        return "brown";
    };

    if (_cardColor === "blue" && _selectedColor === "red"){
        return "purple";
    };

    if (_cardColor === "blue" && _selectedColor === "green"){
        return "teal";
    };


};




gridParent.addEventListener("click",function(e){
    if(e.target.matches('.gridBlocks')){
        let key = e.target.classList[1];
        let cardColor = currentCardColor[key];
        let gridColor = getNewColor(cardColor, selectedColor);
        e.target.style.backgroundColor = gridColor;
        currentCardColor[key] = gridColor;
    }
});

