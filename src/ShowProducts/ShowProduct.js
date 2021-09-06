import React from "react";
import "./ShowProducts.css"
import {
    makeStyles,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
} from "@material-ui/core";
import UpdateIcon from '@material-ui/icons/Update';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';

const ShowProduct = (props) => {
    const useStyles = makeStyles({
        div: {
            margin: "10px 10px"
        },
        updateIcon:{
            padding:"0 10px"
        },
        deleteIcon:{
            padding:"0 10px"
        }
    });

    const classes = useStyles();

    const updateProduct=()=>{
        console.log("Update product button is clicked.")
    };

    const deleteProduct=()=>{
        console.log("Delete product button is clicked");
    }

    const displayProduct = (props) => {
        if (props.productList.length > 0) {
            console.log(props.productList.length);
            return (
                props.productList.map((row) => {
                    return (
                        <TableRow key={row.productID} className="tableBodyRow">
                            <TableCell><label>{row.productName}</label></TableCell>
                            <TableCell><label>{row.productPrice}</label></TableCell>
                            <TableCell><label>{row.productQuantity}</label></TableCell>
                            <TableCell style={{textAlign:"center"}}>
                                    <UpdateIcon className={classes.updateIcon} onClick={updateProduct}/>
                                    <DeleteForeverIcon className={classes.deleteIcon} onClick={deleteProduct}/>
                            </TableCell>
                        </TableRow>
                    )
                })
            )
        }
    }

    return (
        <div className={classes.div}>
            <TableContainer component={Paper}>
                <Table aria-label="simple table">
                    <TableHead>
                        <TableRow className="tableHeadRow">
                            <TableCell><label>Product name</label></TableCell>
                            <TableCell><label>Product price (RM)</label></TableCell>
                            <TableCell><label>Product quantity</label></TableCell>
                            <TableCell style={{textAlign:"center"}}><label>Action</label></TableCell>
                        </TableRow>
                    </TableHead>

                    <TableBody>
                        {displayProduct(props)}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
};

export default ShowProduct;