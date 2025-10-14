import React from 'react'
import { useState } from 'react';
import Catalog from './Catalog'
import Kart from './kart'
import AddItems from './addItems';
import camera from '../assets/camera.png';
import micro from '../assets/micro.png';
import lens from '../assets/lens.png';

export default function CatKart() {

    const [products, setProducts] = useState( [
        { nombre: "Camera", description: "Cámara acá bien pasada de lanza", src: camera, cantidad: 4, id: 1345 },
        { nombre: "Lens", description: "Lente pa ver más allá de lo evidente", src: lens, cantidad: 4, id: 1346 },
        { nombre: "Microphone", description: "Micrófono sexy... No necesita más descripción", src: micro, cantidad: 4, id: 1347 }
      ])

    const [productKart, setProductKart] = useState([])

     const add = (id) => {

      const wantedProduct = products.find((p) => p.id == id);
      const inStock = wantedProduct.cantidad;

      if (inStock > 0){
        const updatedProducts = products.map((p) => p.id == id ? { ...p, cantidad: p.cantidad - 1 } : p);
        setProducts(updatedProducts);

        const existing = productKart.find((p) => p.id == id);
        const productsKartCopy = [...productKart];

        if (existing) {
          // Si ya existe, solo incrementamos su cantidad en el carrito
          productsKartCopy.map((p) => (p.id == id ? p.cantidad = p.cantidad + 1  : p));
          setProductKart(productsKartCopy);
        } else {
          // Si no está, lo agregamos con cantidad 1
          const product = products.find((p) => p.id == id);
          setProductKart([...productKart, { ...product, cantidad: 1 }]);
        }

      } else {
        alert(`Ya no hay ` + wantedProduct.nombre + ` en Stock`);
      }

    }

    const del = (id) => {
        setProductKart(productKart.filter((p) => p.id !== id));
        
        const productInKart = productKart.find((p)=>p.id == id);
        const updatedProducts = products.map((p) => p.id === id ? { ...p, cantidad: p.cantidad + productInKart.cantidad } : p);
        setProducts(updatedProducts)
    }

  return (
    <div>
        <AddItems setProducts={setProducts} products={products}/>
        <Catalog products={products} onClick={add}/>
        <Kart products={productKart} onClick={del}/> 
    </div>
  )
}
