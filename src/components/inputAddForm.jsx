import React, { Component } from "react";

export default class InputAddForm extends Component {
  inputRef = React.createRef();

  onSubmit = (event) => {
    event.preventDefault();
    const value = this.inputRef.current.value;
    console.log(value);
    this.props.onAdd(value);
    this.inputRef.current.value = "";
  };

  render() {
    return (
      <form className="input-form">
        <input
          className="input"
          ref={this.inputRef}
          type="text"
          placeholder="Which country..."
        />
        <button className="input-button" onClick={this.onSubmit}>
          Add
        </button>
      </form>
    );
  }
}
