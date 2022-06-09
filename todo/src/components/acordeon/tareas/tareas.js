import React from "react";
import "../tareas/tarea.css";
import Pomodoro from "../../pomodoro/pomodoroClock";
import {
  AiFillCloseCircle,
} from "react-icons/ai";

function Tarea({
  id,
  texto,
  completada,
  completarTarea,
  eliminarTarea,
}) {
  return (
    <div
      className={completada ? "tarea-container completada" : "tarea-container"}
    >
      <div className="tarea-texto" onClick={() => completarTarea(id)}>
        {texto}
      </div>
      <div>
        <AiFillCloseCircle
          className="tarea-icono"
          onClick={() => eliminarTarea(id)}
        />
      </div>
      <Pomodoro />
    </div>
  );
}

export default Tarea;
