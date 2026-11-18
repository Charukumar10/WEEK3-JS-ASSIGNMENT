function displayDate() {
    let today = new Date();

    document.getElementById("date").textContent =
        today.toDateString();
}

displayDate();