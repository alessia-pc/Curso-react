import React from "react";
import "./ItemCount.css";
import { useState } from "react";



const ItemCount = (props) => {
  const [count, setCount] = useState(1);

  const onAdd = (condition) => {
    if (condition === "+") {
      setCount(count + 1);
    }
    if (condition === "-") {
      setCount(count - 1);
    }
  };

  const stock = 15;
  const initial = 1;

  return (
    <div className="BotonesProductos">
      <div className="BotonesItemCount">
        <button
          onClick={() => {
            if (count > initial) {
              onAdd("-");
            }
          }}
        >
          -
        </button>
        {count}
        <button
          onClick={() => {
            if (count < stock) {
              onAdd("+");
            }
          }}
        >
          +
        </button>
        <button>Agregar al carrito</button>
      </div>
    </div>
  );
};

export default ItemCount;
