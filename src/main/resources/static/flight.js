document.addEventListener("DOMContentLoaded", () => {
    fetch('/flights')
        .then(response => response.json())
        .then(data => {
            displayFlights(data);
        });
});

function displayFlights(flights) {
    const flightsContainer = document.getElementById('flights-container');

    flights.forEach(flight => {
        const flightElement = document.createElement('div');
        flightElement.textContent = `Flight ${flight.id}: ${flight.origin} to ${flight.destination}`;
        flightsContainer.appendChild(flightElement);
    });
}
