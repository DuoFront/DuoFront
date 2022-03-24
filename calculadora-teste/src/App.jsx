import React, { Component } from 'react';

import Select from './components/Select'
import Input from './components/Input'
import InputRadio from './components/InputRadio'
import InputCheck from './components/InputCheck';
import InputDisabled from './components/InputDisabled';

export default class App extends Component {

  render(){
    return (
      <div>
        <h1>Calculadora ST</h1>

        <form class="form">
          <div class="form1">
            <div class="formGroup">
              <div class="item6">
                <p>Por favor, preencha todos os campos para obter resultados</p>
              </div>
              <Select 
                text="Estado de origem"
              />
              <Select 
                text="Estado de destino"
              />
              <Input
                text="Valor do produto"
              />
              <Input
                text="Frete"
              />
              <Input
                text="Outras despesas"
              />
              <Input
                text="IPI"
              />
              <Input
                text="Descontos incondicionais"
              />
              <Input
                text="Valor total mercadoria"
                disabled={true}
              />
              <InputRadio/>
            </div>
            <div style={{width: '100%'}}>
              <h2>ICMS OPERAÇÃO PRÓPRIA</h2>

              <div className="formGroup ">          
                  <Input
                    text="Valor total mercadoria"
                    disabled={true}
                  />
                  <Input
                    text="Alíquota"
                  />
                  <Input
                    text="Alíquota"
                  />
                  <Input
                    text="Alíquota"
                  />
                  <InputCheck
                  text="Base reduzida"
                  />
                  <Input
                    text="Redução da base (percentual tributável)"
                  />
                  <div class="item6">
                    <Input
                      text="Redução da base (percentual tributável)"
                    />
                  </div>

              </div>
            </div>
          </div>

          <div className="form1">
          <div style={{width: '100%'}}>

          <h2>ICMS OPERAÇÃO PRÓPRIA</h2>

          <div className="formGroup ">
          
              <Input
                text="Valor total mercadoria"
                disabled={true}
              />
              <Input
                text="Alíquota"
              />
              <InputCheck
              text="Base reduzida"
              />
              <Input
                text="Redução da base (percentual tributável)"
              />
              <div class="item6">
                <Input
                  text="Redução da base (percentual tributável)"
                />
              </div>

          </div>
          </div>

          <div class="lastFormGroup">
            <InputDisabled
            text="ICMS ST TOTAL (R$)"
            />
            <InputDisabled
            text="ICMS OPERAÇÃO PRÓPRIA (R$)"
            />
            <InputDisabled
            text="ICMS ST Á RECOLHER (R$)"
            />
            <div class="btns">
              <button>TESTE</button>
              <button>TESTE</button>
              <button>TESTE</button>
            </div>
          </div>
          </div>
          
        </form>
      </div>
    )
  }
}