import "./Item.css";
import { Link } from "react-router-dom";
import { muestraEnMiles } from "../../services/muestraEnMiles";

const Item = ({ nombre, img, precio, id, categoria }) => {
  return (
        <div className={categoria}>
          <div className="contenedor-card">
            <div className="nombre-y-precio-item">
              <h3>{nombre}</h3>
              <p>Precio: $ {muestraEnMiles(precio)}</p>
            </div>
            <img className="img-productos" src={img} alt={nombre} />
            <div className="link-ver-detalles">
              <Link to={`/detalle/${id}`}>
                <button> Ver detalles </button>
              </Link>
            </div>
          </div>
        </div>
  );
};

export default Item;
