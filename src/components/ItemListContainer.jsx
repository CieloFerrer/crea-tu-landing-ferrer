import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductos, getProductosPorCategoria } from "../data/products";
import ItemList from "./ItemList";

const ItemListContainer = ({ greeting }) => {
  const [productos, setProductos] = useState([]);
  const { categoriaId } = useParams();

  useEffect(() => {
    const asyncFunc = categoriaId ? getProductosPorCategoria : getProductos;

    asyncFunc(categoriaId)
      .then((res) => setProductos(res))
      .catch((error) => console.log(error));
  }, [categoriaId]);

  return (
    <div>
      <h2>{greeting}</h2>
      <ItemList productos={productos} />
    </div>
  );
};

export default ItemListContainer;