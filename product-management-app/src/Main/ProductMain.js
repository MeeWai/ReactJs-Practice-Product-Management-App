import React, {useState} from "react";
import AddProduct from "../AddProduct/AddProduct";
import {Grid, makeStyles, Paper} from "@material-ui/core";
import RetrieveProducts from "../ShowProducts/RetrieveProducts";

const ProductMain = () => {

    const [currentNavigation, nextNavigation] = useState(false);

    const useStyles = makeStyles((theme) => ({
        root: {
            flexGrow: 1,
        },
        paper:{
            fontSize: "1.2rem",
            fontFamily:"Arial, serif",
            textAlign:"center",
            fontWeight:"bold",
            padding:"1rem",
            margin:"0.5rem",
            background:"radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%);"
        }
    }));

    const addProduct = () => {
        nextNavigation(false);
        console.log("Add product");
    };

    const viewProduct = () => {
        nextNavigation(true);
        console.log("View product");
    };

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid container spacing={1}>
                <Grid item xs={12} sm={6} onClick={addProduct}>
                    <Paper className={classes.paper}>Add Products</Paper>
                </Grid>

                <Grid item xs={12} sm={6} onClick={viewProduct}>
                    <Paper className={classes.paper}>View Products</Paper>
                </Grid>

            </Grid>

            <div>
                {!currentNavigation && <AddProduct/>}
            </div>

            <div>
                {currentNavigation && (<RetrieveProducts/>)}
            </div>
        </div>
    );
}

export default ProductMain;
