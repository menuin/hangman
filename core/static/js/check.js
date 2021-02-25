const alphabets=document.querySelectorAll(".alphabet span");
const hangman=document.querySelector(".hangmanImg");
const CHECKED="checked";
const SHOWING="showing";
localStorage.setItem("wrong", WRONG);
var isIn=false;



function check(char){
   for (var i=0;i<WORD.length;i++){
       if (WORD.charAt(i)==char.toLowerCase()){
            const correct=document.getElementById(i);
            correct.classList.add(SHOWING);
            isIn=true;
       }
   }
}


function checkAlphabet(alphabet){
    alphabet.classList.add(CHECKED);
    const char=alphabet.innerText.toLowerCase();
    check(char);
    if (isIn==false){
        console.log("wrong");
        
        currentMiss=parseInt(localStorage.getItem("wrong"));
        localStorage.setItem("wrong",currentMiss+1);

        
        
    }
    else{
        console.log("correct");
        isIn=false;
    }
}
function init(){
    alphabets[0].addEventListener("click",function(){
        checkAlphabet(alphabets[0]);
    });
    alphabets[1].addEventListener("click",function(){
        checkAlphabet(alphabets[1]);
    });
    alphabets[2].addEventListener("click",function(){
        checkAlphabet(alphabets[2]);
    });
    alphabets[3].addEventListener("click",function(){
        checkAlphabet(alphabets[3]);
    });
    alphabets[4].addEventListener("click",function(){
        checkAlphabet(alphabets[4]);
    });
    alphabets[5].addEventListener("click",function(){
        checkAlphabet(alphabets[5]);
    });
    alphabets[6].addEventListener("click",function(){
        checkAlphabet(alphabets[6]);
    });
    alphabets[7].addEventListener("click",function(){
        checkAlphabet(alphabets[7]);
    });
    alphabets[8].addEventListener("click",function(){
        checkAlphabet(alphabets[8]);
    });
    alphabets[9].addEventListener("click",function(){
        checkAlphabet(alphabets[9]);
    });
    alphabets[10].addEventListener("click",function(){
        checkAlphabet(alphabets[10]);
    });
    alphabets[11].addEventListener("click",function(){
        checkAlphabet(alphabets[11]);
    });
    alphabets[12].addEventListener("click",function(){
        checkAlphabet(alphabets[12]);
    });
    alphabets[13].addEventListener("click",function(){
        checkAlphabet(alphabets[13]);
    });
    alphabets[14].addEventListener("click",function(){
        checkAlphabet(alphabets[14]);
    });
    alphabets[15].addEventListener("click",function(){
        checkAlphabet(alphabets[15]);
    });
    alphabets[16].addEventListener("click",function(){
        checkAlphabet(alphabets[16]);
    });
    alphabets[17].addEventListener("click",function(){
        checkAlphabet(alphabets[17]);
    });
    alphabets[18].addEventListener("click",function(){
        checkAlphabet(alphabets[18]);
    });
    alphabets[19].addEventListener("click",function(){
        checkAlphabet(alphabets[19]);
    });
    alphabets[20].addEventListener("click",function(){
        checkAlphabet(alphabets[20]);
    });
    alphabets[21].addEventListener("click",function(){
        checkAlphabet(alphabets[21]);
    });
    alphabets[22].addEventListener("click",function(){
        checkAlphabet(alphabets[22]);
    });
    alphabets[23].addEventListener("click",function(){
        checkAlphabet(alphabets[23]);
    });
    alphabets[24].addEventListener("click",function(){
        checkAlphabet(alphabets[24]);
    });
    alphabets[25].addEventListener("click",function(){
        checkAlphabet(alphabets[25]);
    });
    
}

init();