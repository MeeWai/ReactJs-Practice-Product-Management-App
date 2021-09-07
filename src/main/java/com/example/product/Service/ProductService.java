package com.example.product.Service;

import com.example.product.Entity.Product;
import com.example.product.Repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ProductService {
    @Autowired
    ProductRepository productRepository;

    public Product saveProduct(Product product) {
        return productRepository.save(product);
    }

    public Iterable<Product> getAllProducts() {
        return productRepository.findAll();
    }


    public Product updateProduct(Product product) {
        Product getProduct = productRepository.findById(product.getProductID()).orElse(null);

        if (getProduct != null) {
            getProduct.setProductName(product.getProductName());
            getProduct.setProductPrice(product.getProductPrice());
            getProduct.setProductQuantity(product.getProductQuantity());
        }

        return productRepository.save(product);
    }
}
