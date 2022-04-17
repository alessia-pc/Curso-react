import "./Item.css";
/* import ItemCount from "../ItemCount/ItemCount"; */
import { Link } from "react-router-dom";

const Item = ({ nombre, img, precio, id }) => {
  return (
    <div className={id}>
      <h3>{nombre}</h3>
      <p>Precio: {precio}</p>
      <img className="img-productos" src={img} alt={nombre} />
      {/* <ItemCount /> */}
      <Link to={`/detalle/${id}`}>
        <button> Ver detalles </button>
      </Link>
    </div>
  );
};

export default Item;
