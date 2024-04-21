package com.Mongo.LocationVoiture.Repository;

import com.Mongo.LocationVoiture.entity.User;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepo extends MongoRepository<User,Integer> {
    User findByEmail(String username);
}
