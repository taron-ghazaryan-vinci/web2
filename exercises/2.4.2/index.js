const color = ["red","orange", "green","orange"];
const divRed = document.querySelector(".red");
const divOrange = document.querySelector(".orange");
const divGreen = document.querySelector(".green");
const body = document.querySelector("body");

var myIntervalId;
let indice = 0;
body.addEventListener("click", stopOrResumeClock);

function startColor (){
    myIntervalId = setInterval(changeColor, 1000);
}

function changeColor(){
    if(indice===0){
        divRed.style["background-color"]=color[indice];
        divOrange.style["background-color"]="white";
        divGreen.style["background-color"]="white";
        indice++;
        return;
    }
    if(indice===1){
        divRed.style["background-color"]="white";
        divOrange.style["background-color"]=color[indice];
        divGreen.style["background-color"]="white";
        indice++;
        return;
    }if(indice===2){
        divRed.style["background-color"]="white";
        divOrange.style["background-color"]="white";
        divGreen.style["background-color"]=color[indice];
        indice++;
        return;
    }
    if(indice===3){
        divRed.style["background-color"]="white";
        divOrange.style["background-color"]=color[indice];
        divGreen.style["background-color"]="white";
        indice=0;
        return;
    }

}


function stopOrResumeClock() {
    if (myIntervalId) {
      clearInterval(myIntervalId);
      myIntervalId = undefined;
    } else startColor();
  }