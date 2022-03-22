import React, { Component } from "react";

class Country extends Component {
  render() {
    return (
      <li className="country">
        <span className="country-name">Hawaii</span>
        <span className="country-count">8</span>
        <button className="country-button country-increase">
          <i className="fa-solid fa-jet-fighter-up"></i>
        </button>
        <button className="country-button country-decrease ">
          <i className="fa-solid fa-house-chimney-window"></i>
        </button>
        <button className="country-button country-delete">
          <i className="fa-solid fa-trash-can"></i>
        </button>
      </li>
    );
  }
}

export default Country;
