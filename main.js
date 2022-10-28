let generateRandomColor = document.querySelector("#generateRandomColor");
let imgCopy = document.querySelector(".imgCopy-button");
let colorCode = document.querySelector("#colorCode");
let color = "0123456789abcdef";

function randomGenerateColor() {
  let hex = "#";
  for (var i = 0; i < 6; i++) {
    const index = Math.floor(Math.random() * color.length);
    hex += color[index];
  }
  document.body.style.backgroundColor = hex;
  colorCode.innerHTML = hex;
}
generateRandomColor.addEventListener("click", function () {
  randomGenerateColor();
});

function copyText() {
  var copyText = document.getElementById("colorCode");
  var textArea = document.createElement("textarea");
  textArea.value = copyText.textContent;
  document.body.appendChild(textArea);
  textArea.select();
  document.execCommand("Copy");
  textArea.remove();
}

imgCopy.addEventListener("click", function () {
  copyText();
});
