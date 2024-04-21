package com.Mongo.LocationVoiture.Controllers;

import com.Mongo.LocationVoiture.Repository.CarRepo;
import com.Mongo.LocationVoiture.entity.Order;
import com.Mongo.LocationVoiture.entity.Car;
import com.Mongo.LocationVoiture.entity.Client;
import com.Mongo.LocationVoiture.Repository.ClientRepo;
import com.Mongo.LocationVoiture.Repository.OrderRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.web.bind.annotation.*;

import java.util.Date;
import java.util.List;
import java.util.Map;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/car")
public class CarController {
    @Autowired
    private CarRepo carRepo;

    @Autowired
    private OrderRepo orderRepo;

    @Autowired
    private ClientRepo clientRepo;

    @Autowired
    private MongoTemplate mongoTemplate;

    @PostMapping("/addCar")
    public Car saveCar(@RequestBody Car car) {
        // Implémentation à ajouter
	    return car;
    }

    @PostMapping("/addOrder")
    public String saveOrder(@RequestBody Order order) {
        // Implémentation à ajouter
	    return null;
    }

    @PostMapping("/addClient")
    public String saveClient(@RequestBody Client client) {
        // Implémentation à ajouter
	    return null;
    }

    @GetMapping("/findAllCars")
    public List<Car> getCars() {
        // Implémentation à ajouter
	    return null;
    }

    @PostMapping("/findByDates")
    public List<Car> getCarsByDates(@RequestBody Map<String, Object> payload) {
        // Implémentation à ajouter
	    return null;
    }

    @GetMapping("/brands")
    public String getBrands() {
        // Implémentation à ajouter
	    return null;
    }

    @GetMapping("/cars/{brand}")
    public List<Car> getCarsByBrand(@PathVariable String brand) {
        // Implémentation à ajouter
	    return null;
    }

    @DeleteMapping("/cars/{id}")
    public String deleteCar(@PathVariable String id) {
        // Implémentation à ajouter
	    return id;
    }

    @PatchMapping("/updateCar/{id}")
    public String updateCar(@PathVariable("id") String id, @RequestBody Car updatedCar) {
        // Implémentation à ajouter
	    return id;
    }

    @GetMapping("/searchCar/{keyword}")
    public List<Car> searchCars(@PathVariable String keyword) {
        // Implémentation à ajouter
	    return null;
    }

    @PatchMapping("/cars/available/{id}")
    public String updateIsAvailable(@PathVariable String id) {
        // Implémentation à ajouter
	    return id;
    }

    @GetMapping("/findByDates/{startDate}/{endDate}")
    public List<Car> getCarsByDates(@PathVariable @DateTimeFormat(pattern = "yyyy-MM-dd") Date startDate,
                                    @PathVariable @DateTimeFormat(pattern = "yyyy-MM-dd") Date endDate) {
        // Implémentation à ajouter
	    return null;
    }

    @GetMapping("/{id}")
    public Car getCarById(@PathVariable String id) {
        // Implémentation à ajouter
	    return null;
    }

    @GetMapping("/available")
    public Map<String, Integer> getNumberOfAvailableCars() {
        // Implémentation à ajouter
	    return null;
    }
}
