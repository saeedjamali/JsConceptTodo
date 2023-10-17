const btns = document.querySelectorAll(".btn");
const spnResult = document.querySelector(".result");
let counter = 0;

const increaseCounter = () => counter++;
const decreaseCounter = () => counter--;
const resetCounter = () => (counter = 0);
// console.log(increaseCounter(counter));

btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    const btnClicked = [...btn.classList].pop();
    if (btn.classList.contains("btn-increase")) {
      increaseCounter(counter);
      spnResult.style.color= "green";
    } else if (btnClicked.includes("decrease")) {
      decreaseCounter(counter);
      spnResult.style.color= "red";
    } else {
      counter = 0;
    }
    spnResult.textContent = counter;
  });
});
