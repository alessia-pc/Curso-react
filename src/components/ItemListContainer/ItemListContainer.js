import { useState, useEffect } from "react";
import { getProducts } from "../../asyncmock";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import Spinner from "../Spinner/Spinner";


const ItemListContainer = (props) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

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

      {loading ? (
        <Spinner />
      ) : products ? (
        <ItemList {...products}  />
      ) : (
        <h1>El producto no existe</h1>
      )}

    </div>
  );
  
};

export default ItemListContainer;
