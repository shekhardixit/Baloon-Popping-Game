var baloon1 = document.getElementById('baloon1');
var baloon2 = document.getElementById('baloon2');
var baloon3 = document.getElementById('baloon3');
var baloon4 = document.getElementById('baloon4');
var baloon5 = document.getElementById('baloon5');
var baloon6 = document.getElementById('baloon6');
var baloon7 = document.getElementById('baloon7');
var baloon8 = document.getElementById('baloon8');
var baloon9 = document.getElementById('baloon9');
var baloon10 = document.getElementById('baloon10');
var baloon11 = document.getElementById('baloon11');
var baloon12 = document.getElementById('baloon12');
var baloon13 = document.getElementById('baloon13');
var baloon14 = document.getElementById('baloon14');
var baloon15 = document.getElementById('baloon15');
var baloon16 = document.getElementById('baloon16');
var baloon17 = document.getElementById('baloon17');
var baloon18 = document.getElementById('baloon18');
var baloon19 = document.getElementById('baloon19');
var baloon20 = document.getElementById('baloon20');
var baloon21 = document.getElementById('baloon21');
var baloon22 = document.getElementById('baloon22');
var baloon23 = document.getElementById('baloon23');
var baloon24 = document.getElementById('baloon24');
var yay = document.getElementById('no-balls');

function baloonPop(baloonVariable){
    baloonVariable.addEventListener("mouseover",popbaloon);

    function popbaloon(){
        if(baloonVariable.style.background=== "none"){
            baloonVariable.innerText = "";
        }
        else{
            baloonVariable.innerText = "POP!";
            baloonVariable.style.background = "none";
        }
    }
    baloonVariable.addEventListener("mouseout",popIsOver,false);

    function popIsOver(){
        baloonVariable.innerText = "";
    }
}