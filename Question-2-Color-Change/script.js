const button = document.getElementById("colorButton");

const colors = ["red", "green", "purple", "orange"];
let index = 0;

button.addEventListener("click", function() {
    button.style.backgroundColor = colors[index];

    index = (index + 1) % colors.length;
});