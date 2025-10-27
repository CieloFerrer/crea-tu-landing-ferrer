import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getProductoById } from '../data/products';
import ItemDetail from './ItemDetail';
import './ItemDetail.css';

function ItemDetailContainer() {
  const [producto, setProducto] = useState(null);
  const { itemId } = useParams();

  useEffect(() => {
    getProductoById(itemId).then(res => setProducto(res));
  }, [itemId]);

  return (
    <div style={{ textAlign: 'center', marginTop: '40px' }}>
      {producto ? <ItemDetail producto={producto} /> : <p>Cargando...</p>}
    </div>
  );
}

export default ItemDetailContainer;