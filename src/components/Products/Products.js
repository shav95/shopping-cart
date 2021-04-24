import React from 'react';
import './Products.css';
import Product from './Product/Product';
import { connect } from 'react-redux';

function Products({ products }) {
    return (
        <div className="products">
            {products.map(prod => (
                <Product key={prod.id} productData={prod}/>
            ))}   
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        products: state.shop.products
    }
}

export default connect(mapStateToProps)(Products);
