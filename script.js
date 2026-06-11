let count = 0
let counter = document.getElementById("counter")
const win_imege = document.getElementById("win")
let clickPower = 1


function tap() {
    count += clickPower

    counter.textContent = count

    if (count > 10) {
        win_imege.style.display = ""
    }
}

function up() {
    if (clicks >= 10) {
    count -= 10;
    clickPower++;
    console.log("Улучшение куплено! Сила клика: +1");
  } else {
        console.log("gg");

  }

}