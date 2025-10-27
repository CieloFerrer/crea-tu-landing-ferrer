import React from 'react';
import './ItemDetail.css';

function ItemDetail({ producto }) {
  return (
    <div className="item-detail-wrapper">
      <div className="item-detail-image">
        <img src={producto.imagen} alt={producto.nombre} />
      </div>
      <div className="info-container">
        <h2>{producto.nombre}</h2>
        <p>{producto.descripcion}</p>
        <h3>${producto.precio}</h3>
        <button>Agregar al carrito</button>
      </div>
    </div>
  );
}

export default ItemDetail;