const words=document.querySelectorAll(".word span");
const input=document.querySelector(".answerInput");
var revealed=0;



function checkWord(){
    
    for (var i=0;i<WORD.length;i++){
        if (words[i].classList.contains("showing")!==true){
            return;
        }
    }
    console.log("found all");
    input.classList.remove("invisible");
    input.classList.add(SHOWING);
}


function init(){
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