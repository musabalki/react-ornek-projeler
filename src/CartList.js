import React, { Component } from 'react';
import {Table,Button} from "reactstrap"

class CartList extends Component {
    renderCart(){
        return (
            <Table striped>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Category ID</th>
                        <th>Product Name</th>
                        <th>Unit Price</th>
                        <th>Units In Stock</th>
                        <th>Quantity</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.props.cart.map((cartItem,index)=>(
                        <tr key={index}>
                            <td>{cartItem.product.id}</td>
                            <td>{cartItem.product.categoryId}</td>
                            <td>{cartItem.product.productName}</td>
                            <td>{cartItem.product.unitPrice}</td>
                            <td>{cartItem.product.unitsInStock}</td>
                            <td>{cartItem.quantity}</td>
                            <td>
                                <Button color="danger" onClick={()=>this.props.removeFromCart(cartItem.product)}>
                                    Remove
                                </Button>
                            </td>
                        </tr>)
                        )
                    }
                </tbody>
            </Table>
        )
    }
    render() {
        return (
            <div>
                CartList
                {this.renderCart()}
            </div>
        );
    }
}

export default CartList;