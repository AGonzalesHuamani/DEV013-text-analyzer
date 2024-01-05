import analyzer from './analyzer.js';
//TODO: escuchar eventos del DOM e invocar  los métodos del objeto `analyzer`
const textArea = document.querySelector("textarea");

const wordCount = document.querySelector("li[data-testid='word-count']");
const characterCount = document.querySelector("li[data-testid='character-count']");
const characterNoSpaces = document.querySelector("li[data-testid='character-no-spaces-count']");
const numberCount = document.querySelector("li[data-testid='number-count']");
const numberSum = document.querySelector("li[data-testid='number-sum']");
const wordLengthAverage = document.querySelector("li[data-testid='word-length-average']");

const resetButton = document.getElementById("reset-button");
resetButton.addEventListener("click", function limpiar() {
  //limpiar todo el contenido del textarea 
  textArea.value = '';
  // limpiar las Metricas a 0
  wordCount.innerHTML = "palabras 0"
  characterCount.innerHTML = "caracteres 0"
  characterNoSpaces.innerHTML = "caracteres sin espacios 0"
  numberCount.innerHTML = "números 0"
  numberSum.innerHTML = "suma total de números 0"
  wordLengthAverage.innerHTML = "promedio longitud 0"
})
 
textArea.addEventListener("input", function actualizarMetricas() {   
  const valores = textArea.value;
  wordCount.innerHTML = "palabras " + analyzer.getWordCount(valores);
  characterCount.innerHTML = "caracteres " + analyzer.getCharacterCount(valores);
  characterNoSpaces.innerHTML = "caracteres sin espacios " + analyzer.getCharacterCountExcludingSpaces(valores);
  numberCount.innerHTML = "números " + analyzer.getNumberCount(valores)
  numberSum.innerHTML = "suma total de números " + analyzer.getNumberSum(valores)
  wordLengthAverage.innerHTML = "promedio longitud " + analyzer.getAverageWordLength(valores)
}) 