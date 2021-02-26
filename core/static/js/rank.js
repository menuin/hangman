const rankBtn=document.querySelector(".rankBtn");
const rankDiv=document.querySelector(".rank");


function paintRank(){
    rankDiv.classList.remove("invisible");
    rankDiv.classList.add("showing");
    window.scroll(0,607);
}
function init(){
    rankBtn.addEventListener("click",paintRank);
}
init();