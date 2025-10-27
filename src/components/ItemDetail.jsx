import React from 'react';

function ItemDetail({ producto }) {
  return (
    <div className="item-detail">
      <img src={producto.imagen} alt={producto.nombre} />
      <h2>{producto.nombre}</h2>
      <p>{producto.descripcion}</p>
      <h3>${producto.precio}</h3>
      <button>Agregar al carrito</button>
    </div>
  );
}

export default ItemDetail;