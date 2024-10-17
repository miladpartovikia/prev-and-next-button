let Progress = document.getElementById("progress");
let Prev = document.getElementById("prev");
let Next = document.getElementById("next");
let Circle = document.querySelectorAll("div.circle");
let counter = 0;
Prev.addEventListener("click", function () {
  counter--;

  if (counter < 1) {
    counter = 1;
  }
  Update();
});

Next.addEventListener("click", function () {
  counter++;

  if (counter > Circle.length) {
    counter = Circle.length;
  }
  Update();
});

function Update() {
  Circle.forEach((elem, index) => {
    if (index < counter) {
      elem.classList.add("active");
    } else elem.classList.remove("active");
  });
  let actives = document.querySelectorAll(".active");
  Progress.style.width = (actives.length - 1) / (Circle.length - 1)*100+"%";
  Circle.style.borderRadius = "0px";
}

console.log(Circle.length);
console.log(actives.length);
