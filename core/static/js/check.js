const answerForm=document.querySelector(".js-answerForm");
const answerInput=answerForm.querySelector(".answerInput");
const answer=JSON.parse("{{answerJson|escapejs")
const result=document.querySelector(".result")

function checkAnswer(value){
    if (answer===value){
        result.innerText="Correct";
        console.log("correct");
    }
    else {
        result.innerText="Wrong";
    }
}
function handleSubmit(event){
    event.preventDefault();
    const currentAnswer=answerInput.value;
    checkAnswer(currentAnswer);

}
function init(){
    answerForm.addEventListener("submit",handleSubmit);
}
init();