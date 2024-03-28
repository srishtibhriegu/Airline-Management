package com.airlinemanagement.controller;
import com.airlinemanagement.model.Flight;
import org.springframework.core.io.ClassPathResource;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

@RestController


public class FlightController {

    @GetMapping("/flights")
    public ResponseEntity<List<Flight>> getFlights() {
        List<Flight> flights = fetchFlightDataFromCSV();
        return ResponseEntity.ok(flights);
    }

    private List<Flight> fetchFlightDataFromCSV() {
        List<Flight> flights = new ArrayList<>();
        try {
            ClassPathResource resource = new ClassPathResource("data/flight.csv");
            BufferedReader reader = new BufferedReader(new FileReader(resource.getFile()));
            String line;

            while ((line = reader.readLine()) != null) {
                String[] parts = line.split(",");
                if (parts.length == 3) {
                    flights.add(new Flight(parts[0], parts[1], parts[2]));
                }
            }
            reader.close();
        } catch (IOException e) {
            e.printStackTrace();
        }
        return flights;
    }

}
