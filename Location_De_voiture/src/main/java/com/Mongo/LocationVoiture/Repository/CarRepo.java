package com.Mongo.LocationVoiture.Repository;

import com.Mongo.LocationVoiture.entity.Car;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.Date;
import java.util.List;

@Repository
public interface CarRepo extends MongoRepository<Car,String> {

}
