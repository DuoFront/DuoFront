import React, { Component } from 'react';

export default class Select extends Component {

  handleChange(e){
    e.preventDefault();
    const Valor = e.target.value;
    this.props.funcao(Valor);
  }

  render(){
    const { text } = this.props 
    return(
      <div class="inputGroup">
        <label>{text}</label>
        <select onChange={this.handleChange.bind(this)}>
          <option value="">selecione...</option>
          <option 
            value="teste"
            key="1"
          >
            teste
          </option>
        </select>
      </div>
    )
  }
}