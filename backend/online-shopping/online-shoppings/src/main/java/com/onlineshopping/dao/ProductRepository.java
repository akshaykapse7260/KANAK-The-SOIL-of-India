package com.onlineshopping.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.onlineshopping.model.Product;

public interface ProductRepository extends JpaRepository<Product, Integer> {
    List<Product> findByTitleContainingIgnoreCase(String title);
}

