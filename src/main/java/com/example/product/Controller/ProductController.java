package com.example.product.Controller;

import com.example.product.Entity.Product;
import com.example.product.Service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("api")
public class ProductController {

    @Autowired
    private ProductService productService;

    @PostMapping("/addNewProduct")
    public Product addProduct(@Valid @RequestBody Product product) {
        return productService.saveProduct(product);
    }

    @GetMapping("/getAllProducts")
    public Iterable<Product> getProducts(){
        return  productService.getAllProducts();
    }

    @PutMapping("/updateProduct")
    public Product updateProducts(@Valid @RequestBody Product product){
        return productService.updateProduct(product);
    }
}
