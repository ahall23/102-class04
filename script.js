function apply() {
  let name = prompt("What is your name?");
  let age = prompt("how old are you?");

  if (age > 18) {
    alert("😎 Cool Beez!" + " " + name + " " + "Come Save some Beez!");
  } else {
    alert("🥹" + " " + name + " " + "Maybe next time");
  }
}

let applyButton = document.querySelector("button");
applyButton.addEventListener("click", apply);
