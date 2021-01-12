import './App.css';
import CategoryList from './CategoryList';
import Navi from './Navi';
import ProductList from './ProductList';
import { Container, Row, Col } from "reactstrap";
//import { render } from '@testing-library/react';
import React from 'react';
import {Switch,Route} from "react-router-dom"
import NotFound from './NotFound';
import CartList from './CartList';
class App extends React.Component {
  state = {
    currentCategory: '',
    products: [],
    cart:[]
  }
  changeCategory = (category) => {
    this.setState({ currentCategory: category.categoryName })
    this.getProducts(category.id)
  }
  getProducts = (id) => {
    let url = "http://localhost:3000/products";
    if (id) {
      url += "?categoryId=" + id;
    }
    fetch(url).then(response => response.json())
      .then(data => this.setState({ products: data }))
  }
  /*getProducts= ()=>{
    fetch("http://localhost:3000/products").then(response=>response.json())
    .then(data=>this.setState({products:data}))
  }*/
  componentDidMount() {
    this.getProducts();
  }
  addToCart=(product)=>{
    let newCart=this.state.cart;
    var addedItem=newCart.find(c=>c.product.id===product.id);
    if(addedItem){
      addedItem.quantity+=1;
    }
    else{
      newCart.push({product:product,quantity:1})
    }
    this.setState({cart:newCart});
  }
  removeFromCart=(product)=>{
    let newCart=this.state.cart;
    var count=this.state.cart.find(c=>c.product.id===product.id);
    console.log(count);
    if(count.quantity===1){
      newCart=this.state.cart.filter((p)=>p.product.id!==product.id)
    }
    else{
      count.quantity-=1;
    }
    this.setState({cart:newCart})
  }
  render() {
    let productInfo = { title: "productList" }
    let categoryInfo = { title: "categoryList" }
    return (
      <div>
        <Container>
          <Navi removeFromCart={this.removeFromCart} cart={this.state.cart}></Navi>
          <Row>
            <Col xs="3">
              <CategoryList currentCategory={this.state.currentCategory} changeCategory={this.changeCategory} info={categoryInfo}></CategoryList>
            </Col>
            <Col xs="9">
              <Switch>
                <Route exact path="/" render={
                  props=>(<ProductList {...props} addToCart={this.addToCart} currentCategory={this.state.currentCategory} products={this.state.products} info={productInfo}></ProductList>)
                }/>
                <Route exact path="/cart" render={
                  props=>(<CartList {...props} removeFromCart={this.removeFromCart} cart={this.state.cart}></CartList>)
                } />
                <Route component={NotFound} />
              </Switch>

            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
