import React, {Component} from 'react';
import axios from 'axios';

class ListarUsuarios extends Component {
    constructor(props) {
        super(props)

        this.state = {
            usuarios: []
        }
    }

    componentWillMount() {
        axios.get("http://localhost:8080/exemplo/usuario/listar-todos")
            .then(response => {
                this.setState({usuarios: response.data});
            });
    }

    render() {
        return(
            <table>
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>E-mail</th>
                        <th>CPF</th>
                        <th>Data de Nascimento</th>
                        <th>Descrição</th>    
                    </tr>
                </thead>
                <tbody>
                    {this.state.usuarios.map(usuario => 
                        <tr key={usuario.idUsuario}>
                            <td>{usuario.nome}</td>
                            <td>{usuario.email}</td>
                            <td>{usuario.cpf}</td>
                            <td>{usuario.dataNascimento}</td>
                            <td>{usuario.descricao}</td>
                        </tr>
                    )}   
                </tbody>                
            </table>
        )
    }


}

export default ListarUsuarios;