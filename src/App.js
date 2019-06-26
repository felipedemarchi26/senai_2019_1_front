import React, { Component } from 'react';
import './App.css';
import CriarUsuario from './components/criar-usuario';
import ListarUsuarios from './components/listar-usuarios';
import {BrowserRouter, Route, Link} from 'react-router-dom';

class App extends Component {
  render() {
	  return (
		<BrowserRouter>
			<ul>
				<li><Link to="/usuario/cadastrar">Cadastrar Usuário</Link></li>
				<li><Link to="/usuario/listar">Listar Usuários</Link></li>
			</ul>
			<div>
				<Route exact path="/usuario/cadastrar/:id?" component={CriarUsuario} />
				<Route exact path="/usuario/listar" component={ListarUsuarios} />
			</div>
		</BrowserRouter>
		/*<div>
			<CriarUsuario />
			<ListarUsuarios />
		</div>*/
	  );
  }
}

export default App;
