import React from "react";
import "./ItemCount.css";
import { useState } from "react";


function ItemCount ({stock, onAdd}) {

  const [count, setCount] = useState(0)

  function incrementar() {
  if(count < stock) {
    setCount(count + 1)
  }
  }

  function decrementar() {
    if(count > 0) {
      setCount(count - 1)
    }
  }
return (
  <div>
    <button onClick={decrementar}>-</button>
    <span>{count}</span>
    <button onClick={incrementar}>+</button>
    <button onClick={() => onAdd(count)}> Agregar al carrito</button>
  </div>
)

}
export default ItemCount;


/* 

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
        <button className="agregar" onClick={() => onAdd(count)}>
          {" "}
          Agregar al carrito{" "}
        </button>
      </div>
    </div>
  );
}; */


