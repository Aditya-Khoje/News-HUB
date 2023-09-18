import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class News extends Component {
  render() {
    return (
      <>
        <div className="container my-3">
          <h1>Top Headlines</h1>
          <div className="row">
            <div className="col-md-4 my-3">
              <NewsItem title="myTitle" description="myDescription" />
            </div>
            <div className="col-md-4 my-3">
              <NewsItem title="myTitle" description="myDescription" />
            </div>
            <div className="col-md-4 my-3">
              <NewsItem title="myTitle" description="myDescription" />
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default News;
