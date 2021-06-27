import React from 'react';
import {Table,Button, Form,} from "reactstrap";
import FormDemo1 from "./FormDemo1"
class ProductList extends React.Component {
    
    render() {
        return (
            <div>
               
                <h3>{this.props.info.title} - {this.props.currentCategory}</h3>
                <Table>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Product Name</th>
                            <th>Unit Price</th>
                            <th>Quantity Per Unit</th>
                            <th>Units In Stock</th>
                            <th>Ekle</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                           this.props.products.map((product)=>(
                           <tr key={product.id}>
                               <td>{product.id}</td><td>{product.productName}</td><td>{product.unitPrice}</td><td>{product.quantityPerUnit}</td><td>{product.unitsInStock}</td><td><Button onClick={()=>this.props.addToCart(product)} color="info">Add</Button></td>
                           </tr>))
                        }
                        
                    </tbody>
                </Table>
            </div>);
    }
}

export default ProductList;