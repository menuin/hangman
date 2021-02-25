const words=document.querySelectorAll(".word span");
const input=document.querySelector(".answerInput");
const label=document.querySelector(".answerLabel");
var revealed=0;

const currentImg=document.querySelector(".hangmanImg");
const img1=document.querySelector(".img1");
const img2=document.querySelector(".img2");
const img3=document.querySelector(".img3");
const img4=document.querySelector(".img4");
const img5=document.querySelector(".img5");
const img6=document.querySelector(".img6");
var newImg;


function paintHangman(){

    currentMiss=parseInt(localStorage.getItem("wrong"));
    
    if (currentMiss===1){
        newImg=img1.getAttribute("src");
        currentImg.setAttribute("src",newImg);
    }
    else if (currentMiss===2){
        newImg=img2.getAttribute("src");
        currentImg.setAttribute("src",newImg);
    }
    else if (currentMiss===3){
        newImg=img3.getAttribute("src");
        currentImg.setAttribute("src",newImg);
    }
    else if (currentMiss===4){
        newImg=img4.getAttribute("src");
        currentImg.setAttribute("src",newImg);
    }
    else if (currentMiss===5){
        newImg=img5.getAttribute("src");
        currentImg.setAttribute("src",newImg);
    }
    else if (currentMiss===6){
        newImg=img6.getAttribute("src");
        currentImg.setAttribute("src",newImg);
    }
    
}

function checkWord(){
    
    paintHangman();

    for (var i=0;i<WORD.length;i++){
        if (words[i].classList.contains("showing")!==true){
            return;
        }
    }
    console.log("found all");
    input.classList.remove("invisible");
    input.classList.add(SHOWING);
    label.classList.remove("invisible");
    label.classList.add(SHOWING);

    
}


function init(){
    
    document.onload=paintHangman();  // hangman painted even after answer submitted

    alphabets[0].addEventListener("click",function(){
        checkWord();
    });
    alphabets[1].addEventListener("click",function(){
        checkWord();
    });
    alphabets[2].addEventListener("click",function(){
        checkWord();
    });
    alphabets[3].addEventListener("click",function(){
        checkWord();
    });
    alphabets[4].addEventListener("click",function(){
        checkWord();
    });
    alphabets[5].addEventListener("click",function(){
        checkWord();
    });
    alphabets[6].addEventListener("click",function(){
        checkWord();
    });
    alphabets[7].addEventListener("click",function(){
        checkWord();
    });
    alphabets[8].addEventListener("click",function(){
        checkWord();
    });
    alphabets[9].addEventListener("click",function(){
        checkWord();
    });
    alphabets[10].addEventListener("click",function(){
        checkWord();
    });
    alphabets[11].addEventListener("click",function(){
        checkWord();
    });
    alphabets[12].addEventListener("click",function(){
        checkWord();
    });
    alphabets[13].addEventListener("click",function(){
        checkWord();
    });
    alphabets[14].addEventListener("click",function(){
        checkWord();
    });
    alphabets[15].addEventListener("click",function(){
        checkWord();
    });
    alphabets[16].addEventListener("click",function(){
        checkWord();
    });
    alphabets[17].addEventListener("click",function(){
        checkWord();
    });
    alphabets[18].addEventListener("click",function(){
        checkWord();
    });
    alphabets[19].addEventListener("click",function(){
        checkWord();
    });
    alphabets[20].addEventListener("click",function(){
        checkWord();
    });
    alphabets[21].addEventListener("click",function(){
        checkWord();
    });
    alphabets[22].addEventListener("click",function(){
        checkWord();
    });
    alphabets[23].addEventListener("click",function(){
        checkWord();
    });
    alphabets[24].addEventListener("click",function(){
        checkWord();
    });
    alphabets[25].addEventListener("click",function(){
        checkWord();
    });
    
    
}
init();