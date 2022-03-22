import "./app.css";
import Countries from "./components/countries";
import Navbar from "./components/navbar";

import React, { Component } from "react";

class App extends Component {
  state = {
    countries: [
      {
        id: 1,
        name: "Hawaii",
        count: 0,
      },
      {
        id: 2,
        name: "Australia",
        count: 0,
      },
      {
        id: 3,
        name: "Canada",
        count: 0,
      },
    ],
  };

  handleIncreament = (country) => {
    const countries = this.state.countries.map((item) => {
      if (item.id == country.id) {
        return { ...country, count: country.count + 1 };
      }
      return item;
    });

    this.setState({ countries });
  };

  handleDecreament = (country) => {
    const countries = this.state.countries.map((item) => {
      const count = country.count - 1;
      if (item.id == country.id) {
        return { ...country, count: count < 0 ? 0 : count };
      }
      return item;
    });
    this.setState({ countries });
  };

  handelDelete = (country) => {
    const countries = this.state.countries.filter(
      (item) => item.id !== country.id
    );
    this.setState({ countries });
  };

  render() {
    return (
      <>
        <Navbar
          totalCount={
            this.state.countries.filter((item) => item.count > 0).length
          }
        />
        <Countries
          countries={this.state.countries}
          onIncrease={this.handleIncreament}
          onDecrease={this.handleDecreament}
          onDelete={this.handelDelete}
        />
      </>
    );
  }
}

export default App;
