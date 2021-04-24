import React, { useState } from 'react'
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import { removeFromCart, adjustQty } from '../../redux/Shopping/shopping-actions';
import './CartItem.css'
import { connect } from 'react-redux';

function CartItem({ itemData, removeFromCart, adjustQty }) {

    const [input, setInput] = useState(itemData.qty)

    const handleChange = (e) => {
        setInput(e.target.value);
        adjustQty(itemData.id, e.target.value)
    }
    return (
        <div className="cartItem">
            <img className="cartItem__img" src={itemData.image} alt={itemData.title} />
            <div className="cartItem__info">
                <h3>{itemData.title}</h3>
                <p>{itemData.description}</p>
                <h2>$ {itemData.price}</h2>
            </div>
            <div className="cartItem__logic">
                <div className="cartItem__logicInput">
                    <h3>{itemData.qty}</h3>
                    <input min="1" type="number" id="qty" name="qty" value={input} onChange={handleChange} />
                </div>
                <DeleteOutlineIcon onClick={() => removeFromCart(itemData.id)} className="cartItem__logicIcon" />
            </div>
        </div>
    )
}

export default connect(null, {
    removeFromCart,
    adjustQty 

})(CartItem);
