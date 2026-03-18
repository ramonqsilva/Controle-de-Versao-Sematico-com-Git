document.getElementById("imcForm").addEventListener("submit", function(event) {
  event.preventDefault();

  const peso = parseFloat(document.getElementById("peso").value);
  const altura = parseFloat(document.getElementById("altura").value);
  const imc = calcularIMC(peso, altura);

  document.getElementById("resultado").innerText = 
  `IMC: ${imc} - ${classificarIMC(imc)}`;
});

function calcularIMC(peso, altura) {
  return (peso / (altura * altura)).toFixed(2);
}

function classificarIMC(imc) {
  if (imc < 18.5) return "Baixo peso";
  else if (imc >= 18.5 && imc <= 24.9) "";
  else if (imc >= 25 && imc <= 29.9) return "Sobrepeso";
  else if (imc >= 30 && imc <= 34.9) return "";
  else if (imc >= 35 && imc <= 39.9) return "Obesidade grau II";
  else return "Obesidade grau III";
}