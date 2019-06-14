import React, { Component } from 'react';
import './App.css';
import ComponenteExemplo from './components/componente-exemplo';
import ProdutoComponent from './components/produto-component';
import CriarUsuario from './components/criar-usuario';

class App extends Component {
  constructor(props) {
	  super(props);

	  this.state = {
		  texto: 'Texto do State',
		  textoDigitado: "",
		  textoDigitado2: "",
		  produtos: [
			  {
				  nome: "Produto 1",
				  valor: "R$1000.00",
				  quantidade: 10
			  },
			  {
				  nome: "Produto 2",
				  valor: "R$500.45",
				  quantidade: 25
			  },
			  {
				  nome: "Produto 3",
				  valor: "R$750.00",
				  quantidade: 22,
			  }
		  ]
	  };

	  this.onClick = this.onClick.bind(this);
	  this.onChange = this.onChange.bind(this);
  }
  //https://github.com/felipedemarchi26/senai_2019_1_front
  onClick() {
	this.setState({
		texto: 'Texto Alterado'
	});
  }

  onChange(e) {
	this.setState({
		[e.target.name]: e.target.value
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
			<input type="text" name="textoDigitado" onChange={this.onChange}/>
			<p> {this.state.textoDigitado} </p>
			<input type="text" name="textoDigitado2" onChange={this.onChange}/>
			<p> {this.state.textoDigitado2} </p>
			{
				console.log(this.state.produtos)
			}
			
			{this.state.produtos.map((produto, index) => 
				<ProdutoComponent
					key={index} 
					nome={produto.nome} 
					quantidade={produto.quantidade} 
					valor={produto.valor} 
					indice={index}/>
			)}

			<CriarUsuario />
		</div>
	  );
  }
}

export default App;
