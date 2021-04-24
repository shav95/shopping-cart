import React, { useState, useEffect} from 'react';
import './Navbar.css'
import { Link } from 'react-router-dom';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import StorefrontIcon from '@material-ui/icons/Storefront';

import { connect } from 'react-redux';


function NavBar({ cart }) {

    const [cartCount, setCartCount] = useState(0)

    useEffect(() => {
        let count = 0;
        cart.forEach((item) => {
            count += item.qty;
        });

        setCartCount(count);
    },[cart, cartCount])

    return (
        <div className="navbar">
            <Link to="/">
                <div className="navbar__logo">
                    <h1>Shop With Us</h1>
                    <StorefrontIcon className="navbar__logoIcon" />
                </div>
            </Link>
            <Link to="/cart">
                <div className="navbar__basket">
                    <h2>Basket</h2>
                    <AddShoppingCartIcon className="navbar__basketIcon" />
                    <div className="navbar__basketCounter">{cartCount}</div>
                </div>
            </Link>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        cart: state.shop.cart
    }
}

export default connect(mapStateToProps)(NavBar);
