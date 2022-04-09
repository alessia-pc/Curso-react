import ItemCount from "../ItemCount/ItemCount";

const ItemDetail = ({ nombre, img, precio, id, descripcion }) => {
  return (
    <div className={id}>
      <h3>{nombre}</h3>
      <p>Precio: {precio}</p>
      <img className="img-productos" src={img} alt={nombre} />
      <p>{descripcion}</p>
      <ItemCount />
    </div>
  );
};

export default ItemDetail;
