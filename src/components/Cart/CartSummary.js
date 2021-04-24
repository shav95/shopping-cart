import React from 'react';
import './CartSummary.css';
import StripeCheckout from 'react-stripe-checkout';


function CartSummary({totalPrice, totalItems}) {

    const handelToken = (token, addresses) => {
        console.log({token, addresses});
    }

    return (
        <div className="summary">
            <h2>Cart Summary</h2>
            <p>TOTAL: ({totalItems}) <span>$ {totalPrice.toFixed(2)}</span></p>
            <StripeCheckout 
                stripeKey="pk_test_51IiUdUIgKjxCQPYKugMvLsqdeANAEvsf1dF7NtlnAJQOqwzPGzHjjEZjcXk6pSNBviYGorrIUGTQkjt0wC0j7XUH00x4vyKdfg"
                token={handelToken}
                billingAddress
                snippingAddress
                amount={+totalPrice.toFixed(2) * 100}
                reports
            />
        </div>
    )
}

export default CartSummary;
