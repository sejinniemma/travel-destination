import React, { Component } from "react";
import Country from "./country";

export default class Countries extends Component {
  handleIncreament = (country) => {
    this.props.onIncrease(country);
  };

  handleDecreament = (country) => {
    this.props.onDecrease(country);
  };

  handelDelete = (country) => {
    this.props.onDelete(country);
  };

  render() {
    return (
      <ul className="countries">
        {this.props.countries.map((country) => (
          <Country
            key={country.id}
            country={country}
            onIncrease={this.handleIncreament}
            onDecrease={this.handleDecreament}
            onDelete={this.handelDelete}
          />
        ))}
      </ul>
    );
  }
}
