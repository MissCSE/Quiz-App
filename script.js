const quizData = [
  {
    question: "What does CSS stands for",
    a: "Central Style Sheets",
    b: "Cascading Style Sheets",
    c: "Cascading Simple Sheets",
    d: "None of the above",
    correct: "b",
  },
  {
    question: "What does HTML stands for",
    a: "Hypertext Markup Language",
    b: "Hypertext Markdown Language",
    c: "Hypertransfer Markup Language",
    d: "None of the above",
    correct: "a",
  },
  {
    question: "Which language runs in a web browser",
    a: "Java",
    b: "C",
    c: "JavaScript",
    d: "Python",
    correct: "c",
  },
  {
    question: "What year was JavaScript launched",
    a: "1996",
    b: "1997",
    c: "1994",
    d: "1995",
    correct: "d",
  },
];

const quiz=document.getElementById('quiz')
const answerEle=document.querySelectorAll('.answer')
const questionEle=document.getElementById('question')
const a_text=document.getElementById('a_text')
const b_text=document.getElementById('b_text')
const c_text=document.getElementById('c_text')
const d_text=document.getElementById('d_text')
const submitButton=document.getElementById('submit')

let currentQuiz=0
let score=0

loadQuiz()

function loadQuiz(){
    deselectAnswers()
    const currentQuizData=quizData[currentQuiz];
    questionEle.innerText=currentQuizData.question;
    a_text.innerText=currentQuizData.a
    b_text.innerText=currentQuizData.b
    c_text.innerText=currentQuizData.c
    d_text.innerText=currentQuizData.d
}

function deselectAnswers(){
    answerEle.forEach(answerEle=>answerEle.checked=false)
}

function getSelected(){
    let answer

    answerEle.forEach(answerEle=>{
        if(answerEle.checked){
            answer=answerEle.id
        }
    })
    return answer
}
submitButton.addEventListener('click',()=>{
    const answer=getSelected()
    // console.log(answer)
    if(answer){
        if(answer===quizData[currentQuiz].correct){
            score++;
        }
        currentQuiz++
        if(currentQuiz<quizData.length){
            loadQuiz()
            
        }
        else{
            quiz.innerHTML=`
            <h2 style="font-size:1.2rem"> You answered <b>${score}</b>/${quizData.length} questions correctly</h2>
            <button onclick="location.reload()">Reload</button>
            `
        }
    }
})