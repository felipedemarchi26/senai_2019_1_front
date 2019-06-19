import React, { Component } from 'react';
import './App.css';
import CriarUsuario from './components/criar-usuario';
import ListarUsuarios from './components/listar-usuarios';

class App extends Component {
  render() {
	  return (
		<div>
			<CriarUsuario />
			<ListarUsuarios />
		</div>
	  );
  }
}

export default App;
