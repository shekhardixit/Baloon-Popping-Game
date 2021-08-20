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
    baloonVariable.addEventListener("mouseover",popBaloon, true);

    function popBaloon(){
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
baloonPop(baloon1);
baloonPop(baloon2);
baloonPop(baloon3);
baloonPop(baloon4);
baloonPop(baloon5);
baloonPop(baloon6);
baloonPop(baloon7);
baloonPop(baloon8);
baloonPop(baloon9);
baloonPop(baloon10);
baloonPop(baloon11);
baloonPop(baloon12);
baloonPop(baloon13);
baloonPop(baloon14);
baloonPop(baloon15);
baloonPop(baloon16);
baloonPop(baloon17);
baloonPop(baloon18);
baloonPop(baloon19);
baloonPop(baloon20);
baloonPop(baloon21);
baloonPop(baloon22);
baloonPop(baloon23);
baloonPop(baloon24);

document.addEventListener("mouseover",noBaloons,false);
function noBaloons(){
    if(baloon1.style.background === "none" && baloon2.style.background === "none" && 
    baloon3.style.background === "none" && baloon4.style.background === "none" &&
    baloon5.style.background === "none" && baloon6.style.background === "none" &&
    baloon7.style.background === "none" && baloon8.style.background === "none" &&
    baloon9.style.background === "none" && baloon10.style.background === "none" &&
    baloon11.style.background === "none" && baloon12.style.background === "none" &&
    baloon13.style.background === "none" && baloon14.style.background === "none" &&
    baloon15.style.background === "none" && baloon16.style.background === "none" &&
    baloon17.style.background === "none" && baloon18.style.background === "none" &&
    baloon19.style.background === "none" && baloon20.style.background === "none" &&
    baloon21.style.background === "none" && baloon22.style.background === "none" &&
    baloon23.style.background === "none" && baloon24.style.background === "none"){
        yay.style.display = "block";
        window.scrollTo(0,0);
    }
}