import React, { Component } from 'react';

class ProdutoComponent extends Component {
    render() {
        return(
        <div>
            <p>Nome: {this.props.nome}</p>
            <p>Quantidade: {this.props.quantidade}</p>
            <p>Valor: {this.props.valor}</p>
            <p>Índice: {this.props.indice}</p>
        </div>
        );
    }
}

export default ProdutoComponent;