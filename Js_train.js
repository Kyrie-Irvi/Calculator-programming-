function calculate() {
  const a = parseFloat(document.getElementById("nb1").value);
  const b = parseFloat(document.getElementById("nb2").value);
  const operation = document.getElementById("select").value;
  const display = document.getElementById("result");

  
  if (operation == "+") {
    const sum = a + b;
    display.textContent = "Resultat : " + sum;
  } 
  else if (operation == "-") {
    const minus = a - b;
    display.textContent = "Resulat : " + minus;
  }
}
