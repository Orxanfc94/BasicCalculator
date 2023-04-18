const resultElement = document.getElementById("result");

function insert(char) {
  resultElement.value += char;
}

function clearResult() {
  resultElement.value = "";
}

function backspace() {
  resultElement.value = resultElement.value.slice(0, -1);
}

function calculate() {
  try {
    resultElement.value = eval(resultElement.value);
  } catch (e) {
    resultElement.value = "Error";
  }
}
