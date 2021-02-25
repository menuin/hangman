const wordDiv=document.querySelector(".word");



function printWord(){
    for (var i=0;i<WORD.length;i++){
        const span=document.createElement("span");
        span.innerText=WORD.charAt(i);
        span.id=i;
        wordDiv.appendChild(span);
    }
}

function init(){
    printWord();
   
    
}
init();