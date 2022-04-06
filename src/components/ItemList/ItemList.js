import Item from "../Item/Item";

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
