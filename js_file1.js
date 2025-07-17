function calculate() {
  const nb1 = parseFloat(document.getElementById("nb1").value);
  const nb2 = parseFloat(document.getElementById("nb2").value);
  const isSelctChecked = document.getElementById("select").value;

  const resultDisplay = document.getElementById("result");
  if (isSelctChecked == "-") {
    const minus = nb1 - nb2;

  }

  if (isSelctChecked == "+") {
    const sum = nb1 + nb2;
    resultDisplay.textContent = "Résultat : " + sum;
 
  } 
}
