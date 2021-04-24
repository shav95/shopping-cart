import React from 'react';
import './Product.css';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { addToCart, loadCurrentItem } from '../../../redux/Shopping/shopping-actions';

function Product({ productData, addToCart, loadCurrentItem }) {
    return (
        <div className="product">
            <img className="product__img" src={productData.image} alt={productData.title} />
            <div className="product__info">
                <h3>{productData.title}</h3>
                <p>{productData.description}</p>
                <h2>$ {productData.price}</h2>
            </div>
            <div className="product--btn">
                <Link to={`product/${productData.id}`}>
                    <button onClick={() => loadCurrentItem(productData)} className="btn-view">View Item</button>
                </Link>
                <button onClick={() => addToCart(productData.id)} className="btn-add">Add To Cart</button>
            </div>
        </div>
    )
}

//we can add our dispatch action by creating mapDispatchToProps 

// const mapDispatchToProps = (dispatch) => {
//     return {
//         addToCart: (id) => dispatch(addToCart(id))
//     }
// }

// or we can just destructure {addToCart}
export default connect(null, {
    addToCart,
    loadCurrentItem
})(Product);
