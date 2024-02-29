function toggleReturnCalendar() {
    var reDateInput = document.getElementById("reDate");
    if (reDateInput.style.display === "none") {
        reDateInput.style.display = "inline-block";
    } else {
        reDateInput.style.display = "none";
    }
}
