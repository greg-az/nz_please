import React, { Component } from 'react';

export default class Products extends Component {

    render() {
        const productItems = this.props.productList.map(product => (
            <div className="col-md-4" key={product.name}>
                <div className="text-center">
                    <p>{product.name}</p>
                    <p>Price: {product.price}</p>
                    <button className="btn btn-primary" onClick={(e) => this.props.handleAddToCart(e, product)}>Add to cart</button>
                </div>
            </div>
        ));

        return (
            <div className="row">
                {productItems}
            </div>
        );
    }
}

