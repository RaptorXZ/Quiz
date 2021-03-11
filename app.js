// Selectors
const startButton = document.querySelector("#start-btn");
const nextButton = document.querySelector("#next-btn");
const questionContainer = document.querySelector("#question-container");
const buttonContainer = document.querySelector("#buttons");
const questionh2 = document.querySelector("#question");
const button1 = document.querySelector("#btn1")
const button2 = document.querySelector("#btn2")
const button3 = document.querySelector("#btn3")
const button4 = document.querySelector("#btn4")
let score = 0;
let currentQuestionIndex = 0;

// Listeners
startButton.addEventListener("click", startQuiz);
button1.addEventListener("click", function() {
  selectAnswer(button1);
});

button2.addEventListener("click", function() {
  selectAnswer(button2);
});

button3.addEventListener("click", function() {
  selectAnswer(button3);
});

button4.addEventListener("click", function() {
  selectAnswer(button4);
});

nextButton.addEventListener('click', nextQuestion)

// Functions
function startQuiz() {
  buttonContainer.classList.remove("hide");
  startButton.innerHTML = "Reset";
  startButton.addEventListener("click", resetQuiz);
  showQuestion(questionOne);
}

function showQuestion(question) {
  questionh2.innerHTML = (`${question[0].question}`);

  let answerButtons = buttonContainer.children;
  Array.from(answerButtons).forEach((e, index) => {
    let answerLetter = "";
    if (index == 0) {
      answerLetter = question[0].answers[index].A;
      e.innerText = (`${answerLetter}`);
    }
    if (index == 1) {
      answerLetter = question[0].answers[index].B;
      e.innerText = (`${answerLetter}`);
    }
    if (index == 2) {
      answerLetter = question[0].answers[index].C;
      e.innerText = (`${answerLetter}`);
    }
    if (index == 3) {
      answerLetter = question[0].answers[index].D;
      e.innerText = (`${answerLetter}`);
    }
    
  });
}

function nextQuestion(){
  if (currentQuestionIndex == 1) {
    showQuestion(questionTwo);
  }
  else if (currentQuestionIndex == 2) {
    showQuestion(questionThree);
  }

    button1.classList.remove("wrong-answer");
    button2.classList.remove("wrong-answer");
    button3.classList.remove("wrong-answer");
    button4.classList.remove("wrong-answer");
    button1.classList.remove("correct-answer");
    button2.classList.remove("correct-answer");
    button3.classList.remove("correct-answer");
    button4.classList.remove("correct-answer");

    if (currentQuestionIndex == 3) {
      button1.classList.add("hide");
      button2.classList.add("hide");
      button3.classList.add("hide");
      button4.classList.add("hide");
      nextButton.classList.add("hide");
      questionh2.innerText = `Your score is ${score}!`
    }
}

function selectAnswer(e) {
  if (currentQuestionIndex == 0) {
    button1.classList.add("wrong-answer");
    button2.classList.add("wrong-answer");
    button3.classList.add("correct-answer");
    button4.classList.add("wrong-answer");

    if (e == button3) {
      score++;
    }
  }
  else if (currentQuestionIndex == 1) {
    button1.classList.add("wrong-answer");
    button2.classList.add("correct-answer");
    button3.classList.add("wrong-answer");
    button4.classList.add("wrong-answer");

    if (e == button2) {
      score++;
    }
  }
  else if (currentQuestionIndex == 2) {
    button1.classList.add("wrong-answer");
    button2.classList.add("wrong-answer");
    button3.classList.add("correct-answer");
    button4.classList.add("wrong-answer");

    if (e == button3) {
      score++;
    }
  }
  
  nextButton.classList.remove("hide");
    
  currentQuestionIndex++;
}

function resetQuiz() {
  location.reload();
}

const questionOne = [
  {
    question: "Inside which HTML element do we put the JavaScript?",
    answers: [
      { A: "<javascript>", correct: false },
      { B: "<js>", correct: false },
      { C: "<script>", correct: true },
      { D: "<scripting>", correct: false },
    ],
  },
];

const questionTwo = [
  {
    question: "How do you write 'Hello World' in an alert box?",
    answers: [
      { A: "msg('Hello World');", correct: false },
      { B: "alert('Hello World');  ", correct: true },
      { C: "msgBox('Hello World');", correct: false },
      { D: "alertBox('Hello World');", correct: false },
    ],
  },
];

const questionThree = [
  {
    question: "Which event occurs when the user clicks on an HTML element?",
    answers: [
      { A: "onmouseclick", correct: false },
      { B: "onchange", correct: false },
      { C: "onclick", correct: true },
      { D: "onmouseover", correct: false },
    ],
  },
];


