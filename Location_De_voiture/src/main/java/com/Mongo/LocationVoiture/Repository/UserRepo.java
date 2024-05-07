package com.Mongo.LocationVoiture.Repository;

import com.Mongo.LocationVoiture.entity.User;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepo extends MongoRepository<User, Integer> {

    @Query("{ 'email' : ?0 }")
    User findByEmail(String email);
}
