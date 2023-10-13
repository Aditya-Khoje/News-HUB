import React, { Component } from "react";
import loading from "../1495.gif";

export class Spinner extends Component {
  render() {
    return (
      <>
        <div className="text-center">
          <img src={loading} alt="Loading" className="my-4" />
        </div>
      </>
    );
  }
}

export default Spinner;
