function calcule(a, b, c) {
  if (b === +"+") {
    console.log(a + c);
  }
  if (c === "-") {
    console.log(a - c);
  }
  if (b === "/") {
    console.log(a / c);
  }
}

console.log(calcule(1, "+", 3));
