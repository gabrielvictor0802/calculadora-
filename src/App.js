import React, { Component } from "react";
import "./App.css"

class App extends Component {
  state = {
    n1: "",
    n2: "",
    result: ""
  };

  multiplicação = () => {
    this.setState({
      result: this.state.n1 * this.state.n2
    });
  };

  divisão = () => {
    this.setState({
      result: this.state.n1 / this.state.n2
    });
  };

  somar = () => {
    this.setState({
      result: this.state.n1 + this.state.n2
    });
  };

  subitração = () => {
    this.setState({
      result: this.state.n1 - this.state.n2
    });
  };

  limpar = () => {
    this.setState({
      n1:"",
      n2:"",
      result: ""
    });
  };

  handleChangen1 = (event) => {
    this.setState({
     n1: Number(event.target.value)
    });
  };

  handleChangen2 = (event) => {
    this.setState({
      n2: Number(event.target.value)
    });
  };


  render () {
    return (
      <div className="linhas">
        <h1 className="titulo">Calculadora</h1>
        <input value={this.state.n1} onChange= {this.handleChangen1}/>
        <input value={this.state.n2} onChange= {this.handleChangen2}/>
        <div className="botoes">
          <button onClick={this.divisão}>/</button>
          <button onClick={this.multiplicação}>*</button>
          <button onClick={this.subitração}>-</button>
          <button onClick={this.somar}>+</button>
          <button onClick={this.limpar}>limpar</button>
        </div>
        <h2 className="resul">{this.state.result}</h2>
      </div>
    );
  }
}

export default App;
