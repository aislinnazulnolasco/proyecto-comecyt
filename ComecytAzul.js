let totalScore = 0;

function showSection(id){
    document.querySelectorAll(".content").forEach(sec=>{
        sec.classList.add("hidden");
    });
    document.getElementById(id).classList.remove("hidden");
}

function checkAnswer(inputId, correct, resultId){
    let user = document.getElementById(inputId).value.toLowerCase().trim();
    let result = document.getElementById(resultId);

    if(user === correct){
        result.innerHTML = "✅ Correcto! Excelente trabajo.";
        totalScore++;
    }else{
        result.innerHTML = "❌ Incorrecto. Intenta otra vez.";
    }
}

function quiz(answer){
    if(answer === "is" || answer === "plays"){
        totalScore++;
    }
    document.getElementById("score").innerHTML =
        "Tu puntuación total es: " + totalScore;
}
