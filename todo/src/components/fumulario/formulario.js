import React, { useState } from "react";
import "../fumulario/formulario.css";
import {v4 as uuidv4} from 'uuid'

function Formulario(props) {
  const [input, setInput] = useState("");
  const manejarCambio = (e) => {
    // EXTRAE EL VALOR DEL CAMPO DE TEXTO
    setInput(e.target.value);
  };
  const manejarEnvio = (e) => {
    // EVITA QUE SE RECARGUE LA APP
    e.preventDefault();

    const tareaNueva = {
      id: Math.random() + uuidv4,
      texto: input,
      completado: false,
    };
      props.onSubmit(tareaNueva);
       };
  return (
    <form className="tarea-formulario" onSubmit={manejarEnvio}>
      <input
        className="tarea-input"
        type="text"
        placeholder="Añadir Tarea"
        name="texto"
        onChange={manejarCambio}

      />
      <button className="tarea-boton">Añadir Tarea</button>
    </form>
  );
}

export default Formulario;
