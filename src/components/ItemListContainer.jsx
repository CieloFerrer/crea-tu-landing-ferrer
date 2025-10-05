import React from "react";
import "./ItemListContainer.css";

function ItemListContainer({ greeting }) {
  return (
    <div className="item-container">
      <h1 className="item-title">{greeting}</h1>
      <p className="item-subtitle">Explorá nuestros productos destacados</p>
    </div>
  );
}

export default ItemListContainer;