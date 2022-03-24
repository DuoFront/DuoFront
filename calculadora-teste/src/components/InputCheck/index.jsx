import React, { Component } from "react";

export default class InputCheck extends Component {
  render(){
    const { text } = this.props;
    return (
      <div>
        <div>
          <label for="scales">{text}</label>
          <input type="radio" id="scales" name="scales"/>
          <input type="radio" id="scales" name="scales"/>
        </div>
      </div>
    )
  }
}