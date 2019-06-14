import React, { Component } from 'react';
import axios from 'axios';

class CriarUsuario extends Component {
  constructor(props) {
      super(props);

      this.state = {
            nome: "",
            email: "",
            cpf: "",
            dataNascimento: "",
            descricao: ""
      }

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
            console.log("Salvo")
        });
  }

  render() {
	  return (
		<div>
            <form onSubmit={this.salvar}>

                <label>Nome: </label>
                <input type="text" name="nome" onChange={this.onChange} />
                <br/>

                <label>E-mail: </label>
                <input type="text" name="email" onChange={this.onChange} />
                <br/>

                <label>Cpf: </label>
                <input type="text" name="cpf" onChange={this.onChange} />
                <br/>

                <label>Data de Nascimento: </label>
                <input type="text" name="dataNascimento" onChange={this.onChange} />
                <br/>

                <label>Descrição: </label>
                <input type="text" name="descricao" onChange={this.onChange} />
                <br/>

                <button type="Submit">Salvar</button>

            </form>

		</div>
	  );
  }
}

export default CriarUsuario;
