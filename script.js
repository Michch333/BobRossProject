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


gridParent.addEventListener("click", function(e){
   if(e.target.matches('.a1')){
        e.target.style.backgroundColor = "Red";
   }
   if(e.target.matches('.a2')){
       e.target.style.backgroundColor = "Blue";
   }
   if(e.target.matches('.a3')){
       e.target.style.backgroundColor = "light blue";
   }
   if(e.target.matches('.b1')){
       e.target.style.backgroundColor = "light blue";
   }
   if(e.target.matches('.b2')){
       e.target.style.backgroundColor = "light blue";
   }
   if(e.target.matches('.b3')){
       e.target.style.backgroundColor = "light blue";
   }
   if(e.target.matches('.c1')){
       e.target.style.backgroundColor = "light blue";
   }
   if(e.target.matches('.c2')){
       e.target.style.backgroundColor = "light blue";
   }
   if(e.target.matches('.c3')){
       e.target.style.backgroundColor = "light blue";
   }


});