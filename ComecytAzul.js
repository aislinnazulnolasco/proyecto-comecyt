// Textos bilingües
const texts = {
  es: {
    title: "Bienvenido a la página bilingüe",
    colorsTitle: "Juego: Aprende los colores",
    colorsQuestion: "¿De qué color es el cielo?",
    animalsTitle: "Animales",
    animalsIntro: "Aprende los nombres de animales en inglés y español.",
    adjTitle: "Adjetivos y adverbios",
    adjContent: "Selecciona el adjetivo correcto para la frase:",
    adjQuestion: "El perro es ______.",
    verbTitle: "El verbo To Be",
    verbContent: "Completa la frase:",
    verbQuestion: "Yo ___ un estudiante."
  },
  en: {
    title: "Welcome to the bilingual page",
    colorsTitle: "Game: Learn the colors",
    colorsQuestion: "What color is the sky?",
    animalsTitle: "Animals",
    animalsIntro: "Learn the names of animals in English and Spanish.",
    adjTitle: "Adjectives and adverbs",
    adjContent: "Choose the correct adjective for the sentence:",
    adjQuestion: "The dog is ______.",
    verbTitle: "The verb To Be",
    verbContent: "Complete the sentence:",
    verbQuestion: "I ___ a student."
  }
};

let currentLang = "es";

// Cambiar idioma
function setLanguage(lang) {
  currentLang = lang;
  document.getElementById("title").innerText = texts[lang].title;
  document.getElementById("colorsTitle").innerText = texts[lang].colorsTitle;
  document.getElementById("colorsQuestion").innerText = texts[lang].colorsQuestion;
  document.getElementById("animalsTitle").innerText = texts[lang].animalsTitle;
  document.getElementById("animalsIntro").innerText = texts[lang].animalsIntro;
  document.getElementById("adjTitle").innerText = texts[lang].adjTitle;
  document.getElementById("adjContent").innerText = texts[lang].adjContent;
  document.getElementById("adjQuestion").innerText = texts[lang].adjQuestion;
  document.getElementById("verbTitle").innerText = texts[lang].verbTitle;
  document.getElementById("verbContent").innerText = texts[lang].verbContent;
  document.getElementById("verbQuestion").innerText = texts[lang].verbQuestion;
}

// Juegos
function checkColor(answer) {
  if ((currentLang === "es" && answer === "azul") ||
      (currentLang === "en" && answer === "blue")) {
    document.getElementById("colorsFeedback").innerText = currentLang === "es" ? "¡Correcto!" : "Correct!";
  } else {
    document.getElementById("colorsFeedback").innerText = currentLang === "es" ? "Intenta otra vez." : "Try again.";
  }
}

function checkAnimal(answer) {
  if (answer === "dog") {
    document.getElementById("animalsFeedback").innerText = currentLang === "es" ? "Dog = Perro" : "Dog = Perro";
  } else if (answer === "cat") {
    document.getElementById("animalsFeedback").innerText = currentLang === "es" ? "Cat = Gato" : "Cat = Gato";
  } else if (answer === "lion") {
    document.getElementById("animalsFeedback").innerText = currentLang === "es" ? "Lion = León" : "Lion = León";
  }
}

function checkAdj(answer) {
  if (answer === "grande" || answer === "big") {
    document.getElementById("adjFeedback").innerText = currentLang === "es" ? "¡Correcto! El perro es grande." : "Correct! The dog is big.";
  } else {
    document.getElementById("adjFeedback").innerText = currentLang === "es" ? "Intenta otra vez." : "Try again.";
  }
}

function checkVerb(answer) {
  if (answer === "am") {
    document.getElementById("verbFeedback").innerText = currentLang === "es" ? "¡Correcto! Yo soy un estudiante." : "Correct! I am a student.";
  } else {
    document.getElementById("verbFeedback").innerText = currentLang === "es" ? "Intenta otra vez." : "Try again.";
  }
}
