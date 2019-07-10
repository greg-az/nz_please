import React, { Component } from 'react';

class Cart extends Component {

    render() {
        const { cartItems } = this.props;
        return (
            <div className="alert alert-info">
                {cartItems.length === 0
                    ? "Cart is empty" :
                    <div>You have {cartItems.length} items in the Cart. <hr /></div>
                }

                {cartItems.length > 0 &&
                    <div>
                        <ul>
                            {cartItems.map(item =>
                                <li>
                                <b>key={item.name} {item.price} </b> &times; {item.count} = {item.price * item.count}  
                                <button className="btn btn-danger btn-sm mx-1" onClick={(e) => this.props.handleRemoveFromCart(e, item)}>&times;</button>
                                </li>
                            )}
                        </ul>
                        Total price: {(cartItems.reduce((acc, cur) => acc + cur.price*cur.count, 0).toFixed(2))} $
                    </div>
                }

                <hr />

                <button className ="btn btn-success btn-block">Check Out</button>

            </div>
        )
    }
}

export default Cart;