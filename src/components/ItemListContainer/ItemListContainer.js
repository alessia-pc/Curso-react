import { useState, useEffect } from "react";
import { getProducts } from "../../asyncmock";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";


const ItemListContainer = (props) => {
  const [products, setProducts] = useState([]);

  const { categoriaId } = useParams();

  useEffect(() => {
    getProducts(categoriaId)
      .then((prods) => {
        setProducts(prods);
        console.log(prods)
      })
      .catch((error) => {
        console.log(error);
      });
  }, [categoriaId]);

  return (
    <div>
      <h1>{props.greeting}</h1>
      <ItemList products={products} />
    </div>
  );
};

export default ItemListContainer;
