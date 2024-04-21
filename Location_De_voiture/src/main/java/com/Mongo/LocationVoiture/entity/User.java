package com.Mongo.LocationVoiture.entity;

import com.Mongo.LocationVoiture.Enums.Role;
import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.HashSet;
import java.util.Set;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Document(collection = "Users")
public class User {
    @Id
    private String id;
    private String lastName;
    private String firstName;
    private String address;
    private String email;
    private String PhoneNumber;
    private String motDePasse;
    private Role role;

    @JsonIgnore
    private Set<Role> roles = new HashSet<>();
    public Set<Role> addRole(Role role) {
        this.roles.add(role);
        return this.roles;
    }




}
