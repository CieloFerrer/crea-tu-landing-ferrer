import { Link } from "react-router-dom";
import "./ItemListContainer.css";

const Item = ({ id, nombre, precio, imagen }) => {
  return (
    <div className="card">
      <img src={imagen} alt={nombre} />
      <h3>{nombre}</h3>
      <p>${precio}</p>
      <Link to={`/item/${id}`} className="btn-detalle">
        Ver detalle
      </Link>
    </div>
  );
};

export default Item;