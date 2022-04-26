import React from "react";
import "./ItemCount.css";
import { useState } from "react";

function ItemCount({ stock = 0, initial = 1, onAdd }) {
  const [count, setCount] = useState(initial);

  function incrementar() {
    if (count < stock) {
      setCount(count + 1);
    }
  }

  function decrementar() {
    if (count > 0) {
      setCount(count - 1);
    }
  }
  return (
    <div>
      <button onClick={decrementar}>-</button>
      <span>{count}</span>
      <button onClick={incrementar}>+</button>
      <button onClick={() => onAdd(count)}> Agregar al carrito </button>
    </div>
  );
}
export default ItemCount;
