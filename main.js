document.getElementById("root").innerHTML = "hello world"

function add(a, b) {
  return a + b
}

function subtract(a, b) {
  return a - b
}

function multiply(a, b) {
  return a * b
}

function divide(a, b) {
  if (b === 0) {
    console.error("Cannot divide by zero")
    return undefined
  }
  return a / b
}

add(1, 2)
subtract(1, 2)
multiply(1, 2)
