const quizData = [
  {
    question: "Who had composed the original Ramayana?",
    a: "Rishi Valmiki",
    b: "Tulsi Das",
    c: "Sant Ek Nath",
    d: "Anhinanda",
    correct: "a",
  },
  {
    question: "Lakshmana is considered to be the incarnation of whom?",
    a: "Lord Vishnu",
    b: "Lord Shiva",
    c: "Lord Brahma",
    d: " Sheshnag",
    correct: "d",
  },
  {
    question:
      "What was the name of the forest where Lord Rama, Lakshmana and Goddess Sita stayed during exile?",
    a: "Aranya",
    b: "Aranyak",
    c: "Dandakaranya",
    d: "Karanya",
    correct: "c",
  },
  {
    question: "Ravana was a devotee of who among the following God?",
    a: "Vishnu",
    b: "Brahma",
    c: "Shiva",
    d: "None of the above",
    correct: "c",
  },
  {
    question: "What was the name of Lord Rama's father?",
    a: "Shalishuka",
    b: "Nahapana",
    c: "Rajadhiraj",
    d: "Dasaratha",
    correct: "d",
  },
];

const quiz = document.getElementById("quiz");
const answerEle = document.querySelectorAll(".answer");
const questionEle = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitButton = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
  deselectAnswers();
  const currentQuizData = quizData[currentQuiz];
  questionEle.innerText = currentQuizData.question;
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;
}

function deselectAnswers() {
  answerEle.forEach((answerEle) => (answerEle.checked = false));
}

function getSelected() {
  let answer;

  answerEle.forEach((answerEle) => {
    if (answerEle.checked) {
      answer = answerEle.id;
    }
  });
  return answer;
}
submitButton.addEventListener("click", () => {
  const answer = getSelected();
  // console.log(answer)
  if (answer) {
    if (answer === quizData[currentQuiz].correct) {
      score++;
    }
    currentQuiz++;
    if (currentQuiz < quizData.length) {
      loadQuiz();
    } else {
      quiz.innerHTML = `
            <h2 style="font-size:1.2rem"> You answered <b>${score}</b>/${quizData.length} questions correctly</h2>
            <button onclick="location.reload()">Reload</button>
            `;
    }
  }
});
