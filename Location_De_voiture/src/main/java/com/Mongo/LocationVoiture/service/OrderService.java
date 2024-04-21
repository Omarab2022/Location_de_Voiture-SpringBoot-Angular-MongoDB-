package com.Mongo.LocationVoiture.service;

import com.Mongo.LocationVoiture.Enums.Statue;
import com.Mongo.LocationVoiture.entity.Order;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.time.LocalDate;

public interface OrderService {

    Page<Order> search(String id, Statue state, LocalDate startDate, LocalDate endDate, Pageable pageable);
}
