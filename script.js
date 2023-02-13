function apply() {
  let name = prompt("What is your name Beezuiful?");
  let age = parsentInt(prompt("How old are you?"));

  if (isNaN(age)) {
    alert("EORROR please try again🫤");
  }
  if (age > 18) {
    alert("😎 Cool Beez!" + " " + name + " " + "Come Save some Beez!🐝");
  } else {
    alert("🥹" + " " + name + " " + "EORROR Maybe next time");
  }
}
let applyButton = document.querySelector("button");
applyButton.addEventListener("click", apply);
