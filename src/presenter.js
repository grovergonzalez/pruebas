import Calculadora from './Calculadora.js';

const fraseInput = document.getElementById('frase-input');
const calcularBtn = document.getElementById('calcular-btn');
const fraseResultado = document.getElementById('frase-resultado');
const palabrasSeparadasResultado = document.getElementById('palabras-separadas-resultado');
const contadorPalabrasResultado = document.getElementById('contador-palabras-resultado');

calcularBtn.addEventListener('click', () => {
  const frase = fraseInput.value;
  
  const calculadora = new Calculadora(frase);
  
  fraseResultado.textContent = `Frase ingresada: ${calculadora.get_frase(frase)}`;
  
  const palabrasSeparadas = calculadora.separar_palabras(frase);
  palabrasSeparadasResultado.textContent = `Palabras separadas: ${palabrasSeparadas.join(',')}`;

  const contadorPalabras = calculadora.contar_palabras_iguales(frase.toLowerCase());
  contadorPalabrasResultado.textContent = 'Contador de palabras:';
  
  Object.keys(contadorPalabras).forEach(palabra => {
    const cantidad = contadorPalabras[palabra];
    contadorPalabrasResultado.innerHTML += `<div>${palabra}: ${cantidad}</div>`;
  });
});
