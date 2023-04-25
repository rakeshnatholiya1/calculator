let screen = document.getElementById("screen");
function display(num) {
  if (screen.value == "Invalid input Press C") {
    screen.value = "";
  } else {
    screen.value += num;
  }
}
function calculate() {
  try {
    screen.value = eval(screen.value);
  } catch (err) {
    screen.value = "Invalid input Press C";
  }
}
function Clear() {
  screen.value = "";
}
function del() {
  screen.value = screen.value.slice(0, -1);
}
