import "./App.css";
import React, { Component } from "react";
import Navbar from "./Components/Navbar";
import News from "./Components/News";
import PropTypes from "prop-types";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

export class App extends Component {
  state = {
    progress: 0,
  };
  setProgress = (progress) => {
    this.setState({ progress: progress });
  };
  render() {
    return (
      <>
        <BrowserRouter>
          <Navbar />
          <LoadingBar
            height={4}
            color="#f11946"
            progress={this.state.progress}
          />
          <Routes>
            <Route
              exact
              path="/"
              element={
                <News
                  setProgress={this.setProgress}
                  key="general"
                  pageSize={15}
                  country="in"
                  category="general"
                />
              }
            />
            <Route
              exact
              path="/technology"
              element={
                <News
                  setProgress={this.setProgress}
                  key="technology"
                  pageSize={12}
                  country="in"
                  category="technology"
                />
              }
            />
            <Route
              exact
              path="/science"
              element={
                <News
                  setProgress={this.setProgress}
                  key="science"
                  pageSize={12}
                  country="in"
                  category="science"
                />
              }
            />
            <Route
              exact
              path="/health"
              element={
                <News
                  setProgress={this.setProgress}
                  key="health"
                  pageSize={12}
                  country="in"
                  category="health"
                />
              }
            />

            <Route
              exact
              path="/entertainment"
              element={
                <News
                  setProgress={this.setProgress}
                  key="entertainment"
                  pageSize={12}
                  country="in"
                  category="entertainment"
                />
              }
            />
            <Route
              exact
              path="/sport"
              element={
                <News
                  setProgress={this.setProgress}
                  key="sport"
                  pageSize={12}
                  country="in"
                  category="sport"
                />
              }
            />
            <Route
              exact
              path="/business"
              element={
                <News
                  setProgress={this.setProgress}
                  key="business"
                  pageSize={12}
                  country="in"
                  category="business"
                />
              }
            />
          </Routes>
        </BrowserRouter>
      </>
    );
  }
}

export default App;
