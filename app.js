// Selectors
const startButton = document.querySelector("#start-btn");
const nextButton = document.querySelector("#next-btn");
const questionContainer = document.querySelector("#question-container");

// Listeners
startButton.addEventListener("click", startGame);

// Functions

//

const questionsOne = [
  {
    question: "Inside which HTML element do we put the JavaScript?",
    answer: [
      { A: "<javascript>", correct: false },
      { B: "<js>", correct: false },
      { C: "<script>", correct: true },
      { D: "<scripting>", correct: false },
    ],
  },
  {
    question: 'How do you write "Hello World" in an alert box?',
    answer: [
      { A: "<alert('Hello World')>", correct: false },
      { B: "<js>", correct: false },
      { C: "<script>", correct: true },
      { D: "<scripting>", correct: false },
    ],
  },
  {
    question: "Inside which HTML element do we put the JavaScript?",
    answer: [
      { A: "<javascript>", correct: false },
      { B: "<js>", correct: false },
      { C: "<script>", correct: true },
      { D: "<scripting>", correct: false },
    ],
  },
  {
    question: "Inside which HTML element do we put the JavaScript?",
    answer: [
      { A: "<javascript>", correct: false },
      { B: "<js>", correct: false },
      { C: "<script>", correct: true },
      { D: "<scripting>", correct: false },
    ],
  },
  {
    question: "Inside which HTML element do we put the JavaScript?",
    answer: [
      { A: "<javascript>", correct: false },
      { B: "<js>", correct: false },
      { C: "<script>", correct: true },
      { D: "<scripting>", correct: false },
    ],
  },
];
