import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import './App.css';
import Products from './components/Products/Products';
import SingleItem from './components/SingleItem/SingleItem';
import Cart from './components/Cart/Cart';

import { connect } from 'react-redux';

function App({ currentItem }) {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <Switch>
          <Route path='/' exact component={Products} />
          <Route path="/cart" exact component={Cart} />
          {
            !currentItem ? (
              <Redirect to="/" />
            ) : (
              <Route path="/product/:id" component={SingleItem} exact />
            )
          }
        </Switch>
      </div>
    </Router>
  );
}

const mapStateToProps = (state) => {
  return {
    currentItem: state.shop.currentItem
  }
}

export default connect(mapStateToProps)(App);
