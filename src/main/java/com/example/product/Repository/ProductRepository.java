package com.example.product.Repository;

import com.example.product.Entity.Product;
import org.springframework.data.repository.CrudRepository;

public interface ProductRepository extends CrudRepository<Product, Integer> {
    @Override
    Iterable<Product> findAll();

}
