import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/pages/home";
import Counter from "./components/pages/counter";
import Cart from "./components/pages/cart";

class App extends React.Component {
  render() {
    return (
      <Router>
        <Route exact path="/" component={Home} />
        <Route path="/counter" component={Counter} />
        <Route path="/cart" component={Cart} />
      </Router>
    );
  }
}

export default App;
