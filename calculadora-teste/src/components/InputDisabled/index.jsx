import React, { Component } from 'react';

export default class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  render() {
    const { text } = this.props 
    return(
      <div class="inputDisabled">
        <label>
        {text}
        </label>
        <input
          type="text"
          value={this.state.value}
          onChange={this.handleChange}
          disabled
        />
      </div>
    )
  }
}