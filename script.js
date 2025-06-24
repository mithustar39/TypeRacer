const paragraphs = [
    "The quick brown fox jumps over the lazy dog. This sentence contains every letter of the alphabet and is often used for typing practice.",
    "Typing fast and accurately is a valuable skill in the digital age. Practice regularly to improve your speed and precision.",
    "JavaScript is a versatile programming language used for web development, server-side scripting, and even game creation.",
    "A journey of a thousand miles begins with a single step. Consistency and perseverance are key to achieving your goals.",
    "Clouds drift lazily across the sky, casting soft shadows on the ground below. The gentle breeze whispers through the trees.",
    "Learning to code opens up a world of possibilities. With patience and curiosity, anyone can become a proficient programmer.",
    "She sells seashells by the seashore. The shells she sells are surely seashells.",
    "In the heart of the city, the lights never dim. People hustle and bustle, chasing dreams and ambitions.",
    "Practice makes perfect. The more you type, the better your fingers will remember the keys.",
    "Reading books expands your mind and vocabulary. Make time each day to enjoy a good story."
];

function renderParagraph() {
    const randomNumber = Math.floor(Math.random() *paragraphs.length);
    const currentParagraph = paragraphs[randomNumber];
    const characters = currentParagraph.split("")

    const container = document.getElementById("paragraph-container");
    container.innerHTML = "";
    
    characters.forEach(i => {
        const span = document.createElement("span")
        span.innerText = i
        span.classList.add("letter")
        container.appendChild(span)
    });
};

renderParagraph();