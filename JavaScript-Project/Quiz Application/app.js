const questions = [
  {
    question: "Which language is used for web page styling?",
    options: ["HTML", "CSS", "Java", "Python"],
    answer: "CSS"
  },

  {
    question: "Which keyword is used to declare a variable in JavaScript?",
    options: ["var", "define", "int", "string"],
    answer: "var"
  },

  {
    question: "Which method is used to print something in console?",
    options: ["console.log()", "print()", "write()", "show()"],
    answer: "console.log()"
  },

  {
    question: "Which company developed JavaScript?",
    options: ["Google", "Microsoft", "Netscape", "Apple"],
    answer: "Netscape"
  },

  {
    question: "Which symbol is used for single-line comments in JavaScript?",
    options: ["//", "/* */", "#", "<!-- -->"],
    answer: "//"
  },

  {
    question: "Which HTML tag is used for JavaScript?",
    options: ["<js>", "<javascript>", "<script>", "<code>"],
    answer: "<script>"
  },

  {
    question: "Which array method adds an item at the end?",
    options: ["push()", "pop()", "shift()", "map()"],
    answer: "push()"
  },

  {
    question: "Which operator checks both value and data type?",
    options: ["==", "=", "===", "!="],
    answer: "==="
  },

  {
    question: "Which function converts JSON string into object?",
    options: [
      "JSON.stringify()",
      "JSON.parse()",
      "JSON.convert()",
      "JSON.object()"
    ],
    answer: "JSON.parse()"
  },

  {
    question: "Which hook is used for state in React?",
    options: ["useFetch", "useData", "useState", "useEffect"],
    answer: "useState"
  }
];


let currentIndex=0;
let score=0;


const  nextBtn = document.querySelector('.btn');
const question = document.querySelector('.question');
const optionsContainer = document.querySelector('.options');

function showQuestion(){

    let currentQuestion = questions[currentIndex];

    question.innerHTML = currentQuestion.question;

    optionsContainer.innerHTML = "";

    currentQuestion.options.forEach(option => {

        const label = document.createElement("label");

        label.innerHTML = `
        <input 
          type="radio" 
          name="option"
          value="${option}"
        >
        ${option}
        `;

        optionsContainer.appendChild(label);

    });

}

function showResult(){

  document.querySelector(".quiz-box").innerHTML = `
    <h2>Your Score is ${score} / ${questions.length}</h2>
  `;

}

nextBtn.addEventListener("click", ()=>{
    const selected = document.querySelector('input[name="option"]:checked');

    if(!selected){
        alert('select an option');
        return;
    }
    const answer = selected.value;
    if(answer === questions[currentIndex].answer)score++;
    currentIndex++;
    if(currentIndex < questions.length){
        showQuestion();
    }
    else{
        showResult();
    }
});

showQuestion();














