import React, { Component } from 'react';
import {
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem, Badge,NavItem,NavLink
} from 'reactstrap';
import { Link } from 'react-router-dom'

class CartSummary extends Component {
    state = {}
    renderSummary() {
        return (
            <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                    Your Cart - {this.props.cart.length}
                </DropdownToggle>
                <DropdownMenu right>
                    {
                        this.props.cart.map((p) => {
                            return (
                            <DropdownItem key={p.product.id}>
                                <Badge onClick={()=>{this.props.removeFromCart(p.product)}} color="danger">x</Badge>
                                {p.product.productName}-
                                <Badge color="success">{p.quantity}</Badge>
                            </DropdownItem>)
                        })
                    }
                    <DropdownItem divider />
                    <DropdownItem>
                        <Link to="/cart">Sepete Git</Link>
              </DropdownItem>
                </DropdownMenu>
            </UncontrolledDropdown>
        )
    }
    renderEmptyCart=()=>{
        return (<NavItem><NavLink>Empty Cart</NavLink></NavItem>)
    }
    render() {
        return ( <div>{this.props.cart.length>0 ? this.renderSummary() : this.renderEmptyCart() }</div>  );
    }
}

export default CartSummary;