import remera from "../assets/remera.png";
import botella from "../assets/botella.png";
import gorra from "../assets/gorra.png";
import mochila from "../assets/mochila.png";
import campera from "../assets/campera.png";

const productos = [
  {
    id: 1,
    nombre: "Remera Outdoor",
    descripcion: "Remera técnica para actividades al aire libre.",
    precio: 12000,
    categoria: "indumentaria",
    imagen: remera,
  },
  {
    id: 2,
    nombre: "Gorra Valle",
    descripcion: "Gorra liviana y respirable, ideal para días de sol.",
    precio: 8000,
    categoria: "accesorios",
    imagen: gorra,
  },
  {
    id: 3,
    nombre: "Campera Softshell",
    descripcion: "Campera impermeable y cortaviento para montaña.",
    precio: 35000,
    categoria: "indumentaria",
    imagen: campera,
  },
  {
    id: 4,
    nombre: "Mochila 30L",
    descripcion: "Mochila liviana con múltiples bolsillos.",
    precio: 25000,
    categoria: "accesorios",
    imagen: mochila,
  },
  {
    id: 5,
    nombre: "Botella de acero",
    descripcion: "Botella térmica para bebidas frías o calientes.",
    precio: 9000,
    categoria: "equipamiento",
    imagen: botella,
  },
];

// 🔄 Simula una llamada asincrónica con Promises
export const getProductos = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(productos);
    }, 1000);
  });
};

export const getProductoById = (idProducto) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const producto = productos.find((p) => p.id === parseInt(idProducto));
      resolve(producto);
    }, 1000);
  });
};

export const getProductosPorCategoria = (categoria) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(productos.filter((prod) => prod.categoria === categoria));
    }, 500);
  });
};