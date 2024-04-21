package com.Mongo.LocationVoiture.Controllers;

import com.Mongo.LocationVoiture.Repository.ClientRepo;
import com.Mongo.LocationVoiture.entity.Client;
import com.Mongo.LocationVoiture.entity.Order;
import com.Mongo.LocationVoiture.Repository.OrderRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/client")
public class ClientController {
    @Autowired
    private ClientRepo clientRepo;

    @Autowired
    private OrderRepo orderRepo;

    @GetMapping("/findOrderByClient")
    public List<Client> getOrdersByClient() {
        // Implémentation à ajouter
	    return null;
    }

    @PostMapping("/addClient")
    public String saveBook(@RequestBody Client client) {
        // Implémentation à ajouter
	    return null;
    }

    @PatchMapping("/updateClient/{id}")
    public ResponseEntity<Client> updateClient(@PathVariable String id, @RequestBody Client client) {
        // Implémentation à ajouter
	    return null;
    }

    @DeleteMapping("/deleteClient/{id}")
    public String deleteClient(@PathVariable String id) {
        // Implémentation à ajouter
	    return id;
    }

    @GetMapping("/findClientByCin/{cin}")
    public Client getClientByCin(@PathVariable String cin) {
        // Implémentation à ajouter
	    return null;
    }

    @GetMapping("/findClientById/{id}")
    public Client getClientById(@PathVariable String id) {
        // Implémentation à ajouter
	    return null;
    }

    @GetMapping("/findAllClients")
    public List<Client> getClients() {
        // Implémentation à ajouter
	    return null;
    }

    @GetMapping("/checkEmailExist/{email}")
    public boolean checkEmailExist(@PathVariable String email) {
        // Implémentation à ajouter
	    return false;
    }

    @GetMapping("/checkCinExist/{cin}")
    public boolean checkCinExist(@PathVariable String cin) {
        // Implémentation à ajouter
	    return false;
    }
}
