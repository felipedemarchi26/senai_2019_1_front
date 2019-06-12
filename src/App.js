import React, { Component } from 'react';
import './App.css';
import ComponenteExemplo from './components/componente-exemplo';

class App extends Component {
  constructor(props) {
	  super(props);

	  this.state = {
		  texto: 'Texto do State',
		  textoDigitado: "",
		  textoDigitado2: ""
	  };

	  this.onClick = this.onClick.bind(this);
	  this.onChange = this.onChange.bind(this);
  }

  onClick() {
	this.setState({
		texto: 'Texto Alterado'
	});
  }

  onChange(e) {
	  this.setState({
		  textoDigitado: e.target.value
	  });
  }

  render() {
	  return (
		<div>
			<p>Parágrafo 1</p>
			<p>Parágrafo 2</p>
			<ComponenteExemplo />
			<button onClick={this.onClick}>Teste Botão</button>
			<p> {this.state.texto} </p>
			<input type="text" onChange={this.onChange}/>
			<p> {this.state.textoDigitado} </p>
			<input type="text" onChange={this.onChange}/>
			<p> {this.state.textoDigitado2} </p>
		</div>
	  );
  }
}

export default App;
