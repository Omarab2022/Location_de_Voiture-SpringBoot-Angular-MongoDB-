package com.Mongo.LocationVoiture.Repository;

import com.Mongo.LocationVoiture.entity.Client;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.stereotype.Repository;


@Repository
public interface ClientRepo extends MongoRepository<Client,String> {
    @Query("{ 'cin' : ?0 }")
    Client findByCin(String cin);
    boolean existsByEmail(String email);

    boolean existsByCin(String cin);
}
