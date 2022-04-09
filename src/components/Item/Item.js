import "./Item.css";
import ItemCount from "../ItemCount/ItemCount"

const Item = ({ nombre, img, precio, id }) => {
  return (
    <div className={id}>
      <h3>{nombre}</h3>
      <p>Precio: {precio}</p>
      <img className="img-productos" src={img} alt={nombre} />
      <ItemCount />
      <button>Ver detalles</button>
    </div>
  );
};

export default Item;
