const bodyB = document.querySelector("body");
const selectD = document.querySelector("#select");
const input1 = document.querySelector("#input1"); 
const input2 = document.querySelector("#input2");
const colorB = document.querySelector("#color-button");

function getRandomColor() {
  let letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function changeColor(){
    bodyB.style.background = `linear-gradient(${selectD.value}, ${input1.value}, ${input2.value})`;
    document.querySelector("#currentC").textContent = `linear-gradient(${selectD.value}, ${input1.value}, ${input2.value})`
};
function changeColorR(){
    input1.value = getRandomColor()
    input2.value = getRandomColor();
    bodyB.style.background = `linear-gradient(${selectD.value}, ${input1.value}, ${input2.value})`;
    document.querySelector("#currentC").textContent = `linear-gradient(${selectD.value}, ${input1.value}, ${input2.value})`
};

colorB.addEventListener("click", changeColorR)
input1.addEventListener("input", changeColor)
input2.addEventListener("input", changeColor)
selectD.addEventListener("input", changeColor)


