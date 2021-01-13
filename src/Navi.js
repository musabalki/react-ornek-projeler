import React, { useState } from 'react';
import CartSummary from './CartSummary';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';
import {Link} from "react-router-dom"
const Navi = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">reactstrap</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
             <NavLink>
                <Link to="/form1">Form demo 1</Link>
             </NavLink>
            </NavItem>
            <NavItem>
             <NavLink>
                <Link to="/form2">Form demo 2</Link>
             </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
            </NavItem>
            <CartSummary removeFromCart={props.removeFromCart} cart={props.cart}></CartSummary>
          </Nav>
          
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Navi;