import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class Cart extends React.Component {
  render() {
    return (
      <>
        <Link to="/">BACK</Link>
        <h1>THIS IS CART PAGE</h1>
        <h2>TOTAL ORDER: {this.props.order}</h2>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    order: state.totalOrder,
  };
};

export default connect(mapStateToProps)(Cart);
