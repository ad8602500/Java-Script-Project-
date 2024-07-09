let gameSeq = [];
let userSeq = [];
let btns = ["yellow","red","green","purple"];


let start = false;
let level =0;
let h2 = document.querySelector("h2");

document.addEventListener("keypress",function(){
      if(start==false){
        console.log("game started");
       start = true;
       levelup();

      }
})

function btnFlash(btn){
   btn.classList.add("flash");
   setTimeout(function(){
       btn.classList.remove("flash");
   },300);
}

function levelup(){
    userSeq = [];
    level++;
    h2.innerText = `Level ${level}`;

    let randInx = Math.floor(Math.random() *3) ;
    let randColor = btns[randInx];
    let randbtn = document.querySelector(`.${randColor}`)
    gameSeq.push(randColor);

    console.log(gameSeq);
    btnFlash(randbtn);

}
function checkAns(idx){
  
    if(userSeq[idx] === gameSeq[idx]){
        if(userSeq.length == gameSeq.length){
            setTimeout(levelup,1000);
            
        }
    }else{
        h2.innerHTML = `Game Over ! your score was <b> ${level} </br> <br>Press any key to start the game.;`
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout (function(){
            document.querySelector("body").style.backgroundColor = "white"  ;
        },250);
        reset();
    }
}



function btnPress(){
    let btn = this;
    btnFlash(btn);  
    userColor = btn.getAttribute("id") ;
    userSeq.push(userColor);
    checkAns(userSeq.length-1)
    
}

let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click",btnPress);
}

function reset(){
    start = false;
    gameSeq= [];
    userSeq = [];
    level =0;
}