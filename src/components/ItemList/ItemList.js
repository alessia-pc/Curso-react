import Item from "../Item/Item";
import '../Item/Item.css'

const ItemList = ({ products }) => {
  return (
    <ul className="container-productos">
      {products.map((prod) => (
        <Item key={prod.id} {...prod} />
      ))}
    </ul>
  );
};

export default ItemList;
