import React from "react";
import "./ItemCount.css";

const ItemCount = ({ onAdd, stock, initial, count }) => {
  return (
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
  );
};

export default ItemCount;
