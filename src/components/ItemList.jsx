import Item from "./Item";
import "./ItemListContainer.css";

const ItemList = ({ productos }) => {
  return (
    <div className="item-list">
      {productos.map((producto) => (
        <Item key={producto.id} {...producto} />
      ))}
    </div>
  );
};

export default ItemList;