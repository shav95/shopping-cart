import React, { useState, useEffect } from 'react';
import './Cart.css';
import CartSummary from './CartSummary';
import CartItem from './CartItem';

import { connect } from 'react-redux';

function Cart({ cart }) {

    const [totalPrice, setTotalPrice] = useState(0);
    const [totalItems, setTotlItems] = useState(0);

    useEffect(() => {
        let items = 0;
        let price = 0;
        cart.forEach((item) => {
            items += item.qty;
            price += item.qty * item.price
        })
        setTotalPrice(price);
        setTotlItems(items);

    },[cart, totalPrice, totalItems, setTotalPrice, setTotlItems])

    return (
        <div className="cart">
            <div className="cartItems">
                {cart.map(item => (
                    <CartItem key={item.id} itemData={item} />
                ))}
            </div>
            <CartSummary totalPrice = {totalPrice} totalItems={totalItems} />
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        cart: state.shop.cart
    }
}

export default connect(mapStateToProps)(Cart);
