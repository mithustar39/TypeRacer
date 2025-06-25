// paragraphs that it will go through randomly
const paragraphs = [
  "The quick brown fox jumps over the lazy dog.",
  "Typing fast and accurately is a valuable skill.",
  "JavaScript is a versatile programming language.",
  "A journey of a thousand miles begins with a single step.",
  "Clouds drift lazily across the sky.",
  "Learning to code opens up a world of possibilities.",
  "She sells seashells by the seashore.",
  "In the heart of the city, the lights never dim.",
  "Practice makes perfect.",
  "Reading books expands your mind."
];

// varaibles
let currentIndex = 0;
let startTime = null;
let container;

// displaying the paragraph
function renderParagraph() {
  const randomIndex = Math.floor(Math.random() * paragraphs.length);
  const currentParagraph = paragraphs[randomIndex];
  const characters = currentParagraph.split("");

  document.getElementById("wpm-display").innerText = "WPM: --";

  container = document.getElementById("paragraph-container");
  container.innerHTML = "";
  currentIndex = 0;
  startTime = null;

  characters.forEach(char => {
    const span = document.createElement("span");
    span.innerText = char;
    span.classList.add("letter");
    container.appendChild(span);
  });

  container.children[0].classList.add("current");
}

// WPM calculations - live version
function calculateWPM() {
  if (!startTime) return;

  const currentTime = new Date();
  const elapsedMinutes = (currentTime - startTime) / 1000 / 60;

  const typedText = Array.from(container.querySelectorAll(".correct"))
    .map(span => span.innerText)
    .join("");

  const wordCount = typedText.trim().split(/\s+/).length;
  const wpm = Math.round(wordCount / elapsedMinutes);

  const wpmDisplay = document.getElementById("wpm-display");
  if (isFinite(wpm) && wpm > 0) {
    wpmDisplay.innerText = `WPM: ${wpm}`;
  } else {
    wpmDisplay.innerText = `WPM: --`;
  }
}

// handling keyinput
document.addEventListener("keydown", function (event) {
  const spans = container.querySelectorAll("span");
  if (currentIndex >= spans.length) return;

  if (!startTime) startTime = new Date();

  const currentSpan = spans[currentIndex];
  const expectedChar = currentSpan.innerText;

  currentSpan.classList.remove("current");

  if (event.key === expectedChar) {
    currentSpan.classList.add("correct");
  } else if (event.key.length === 1) {
    currentSpan.classList.add("incorrect");
  } else {
    currentSpan.classList.add("current");
    return;
  }

  currentIndex++;

  if (currentIndex < spans.length) {
    spans[currentIndex].classList.add("current");
  } else {
    calculateWPM(); // final WPM
  }

  calculateWPM(); // live WPM update

  if (event.key === " ") {
    event.preventDefault();
  }
});

document.getElementById("restart").addEventListener("click", renderParagraph);
renderParagraph();
