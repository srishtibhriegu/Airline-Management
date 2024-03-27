const express = require('express');
const csv = require('csv-parser');
const fs = require('fs');

const app = express();
const port = 3000;

app.get('/flights', (req, res) => {
    const flights = [];

    fs.createReadStream('src/resources/data/flight.csv')
        .pipe(csv())
        .on('data', (row) => {
            flights.push(row);
        })
        .on('end', () => {
            res.json(flights);
        });
});

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});
