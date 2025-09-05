console.log("main.js");
(() => {
  console.log("Here we are!");
  window.addEventListener("load", (event) => {
    const multiplier = document.getElementById("multiplier");
    const multiplicand = document.getElementById("multiplicand");
    const operator = document.getElementById("operator");
    const product = document.getElementById("product");

    const update = () => {
      const num1 = parseFloat(multiplier.value);
      const num2 = parseFloat(multiplicand.value);
      let result;

      switch (operator.value) {
        case "+":
          result = num1 + num2;
          break;
        case "-":
          result = num1 - num2;
          break;
        case "*":
          result = num1 * num2;
          break;
        case "/":
          result = num2 !== 0 ? num1 / num2 : "Error:You cannot divide by 0.";
          break;
      }
      //            product.innerHTML = parseFloat( multiplier.value ) * parseFloat( multiplicand.value );
      product.innerHTML = result;
    };

    multiplier.addEventListener("input", update);
    multiplicand.addEventListener("input", update);
    operator.addEventListener("change", update);
  });
})();
