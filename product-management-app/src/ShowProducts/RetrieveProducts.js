import React, {useEffect, useState} from "react";
import axios from "axios";
import ShowProduct from "./ShowProduct";
import {useSnackbar} from "notistack";

const RetrieveProducts = () =>{
    const [products, getProducts] = useState("");
    const {enqueueSnackbar} = useSnackbar();
    let [retrieveProduct, getAllProducts] = useState({});

    const baseURL="http://localhost:8081/api/getAllProducts";

    useEffect(() => {
        getAllProducts();
    },[retrieveProduct]);

     getAllProducts = async () => {
        try {
            const response = await axios.get(baseURL);
            const allProducts = response.data.content;
            if (allProducts.length > 0) {
                getProducts(allProducts);
                enqueueSnackbar("Product load successfully.", {
                    variant: 'success', autoHideDuration : "100"
                });
            } else {
                enqueueSnackbar("No product found.", {
                    variant: 'error', autoHideDuration : "100"
                });
                console.log("Product not found.")
            }
        } catch (errorResponse) {
            enqueueSnackbar(errorResponse.toString(), {
                variant: 'error', autoHideDuration : "100"
            });
            console.log(errorResponse);
        }
    };

    return(
        <ShowProduct productList={products}/>
    )
};

export default RetrieveProducts;
