package com.Mongo.LocationVoiture.service;

import com.Mongo.LocationVoiture.Enums.Statue;
import com.Mongo.LocationVoiture.entity.Order;
import com.Mongo.LocationVoiture.Repository.OrderRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.data.support.PageableExecutionUtils;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

@Service
public class OrderServiceImplementation implements OrderService{
    @Autowired
    private OrderRepo orderRepo;

    @Autowired
    private MongoTemplate mongoTemplate;

    @Override
    public Page<Order> search(String id, Statue state, LocalDate startDate, LocalDate endDate, Pageable pageable) {

	    return null;
    }
}
