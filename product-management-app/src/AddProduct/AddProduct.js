import React, {useState} from "react";
import {Grid, makeStyles} from "@material-ui/core";
import axios from "axios";
import {useSnackbar} from "notistack";
import "./AddProduct.css"

const AddProduct = () => {
        const useStyles = makeStyles((theme) => ({
            root: {
                flexGrow: 1,
            },
        }));

        const classes = useStyles();

        const baseURL = "http://localhost:8081/api/addNewProduct";

        const {enqueueSnackbar} = useSnackbar();
        const [currentProductName, setProductName] = useState("");
        const [currentProductPrice, setProductPrice] = useState("");
        const [currentProductQuantity, setProductQuantity] = useState("");

        const newProduct = {
            productName: currentProductName,
            productPrice: currentProductPrice,
            productQuantity: currentProductQuantity,
        }

        const addProductHandler = (event) => {
            event.preventDefault();
            if (!currentProductName) {
                enqueueSnackbar("Product name cannot be empty", {
                    variant: 'error',
                });
            } else if (!currentProductPrice) {
                enqueueSnackbar("Product price cannot be empty", {
                    variant: 'error',
                });
            } else if (!currentProductQuantity) {
                enqueueSnackbar("Product quantity cannot be empty", {
                    variant: 'error',
                });
            } else {
                postProduct();
            }
            console.log("Submit button clicked.");
            console.log(newProduct);
        }

        const postProduct = async () => {
            try {
                const response = await axios.post(baseURL, newProduct);
                enqueueSnackbar("Product post successfully.", {
                    variant: 'success',
                });
                setProductName("");
                setProductQuantity("");
                setProductPrice("");
                console.log(response.data);
            } catch (errorResponse) {
                enqueueSnackbar(errorResponse.toString(), {
                    variant: 'error',
                });
                console.log(errorResponse);
            }
        }

        return (
            <form onSubmit={addProductHandler}>
                <div className={classes.root}>
                    <div className="container">
                        <Grid container spacing={1}>
                            <Grid item xs={12} sm={6}>
                                <div className="productInput">
                                    <label>Product name :</label>
                                    <input type="text" value={currentProductName}
                                           onChange={(event) => {
                                               setProductName(event.target.value);
                                               console.log(event.target.value);
                                           }}/>
                                </div>
                            </Grid>

                            <Grid item xs={12} sm={6}>
                                <div className="productInput">
                                    <label>Product price (RM):</label>
                                    <input type="number" value={currentProductPrice}
                                           onChange={(event) => {
                                               setProductPrice(event.target.value);
                                               console.log(event.target.value);
                                           }}/>
                                </div>
                            </Grid>

                            <Grid item xs={12} sm={6}>
                                <div className="productInput">
                                    <label>Product quantity:</label>
                                    <input type="number" value={currentProductQuantity}
                                           onChange={(event) => {
                                               setProductQuantity(event.target.value);
                                               console.log(event.target.value);
                                           }}/>
                                </div>
                            </Grid>
                        </Grid>

                        <div className="submitBTN">
                            <button type="submit">Add product</button>
                        </div>
                    </div>
                </div>
            </form>
        );
    };

export default AddProduct;