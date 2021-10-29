const image = document.getElementById("image");

const btn1 = document.getElementById("btn-1");
const btn2 = document.getElementById("btn-2");
const btn3 = document.getElementById("btn-3");
const btn4 = document.getElementById("btn-4");

btn1.addEventListener("click", () => {
  image.style.height = "500px";
});

btn2.addEventListener("click", () => {
  image.style.height = "250px";
});

btn3.addEventListener("click", () => {
  image.style.height = "1000px";
});

btn4.addEventListener("click", () => {
  image.style.height = "300px";
});
