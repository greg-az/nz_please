import React, { Component } from 'react';
import Products from './components/Products';
import Cart from './components/Cart';
import products from './data/data.js';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      productList: [],
      cartItems: []
    }

    this.handleAddToCart = this.handleAddToCart.bind(this);
    this.handleRemoveFromCart = this.handleRemoveFromCart.bind(this);
  }

  componentWillMount() {

    this.setState({
        productList: products
    });

    if (localStorage.getItem('cartItems')){
      this.setState({
        cartItems: JSON.parse(localStorage.getItem('cartItems'))
      });
    }
  }

  handleRemoveFromCart(e, item) {
   
    this.setState(state => {
      const cartItems = state.cartItems.filter(cartItem => item.name !== cartItem.name );
      localStorage.setItem('cartItems', JSON.stringify(cartItems));
      return {cartItems};
    });

  }

  handleAddToCart(e, product) {
    this.setState(state => {
      const { cartItems } = state;
      let isProductInCart = false;

      cartItems.forEach(item => {
        if (item.name === product.name) {
          isProductInCart = true;
          item.count++;
        }
      });

      if (!isProductInCart) {
        cartItems.push({ ...product, count: 1 });
      }

      localStorage.setItem("cartItems", JSON.stringify(cartItems));
      return cartItems;

    })
  }

  listProducts() {
    this.setState(state => {
      return { productList: state.products }
    })
  }

  render() {
    return (
      <div className="container">
        <h1>Ezyvet test :)</h1>
        <hr />
        <div className="row">
          <div className="col-md-8">
            <Products
              productList={this.state.productList}
              handleAddToCart={this.handleAddToCart}
            />
          </div>
          <div className="col-md-4">
            <Cart cartItems={this.state.cartItems} handleRemoveFromCart={this.handleRemoveFromCart} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
