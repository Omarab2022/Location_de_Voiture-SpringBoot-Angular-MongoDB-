package com.Mongo.LocationVoiture.Controllers;

import com.Mongo.LocationVoiture.Enums.Statue;
import com.Mongo.LocationVoiture.entity.Car;
import com.Mongo.LocationVoiture.entity.Order;
import com.Mongo.LocationVoiture.Repository.CarRepo;
import com.Mongo.LocationVoiture.Repository.OrderRepo;
import com.Mongo.LocationVoiture.service.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:4200")

@RequestMapping("/order")
public class OrderController {
    @Autowired
    private OrderRepo orderRepo;

    @Autowired
    private CarRepo carRepository;

    @Autowired
    private OrderService orderService;

    @Autowired
    private MongoTemplate mongoTemplate;

    @GetMapping("/all")
    public List<Order> getAll() {

	    return null;
    }

    @PostMapping("/addOrder")
    public String saveOrder(@RequestBody Order order) {

	    return null;
    }

    @GetMapping("/allOrders")
    public List<Order> getOrders() {

	    return null;
    }


    @GetMapping("/search")
    public Page<Order> search(){
	    return null;
    }
    @GetMapping("/orderSingle/{id}")
    public Order getOrder(@PathVariable String id) {
	    return null;
    }

    @PatchMapping("/updateState/{id}")
    public String updateState(@PathVariable String id, @RequestBody Order order) {
	    return id;
    }
    @GetMapping("/ClientOrders/{id}")
    public List<Order> getClientOrders(@PathVariable String id) {

	    return null;
    }
    @GetMapping("/findAllOrdersInHold")
    public List<Order> findAllOrdersInHold() {
	    return null;
    }
    @GetMapping("/findAllOrdersAccepted")
    public List<Order> findAllOrdersAccepted() {
	    return null;
    }
    @GetMapping("/findAllOrdersRefused")
    public List<Order> findAllOrdersRefused() {

	    return null;
    }
}
