import React, { Component } from 'react';
import axios from 'axios';
import ErroComponent from './erro-component';

class CriarUsuario extends Component {
  constructor(props) {
      super(props);

      this.state = {
            nome: "",
            email: "",
            cpf: "",
            dataNascimento: "",
            descricao: "",
            errors: [],
            mensagem: null
      };

      //this.onChange = this.onChange.bind(this);
      this.salvar = this.salvar.bind(this);
  }

  onChange = (e) => {
      this.setState({
          [e.target.name]: e.target.value
      });
  }

  salvar(e) {
      e.preventDefault();

      const usuario = {
          nome: this.state.nome,
          email: this.state.email,
          cpf: this.state.cpf,
          dataNascimento: this.state.dataNascimento,
          descricao: this.state.descricao
      }
      
      axios
        .post('http://localhost:8080/exemplo/usuario/salvar', 
            usuario)
        .then(res => {
            this.setState({
                nome: "",
                email: "",
                dataNascimento: "",
                cpf: "",
                descricao: "",
                errors: [],
                mensagem: "Usuário salvo com sucesso!"
            });
        })
        .catch(error => {
            this.setState({
                errors: error.response.data,
                mensagem: null
            });
        })
  }

  render() {
    return (
		<div>
            {this.state.mensagem && (
                <div>{this.state.mensagem}</div>
            )}
            <form onSubmit={this.salvar}>

                <label>Nome: </label>
                <input type="text" name="nome" onChange={this.onChange} value={this.state.nome}/>
                <ErroComponent erro={this.state.errors.nome} />
                <br/>

                <label>E-mail: </label>
                <input type="text" name="email" onChange={this.onChange} value={this.state.email} />
                <ErroComponent erro={this.state.errors.email} />
                <br/>

                <label>Cpf: </label>
                <input type="text" name="cpf" onChange={this.onChange} value={this.state.cpf}/>
                <ErroComponent erro={this.state.errors.cpf} />
                <br/>

                <label>Data de Nascimento: </label>
                <input type="text" name="dataNascimento" onChange={this.onChange} value={this.state.dataNascimento}/>
                <ErroComponent erro={this.state.errors.dataNascimento} />
                <br/>

                <label>Descrição: </label>
                <input type="text" name="descricao" onChange={this.onChange} value={this.state.descricao}/>
                <ErroComponent erro={this.state.errors.descricao} />
                <br/>

                <button type="Submit">Salvar</button>

            </form>

		</div>
	  );
  }
}

export default CriarUsuario;
