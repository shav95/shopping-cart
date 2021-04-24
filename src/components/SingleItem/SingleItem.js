import React from 'react';
import "./SingleItem.css";
import { connect } from 'react-redux';
import { addToCart } from '../../redux/Shopping/shopping-actions';

function SingleItem({ item, addToCart }) {
    return (
        <div className="singleItem">
            <img src={item.image} alt="item" />
            <div className="singleItem__info">
                <h1>{item.title}</h1>
                <p>{item.description}</p>
                <h2>$ {item.price}</h2>
                <button onClick={() => addToCart(item.id)} className="btn-add">Add To Cart</button>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        item: state.shop.currentItem.item
    }
}

export default connect(mapStateToProps, {
    addToCart
})(SingleItem);
