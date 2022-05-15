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
    if (cuenta > 1) {
      setCount(cuenta - 1);
    }
  }
  return (
    <div>
      <button className="btn-decrementar" onClick={decrementar}>
        -
      </button>
      <span className="num-cuenta">{cuenta}</span>
      <button className="btn-incrementar" onClick={incrementar}>
        +
      </button>
      <button className="btn-anadir-al-carrito" onClick={() => onAdd(cuenta)}>
        Agregar al carrito
      </button>
    </div>
  );
}
export default ItemCount;
