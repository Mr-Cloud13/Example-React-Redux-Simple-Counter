import React from "react";
import { connect } from "react-redux";
import { ActionType } from "../../redux/action";
import { Link } from "react-router-dom";

class Counter extends React.Component {
  render() {
    return (
      <>
        <Link to="/">BACK</Link>
        <h1>THIS IS COUNTER PAGE</h1>
        <button onClick={this.props.handleMinus}>-</button>
        <h2>{this.props.order}</h2>
        <button onClick={this.props.handlePlus}>+</button>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    order: state.totalOrder,
  };
};

const mapActionToProps = (action) => {
  return {
    handlePlus: () => action({ type: ActionType.PLUS }),
    handleMinus: () => action({ type: ActionType.MINUS }),
  };
};

export default connect(mapStateToProps, mapActionToProps)(Counter);
