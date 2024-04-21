package com.Mongo.LocationVoiture.entity;

import com.Mongo.LocationVoiture.Enums.Statue;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;

import java.time.LocalDate;
@Data
@NoArgsConstructor
@AllArgsConstructor
@Document(collection = "Orders")
public class Order {
    @Id
    private String id;
    @DBRef
    private Client client;
    @DBRef
    private Car car;
    private Statue State;
    private LocalDate startDate;
    private LocalDate endDate;
    private double totalCost;
}
