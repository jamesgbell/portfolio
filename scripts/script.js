
document.getElementById("h2").innerHTML = ("True or False?");

    let quizQuestion1 = document.getElementById("quiz-question").innerHTML = ("India is in Asia");
    let quizQuestion2 = document.getElementById("quiz-question").innerHTML = ("Lizards can grow another head after it is cut off");
    let quizQuestion3 = document.getElementById("quiz-question").innerHTML = ("Sean Connery was in Jaws");
    let quizQuestion4 = document.getElementById("quiz-question").innerHTML = ("Sartre said 'God is Dead'");
    let quizQuestion5 = document.getElementById("quiz-question").innerHTML = ("It needs more cowbell");


let trueButton = document.getElementById("true-button");
let falseButton = document.getElementById("false-button");

let correctMessage = document.getElementById("correct-answer");
let wrongMessage = document.getElementById("wrong-answer");


if (trueButton === true){
    trueButton.addEventListener('click', ()=>{
        correctMessage.classList.toggle('reveal');
    });
    elif (falseButton.addEventListener('click', ()=>{
        wrongMessage.classList.toggle('reveal');
    }));
}

falseButton.addEventListener('click', ()=>{
    wrongMessage.classList.toggle('reveal');
});

//make array of correct answers and wrong answers
//






// assign click to next button... dont be a bad

let nextButton = document.getElementById("next-question");



// rewrite so that question and answer is provided in javascript and set to innerHTML

// listen for click on nextButton 
// create function for next question
