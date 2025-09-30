import React from 'react'
import { useState } from 'react';
import Catalog from './Catalog'
import Kart from './kart'
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

        const productsCopy = [...products]
        const product = productsCopy.find((p)=>(p.id == id))
        const productsKartCopy = [...productKart, product]

        setProductKart(productsKartCopy)
    }

    const del = () => {
        
    }

  return (
    <div>
        <Catalog products={products} onClick={add} />
        <Kart products={productKart} /> 
    </div>
  )
}
