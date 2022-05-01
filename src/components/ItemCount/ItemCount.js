import React from "react";
import "./ItemCount.css";
import { useState } from "react";

function ItemCount({ stock = 0, initial = 1, onAdd }) {
  const [cuenta, setCount] = useState(initial);

  function incrementar() {
    if (cuenta < stock) {
      setCount(cuenta + 1);
    }
  }

  function decrementar() {
    if (cuenta > 0) {
      setCount(cuenta - 1);
    }
  }
  return (
    <div>
      <button onClick={decrementar}>-</button>
      <span>{cuenta}</span>
      <button onClick={incrementar}>+</button>
      <button onClick={() => onAdd(cuenta)}> Agregar al carrito </button>
    </div>
  );
}
export default ItemCount;
