import React, { Component } from "react";

export default class Navbar extends Component {
  render() {
    return (
      <nav className="navbar">
        <h1 className="navbar-title">Travel Destination</h1>
        <span className="navbar-icon">
          <i class="fa-solid fa-earth-americas"></i>
        </span>
        <span className="navbar-count">{this.props.totalCount}</span>
      </nav>
    );
  }
}
