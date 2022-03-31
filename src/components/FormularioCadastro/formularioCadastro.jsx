import React, { Component } from "react";
import "./estilo.css";

export class FormularioCadastro extends Component {
  constructor(props) {
    super(props);
    this.titulo = "";
    this.texto = "";
  }

  handleTitulo(evento) {
    evento.stopPropagation();
    this.titulo = evento.target.value;
  }

  handleTexto(evento) {
    evento.stopPropagation();
    this.texto = evento.target.value;
  }

  criarNota(evento) {
    evento.preventDefault();
    evento.stopPropagation();
    this.props.criarNota(this.titulo, this.texto);
  }

  render() {
    return (
      <form className="form-cadastro" onSubmit={this._criarNota.bind(this)}>
        <input
          type="text"
          placeholder="Título"
          className="form-cadastro_input"
          onChange={this.handleTitulo.bind(this)}
        />
        <textarea
          placeholder="Escreva sua nota..."
          rows={15}
          className="form-cadastro_input"
          onChange={this.handleTexto.bind(this)}
        />
        <button
          className="form-cadastro_input form-cadastro_submit"
          onClick={this.criarNota.bind(this)}
        >
          Criar Nota
        </button>
      </form>
    );
  }
}

export default FormularioCadastro;
