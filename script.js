const quizDB = [
    {
        question :" Q1 : What is The Full Form Of HTML ?",
        a:"Hello To My Land",
        b:"Hey Text Markup Language",
        c:"HyperText Markup Language",
        d:"Hypertext Markup Language",
        ans:"ans4"
    },
    {
        question :" Q2 : What is The Full Form Of CSS ?",
        a:"Cascading Style Sheets",
        b:"Cascading Style Sheep",
        c:"Cartoon Style Sheep",
        d:"Cascading Super Sheets",
        ans:"ans1"
    },
    {
        question :" Q3 : What is The Full Form Of HTTP ?",
        a:"Hypertext Transfer Product",
        b:"Hypertext Test Protocol",
        c:"Hey Transfer Protocol",
        d:"Hypertext Transfer Protocol",
        ans:"ans4"
    },
    {
        question :" Q4 : What is The Full Form Of JS ?",
        a:"JavaScript",
        b:"JavaSuper",
        c:"JustScript",
        d:"JordenShoes",
        ans:"ans1"
    },
    {
        question :" Q5 : What is The Full Form Of JSON ?",
        a:"JavaScript Order Notation",
        b:"JavaScript Object Nation",
        c:"JavaScripts Object Notation",
        d:"JavaScript Object Notation",
        ans:"ans4"
    }
];

const question = document.querySelector('.question');
const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3');
const option4 = document.querySelector('#option4');
const submit = document.querySelector('#submit');
const answers = document.querySelectorAll('.answer');
const showScore = document.querySelector('#showScore');
let questionCount = 0;
let score = 0;

const loadQuestion = () =>{

    const questionList = quizDB[questionCount];

    question.innerText = questionList.question;

    option1.innerText = questionList.a;
    option2.innerText = questionList.b;
    option3.innerText = questionList.c;
    option4.innerText = questionList.d;
}
loadQuestion();

const getCheckAns = () =>{
    let answer;
    answers.forEach((curEleChe) => {
        if(curEleChe.checked){
            answer = curEleChe.id;
        }
    });
    return answer;
}
const deselectAll = () =>{
    answers.forEach((curEleChe) => curEleChe.checked = false);
}
submit.addEventListener('click',() => {
    const checkedAnswer = getCheckAns();
    console.log(checkedAnswer);
   if(checkedAnswer === quizDB[questionCount].ans){
       score++;
   }

   questionCount++;

   deselectAll();

   if(questionCount< quizDB.length){
    loadQuestion();
   }
   else{
    showScore.innerHTML = `
        <h3> Your Score ${score} / ${quizDB.length} </h3>
        <button class="btn" onclick="location.reload()"> Play Again </button>
    `;

    showScore.classList.remove('scoreArea');
   }
});