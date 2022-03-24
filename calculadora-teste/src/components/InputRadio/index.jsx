import React, { Component } from "react";

export default class InputRadio extends Component {
  render(){
    return (
      <div>
        <input type="checkbox" id="huey" name="drone" value="huey"/>
        <label for="huey">Consumidor final</label>
      </div>
    )
  }
}