import { useContext } from "react"
import CartContext from "../../context/CartContext"

const ItemCart = ({id, nombre, precio, quantity}) => {

    const {removeItem} =  useContext(CartContext)

  return (
    <div>
      <p>{nombre}</p>
      <p>$ {precio}</p>
      <p>SubTotal: $ {quantity * precio} </p>
      <p>Cantidad: {quantity}</p>
      <button onClick={() => removeItem(id)}>X</button>
    </div>
  );
}

export default ItemCart