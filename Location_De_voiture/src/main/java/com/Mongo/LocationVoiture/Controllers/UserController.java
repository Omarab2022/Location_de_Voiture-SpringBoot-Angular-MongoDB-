package com.Mongo.LocationVoiture.Controllers;

import com.Mongo.LocationVoiture.Enums.Statue;
import com.Mongo.LocationVoiture.entity.Client;
import com.Mongo.LocationVoiture.entity.Order;
import com.Mongo.LocationVoiture.Enums.Role;
import com.Mongo.LocationVoiture.entity.Car;
import com.Mongo.LocationVoiture.entity.User;
import com.Mongo.LocationVoiture.Repository.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

import java.util.*;
@RestController
@RequestMapping("/manager")
public class UserController {
    @Autowired
    private MongoTemplate mongoTemplate;
    @Autowired
    private UserRepo userRepo;


    @GetMapping("/findUserIdByEmail/{email}")
    //give me function the id of the user with this email
    public String getUserId(@PathVariable String email){
        User user = mongoTemplate.findOne(new Query(Criteria.where("email").is(email)), User.class);
        return user.getId();
    }


    @GetMapping("/checkEmailExist/{email}")
    public boolean checkEmailExist(@PathVariable("email") String email) {
        Query query = new Query();
        query.addCriteria(Criteria.where("email").is(email));
        return mongoTemplate.find(query, User.class).size() > 0;
    }

    @RequestMapping("/user")
    public User getUserDetailsAfterLogin(Authentication authentication) {
        User user = userRepo.findByEmail(authentication.getName());
        System.out.println(user);
        return user;

    }

    @GetMapping("/findUserByEmail/{email}")
    public User getUserByEmail(@PathVariable String email){
        return mongoTemplate.findOne(new Query(Criteria.where("email").is(email)), User.class);
    }
}