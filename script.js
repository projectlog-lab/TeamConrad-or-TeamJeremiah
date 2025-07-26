const questions = [
  { q: "Who’s your fave?", a1: "Conrad", a2: "Jeremiah" },
  { q: "Pick the vibe", a1: "Chill & deep", a2: "Fun & loud" },
  { q: "Choose a treat", a1: "Lemonade", a2: "Ice Cream" },
  { q: "Better date?", a1: "Stargazing", a2: "Dancing" },
  { q: "Belly belongs with?", a1: "Conrad 💙", a2: "Jeremiah 💛" },
  { q: "Summer is for...", a1: "Love & drama", a2: "Laughs & sun" },
  { q: "Pick a dress", a1: "Simple white", a2: "Bright floral" },
  { q: "Convo or chaos?", a1: "Deep convo", a2: "Fun chaos" },
  { q: "Song choice?", a1: "Invisible String", a2: "Cruel Summer" },
  { q: "Last one! Your gut says?", a1: "Team Conrad", a2: "Team Jeremiah" }
];

let currentQuestion = 0;
let score = 0;
function startQuiz() {
  document.getElementById("start-screen").style.display = "none";
  document.getElementById("quiz-screen").style.display = "block";
  showQuestion();
}


  // Your existing quiz logic
  document.getElementById("start-screen").style.display = "none";
  document.getElementById("quiz-screen").style.display = "block";
  showQuestion();
}



function showQuestion() {
  const q = questions[currentQuestion];
  document.getElementById("question-text").textContent = (currentQuestion + 1) + ". " + q.q;
  document.getElementById("btn-a1").textContent = q.a1;
  document.getElementById("btn-a2").textContent = q.a2;
  document.getElementById("next-btn").style.display = "none";
}

function chooseAnswer(answer) {
  if (answer === "a2") {
    score++;
  }
  document.getElementById("next-btn").style.display = "inline-block";
}

function nextQuestion() {
  currentQuestion++;
  if (currentQuestion < questions.length) {
    showQuestion();
  } else {
    showResult();
  }
}

function showResult() {
  let finalResult = conradScore > jeremiahScore ? "Team Conrad" : "Team Jeremiah";
  document.getElementById("quiz-screen").style.display = "none";
  document.getElementById("result-screen").style.display = "block";
  document.getElementById("result-text").textContent = `You are ${finalResult}!`;
}




function retakeQuiz() {
  currentQuestion = 0;
  score = 0;
  document.getElementById("result-screen").style.display = "none";
  document.getElementById("quiz-screen").style.display = "block";
  showQuestion();
}
