import React, { useState } from "react";
import Formulario from "../../fumulario/formulario";
import "../tareas/listaDeTareas.css";
import Tarea from "./tareas";

function ListaDeTareas() {
  const [tareas, setTareas] = useState([]);

  const agregarTarea = (tarea) => {
    if (tarea.texto.trim()) {
      tarea.texto = tarea.texto.trim();

      const tareasActualizada = [tarea, ...tareas];
      setTareas(tareasActualizada);
    }
  };

  const completarTarea = (id) => {
    const tareasActualizada = tareas.map((tarea) => {
      if (tarea.id === id) {
        tarea.completada = !tarea.completada;
      }
      return tarea;
    });
    setTareas(tareasActualizada);
  };
  const eliminarTarea = (id) => {
    const tareasActualizada = tareas.filter((tarea) => tarea.id !== id);
    setTareas(tareasActualizada);
  };
  return (
    <>
      <Formulario onSubmit={agregarTarea} />
      <div className="tarea-lista-contenedor">
        {/* MAP VA A TOMAR C/U DE LAS TAREAS, Y VA
              A CREAR UN NUEVO COMPONENTE /OBJETO
               CON ESA INFORMACION,   */}
        {tareas.map((tarea) => (
          // KEY IDENTIF A LOS ELEMENTOS EN LA LISTA Y DEBE SER
          // Y HAY QUE PASAR TB EL ID
          <Tarea
            key={tarea.id}
            id={tarea.id}
            texto={tarea.texto}
            completada={tarea.completada}
            completarTarea={completarTarea}
            eliminarTarea={eliminarTarea}
          />
        ))}
      </div>
    </>
  );
}

export default ListaDeTareas;
