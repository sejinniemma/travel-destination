import React, { Component } from "react";
import Country from "./country";
import InputAddForm from "./inputAddForm";

export default class Countries extends Component {
  handleIncreament = (country) => {
    this.props.onIncrease(country);
  };

  handleDecreament = (country) => {
    this.props.onDecrease(country);
  };

  handleDelete = (country) => {
    this.props.onDelete(country);
  };

  handleAdd = (value) => {
    this.props.onAdd(value);
  };

  render() {
    return (
      <>
        <InputAddForm onAdd={this.handleAdd} />
        <ul className="countries">
          {this.props.countries.map((country) => (
            <Country
              key={country.id}
              country={country}
              onIncrease={this.handleIncreament}
              onDecrease={this.handleDecreament}
              onDelete={this.handleDelete}
            />
          ))}
        </ul>
        <button className="reset">reset</button>
      </>
    );
  }
}
