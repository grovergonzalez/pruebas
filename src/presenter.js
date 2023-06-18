import Calculadora from "./Calculadora";

const frase = document.querySelector("#frase");
const form = document.querySelector("#Calcular-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  div.innerHTML = "frase:" + "<p>" + frase.value + "</p>";
});
