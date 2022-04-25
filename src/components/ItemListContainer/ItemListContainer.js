import { useState, useEffect } from "react";
import { getProducts } from "../../asyncmock";
import { getProductsByCategoriaId } from "../../asyncmock";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import Spinner from "../Spinner/Spinner";

const ItemListContainer = (props) => {
  const [products, setProducts] = useState([]);

  const [loading, setLoading] = useState(true);

  const { categoriaId } = useParams();

  useEffect(() => {
    setLoading(true);
    getProductsByCategoriaId(categoriaId)
      .then((prods) => {
        setProducts(prods);
        console.log(prods);
      })
      .catch((error) => {
        console.log(error);
      })

      .finally(() => {
        setLoading(false);
      });
  }, [categoriaId]);

  return (
    <div>
      <h1>{props.greeting}</h1>

      {loading ? (
        <Spinner />
      ) : products ? (
        <ItemList products={products} />
      ) : (
        <h1>El producto no existe</h1>
      )}
    </div>
  );
};

export default ItemListContainer;
