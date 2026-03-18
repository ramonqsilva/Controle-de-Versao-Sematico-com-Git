document.getElementById("imcForm").addEventListener("submit", function(event) {
  event.preventDefault();

  const peso = parseFloat(document.getElementById("peso").value);
  const altura = parseFloat(document.getElementById("altura").value);
  const imc = calcularIMC(peso, altura);

  document.getElementById("resultado").innerText = `IMC: ${imc}`;
});


function calcularIMC(peso, altura) {
  return (peso / (altura * altura)).toFixed(2);
}