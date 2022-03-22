import React, { Component } from "react";

class Country extends Component {
  handleIncreament = () => {
    this.props.onIncrease(this.props.country);
  };

  handleDecreament = () => {
    this.props.onDecrease(this.props.country);
  };

  handelDelete = () => {
    this.props.onDelete(this.props.country);
  };

  render() {
    const { name, count } = this.props.country;
    return (
      <li className="country">
        <span className="country-name">{name}</span>
        <span className="country-count">{count}</span>
        <button
          className="country-button country-increase"
          onClick={this.handleIncreament}
        >
          <i className="fa-solid fa-jet-fighter-up"></i>
        </button>
        <button
          className="country-button country-decrease"
          onClick={this.handleDecreament}
        >
          <i className="fa-solid fa-house-chimney-window"></i>
        </button>
        <button
          className="country-button country-delete"
          onClick={this.handelDelete}
        >
          <i className="fa-solid fa-trash-can"></i>
        </button>
      </li>
    );
  }
}

export default Country;
