import { useState } from 'react';
import './App.css';
import Boton from './component/boton/boton';
import Pantalla from './component/pantalla/pantalla';
import { evaluate } from 'mathjs';

function App() {

  const [input, setInput] = useState('');

  const agregarInput = val => {
    setInput(input + val);
  };

  const clearCalculadora = () =>{
    setInput('')
  }

  const calcularResultado = () =>{
    setInput(evaluate)
  }

  return (
    <div className="App">
      <div className="title-contenedor">
        <h1 className="title">Calculadora</h1>
      </div>
      <div className="Calculadora-contenedor">
        <Pantalla input={input}/>
        <div className="teclas-calculadora">
          <div className="fila">
            <Boton manejarClic={agregarInput}>7</Boton>
            <Boton manejarClic={agregarInput}>8</Boton>
            <Boton manejarClic={agregarInput}>9</Boton>
            <Boton manejarClic={agregarInput}>*</Boton>
          </div>
          <div className="fila">
            <Boton manejarClic={agregarInput}>4</Boton>
            <Boton manejarClic={agregarInput}>5</Boton>
            <Boton manejarClic={agregarInput}>6</Boton>
            <Boton manejarClic={agregarInput}>-</Boton>
          </div>
          <div className="fila">
            <Boton manejarClic={agregarInput}>1</Boton>
            <Boton manejarClic={agregarInput}>2</Boton>
            <Boton manejarClic={agregarInput}>3</Boton>
            <Boton manejarClic={agregarInput}>+</Boton>
          </div>
          <div className="fila">
            <Boton manejarClic={agregarInput}>0</Boton>
            <Boton manejarClic={agregarInput}>.</Boton>
            <Boton manejarClic={calcularResultado}>=</Boton>
            <Boton manejarClic={agregarInput}>/</Boton>
          </div>
          <div className="fila">
            <Boton manejarClicClear={clearCalculadora}>clear</Boton>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
