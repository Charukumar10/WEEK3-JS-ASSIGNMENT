function checkEvenOrOdd(number) {
    return number % 2 === 0 ? "Even" : "Odd";
}

document.getElementById("checkButton").addEventListener("click", function() {
    let number = document.getElementById("numberInput").value;
    let result = document.getElementById("result");

    if (number === "" || !Number.isInteger(Number(number))) {
        result.textContent = "Enter a valid whole number";
    } else {
        result.textContent = number + " is " + checkEvenOrOdd(Number(number));
    }
});