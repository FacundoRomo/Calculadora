import './boton.css'

function Boton(props) {

  const esOperador = valor => {
    return isNaN(valor) && (valor !== '.') && (valor !== '=') && (valor !== "clear")
  };

  return (
    <div
      className={`boton-contenedor ${esOperador(props.children) ? "operador" 
                                    : props.children === "clear" ? 'boton-clear' : ''}`.trimEnd()}
        onClick={props.children !== 'clear' ? (() => props.manejarClic(props.children)) : (() => props.manejarClicClear())}>
      {props.children}
    </div>
  )
}

export default Boton;