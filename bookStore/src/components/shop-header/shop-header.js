import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import "./shop-header.css";

const ShopHeader = ({ total }) => {
  return (
    <header className="shop-header row">
      <Link className="logo text-dark" to="/">
        ReStore
      </Link>
      <Link className="shopping-cart" to="/cart">
        <i className="cart-icon fa fa-shopping-cart" />${total}
      </Link>
    </header>
  );
};

const mapStateToProps = (state) => {
  return {
    total: state.totalOrdered,
  };
};

export default connect(mapStateToProps)(ShopHeader);
