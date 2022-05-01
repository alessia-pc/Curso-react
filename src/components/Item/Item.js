import "./Item.css";
import { Link } from "react-router-dom";

const Item = ({ nombre, img, precio, id, categoria}) => {
  return (
    <div className={categoria}>
      <h3>{nombre}</h3>
      <p>Precio: $ {precio}</p>
      <img className="img-productos" src={img} alt={nombre} />
      <Link to={`/detalle/${id}`}>
        <button> Ver detalles </button>
      </Link>
    </div>
  );
};

export default Item;
