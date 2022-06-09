import React from "react";
import "../acordeon/acordion.css";
import { useState } from "react";
import Todo from "./todo/todo";
function Acordion() {
  const [selected, setSelected] = useState(null);
  const toggle = (i) => {
    if (selected === i) {
      return setSelected(null);
    }
    setSelected(i);
  };
  const data = [
    {
      skill: "Muy Importante",
      answer: <Todo />,
    },
    {
      skill: "Importante",
      answer: <Todo />,
    },
    {
      skill: "Poco Importante",
      answer: <Todo />,
    },
  ];
  return (
    <div className="wrapper">
      <div className="acordion">
        {data.map((item, i) => (
          <div className="item">
            <div className="title" onClick={() => toggle(i)}>
              <h2>{item.skill}</h2>
              <span>{selected === i ? "-" : "+"} </span>
            </div>
            <div className={selected === i ? "answer show" : "answer"}>
              {item.answer}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Acordion;
