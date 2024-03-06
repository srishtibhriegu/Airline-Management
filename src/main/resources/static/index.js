function enterCityName(label) {
    var cityName = prompt("Enter " + label + " city or airport:");
    if (cityName) {

        document.getElementById(label.toLowerCase()).textContent = cityName;
    }
}

document.getElementById("from").addEventListener("click", function() {
    enterCityName("From");
});

document.getElementById("to").addEventListener("click", function() {
    enterCityName("To");
});

function toggleReturnCalendar() {
    var reDateInput = document.getElementById("reDate");
    if (reDateInput.style.display === "none") {
        reDateInput.style.display = "inline-block";
    } else {
        reDateInput.style.display = "none";
    }
}
document.getElementById("searchButton").addEventListener("click", function() {
      event.preventDefault();
    window.location.href = "flight.html";
});
