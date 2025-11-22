const quiz = [
  {
    question: "Ano fav food ko?",
    options: ["Sinigang", "Adobo", "richeese", "matcha"],
    answer: "richeese",
  },
  {
    question: "fav fruit ko",
    options: ["banana", "apple", "grapes", "orange"],
    answer: "banana",
  },
  {
    question: "fav place ko",
    options: ["cafe shop", "viewdeck", "park", "mall"],
    answer: "park",
  },
  {
    question: "fav game ko",
    options: ["valo", "codm", "ml", "roblox"],
    answer: "roblox",
  },
  {
    question: "fav song lany song ko",
    options: ["mean it", "good girls", "you!", "cause you have to"],
    answer: "mean it",
  },
  
  {
    question: "fav daniel caesar song ko",
    options: ["disillusioned", "new roses", "transform", "hold me down"],
    answer: "transform",
  },
  {
    question: "palayaw ko",
    options: ["tonton", "toni", "toni talks", "turon"],
    answer: "tonton",
  },
  {
    question: "fav cartoons ko",
    options: ["we bare bears", "teen titans", "adventure time", "loud house"],
    answer: "we bare bears",
  },
  {
    question: "fav animal",
    options: ["dog", "cat", "bird", "bunny"],
    answer: "dog",
  },
  {
    question: "fav gupit ko",
    options: ["taper", "blowout", "fade", "burst fade"],
    answer: "blowout",
  },
  {
    question: "ano phone ko?",
    options: ["ip 11", "ip xr", "ip 12", "ip 11 pro"],
    answer: "ip 11",
  },
  {
    question: "fav sports",
    options: ["cycling", "basketball", "volleyball", "badminton"],
    answer: "cycling",
  },
  {
    question: "fav socmed app ko",
    options: ["fb", "ig", "reddit", "x"],
    answer: "ig",
  },
  {
    question: "fav instrument",
    options: ["guitar", "drums", "piano", "bass"],
    answer: "guitar",
  },
  {
    question: "fav hobby",
    options: ["crochet", "read manhwas", "movie", "chores"],
    answer: "crochet",
  },
  {
    question: "saan me nakatira?",
    options: ["kalye onse", "settling", "bigte", "spar"],
    answer: "kalye onse",
  },
  {
    question: "fav cardio",
    options: ["lifting", "jog", "walk", "cycling"],
    answer: "walk",
  },
  {
    question: "ano course ko?",
    options: ["IT", "BSCE", "BSAMT", "BSHM"],
    answer: "IT",
  },
  {
    question: "fav artist ko",
    options: ["rex orange county", "daniel caesar", "zack tabudlo", "w2e (band to, ok nayan)"],
    answer: "daniel caesar",
  },
  {
    question: "payag ka makapulot tayo 1m tas sayo 10k?",
    options: ["yes", "yess", "yesss", "no, namo"],
    answer: "yes",
  },
  {
    question: "fav sub oat",
    options: ["chemistry", "comprog", "earth sci", "drrr"],
    answer: "comprog",
  }
];

let index = 0;
let score = 0;
let selectedAnswer = null;

const questionText = document.getElementById("questionText");
const optionsDiv = document.getElementById("options");
const nextBtn = document.getElementById("nextBtn");

// Load a question
function loadQuestion() {
  const current = quiz[index];
  questionText.innerText = `Question ${index + 1}: ${current.question}`;
  optionsDiv.innerHTML = "";

  current.options.forEach(opt => {
    const div = document.createElement("div");
    div.className = "option";
    div.innerText = opt;
    div.addEventListener("click", () => selectOption(div, opt));
    optionsDiv.appendChild(div);
  });

  nextBtn.disabled = true;
  selectedAnswer = null;
}

// When an option is selected
function selectOption(div, answer) {
  selectedAnswer = answer;

  document.querySelectorAll(".option").forEach(o => {
    o.style.background = "#f1f3f7";
  });
  div.style.background = "#cfe0ff";

  nextBtn.disabled = false;
}

// When Continue / Next is clicked
nextBtn.addEventListener("click", () => {
  if (selectedAnswer === quiz[index].answer) {
    score++;
  }

  index++;
  if (index < quiz.length) {
    loadQuestion();
  } else {
    showResults();
  }
});

function showResults() {
  questionText.innerText = "Quiz Complete! 🎉";
  optionsDiv.innerHTML = `
    <h3>Correct answers: ${score} / ${quiz.length}</h3>
    <h3>Wrong answers: ${quiz.length - score}</h3>
  `;
  nextBtn.style.display = "none";
}

// Start the quiz
loadQuestion();