package com.Mongo.LocationVoiture.Repository;


import com.Mongo.LocationVoiture.entity.Client;
import com.Mongo.LocationVoiture.entity.Order;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface OrderRepo extends MongoRepository<Order, String> {

    @Query("{ 'clientId' : ?0 }")
    List<Order> findByClientId(String id);

    @Query("{ 'client' : ?0 }")
    List<Order> findByClient(Client client);



}
