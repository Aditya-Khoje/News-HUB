import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let { title, description } = this.props;
    return (
      <>
        <div className="card" style={{ width: "18rem" }}>
          <img
            src="https://photos5.appleinsider.com/gallery/56390-114529-000-lead-USB-C-charging-port-xl.jpg"
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <a href="#" className="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>
      </>
    );
  }
}

export default NewsItem;
