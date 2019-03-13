import React, { Component, Fragment } from "react";
import ReactDOM from "react-dom";
import Header from "./layouts/Header";
import Deshboard from "./leads/Deshboard";

class App extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <div className="container">
          <Deshboard />
        </div>
      </Fragment>
    );
  }
}
ReactDOM.render(<App />, document.getElementById("app"));
