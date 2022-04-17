import ItemCount from "../ItemCount/ItemCount";
import './ItemDetail.css'

const ItemDetail = ({ nombre, img, precio, id, descripcion, stock }) => {
  return (
    <div className="detalle-productos">
      <h3>{nombre}</h3>
      <p> <strong>Precio:</strong> {precio}</p>
      <img className="img-productos" src={img} alt={nombre} />
      <p>{descripcion}</p> 
      <p> <strong>Stock:</strong> {stock} </p>
      <ItemCount />
    </div>
  );
};

export default ItemDetail;
