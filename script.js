const countDisplay = document.getElementById("count");
const plusBtn = document.getElementById("plus");
const minusBtn = document.getElementById("minus");
const resetBtn = document.getElementById("reset");

let number = 0;

if (countDisplay && plusBtn && minusBtn && resetBtn) {
  plusBtn.addEventListener("click", () => {
    number++;
    countDisplay.textContent = number;
  });

  minusBtn.addEventListener("click", () => {
    number--;
    countDisplay.textContent = number;
  });

  resetBtn.addEventListener("click", () => {
    number = 0;
    countDisplay.textContent = number;
  });
}

const textarea = document.getElementById("char-input");
const span = document.getElementById("char-count");

let son = 0;

if (textarea && span) {
  textarea.addEventListener("input", () => {
    span.textContent = textarea.value.length;
  });
}





