const gramsInput = document.getElementById("grams");
const convertBtn = document.getElementById("convertBtn");
const resultText = document.getElementById("result");

function gramsToKilograms(grams) {
  return grams / 1000;
}

convertBtn.addEventListener("click", function () {
  const grams = parseFloat(gramsInput.value);

  if (isNaN(grams)) {
    resultText.textContent = "Please enter a valid number.";
    return;
  }

  const kilograms = gramsToKilograms(grams);
  resultText.textContent = `${grams} g = ${kilograms} kg`;
});