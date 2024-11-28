export const generateResultText = (calculationResult) => {
  let result = "";
  if (calculationResult === "invalid") {
    result = "Invalid input. You must enter valid numbers.";
  } else if (calculationResult !== "no-calc") {
    result = "Result: " + calculationResult;
  }
  return result;
};

export const outputResult = (resultText) => {
  const output = document.getElementById("result");
  output.textContent = resultText;
};
