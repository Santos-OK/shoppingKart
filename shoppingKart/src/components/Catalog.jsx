import React from 'react'
import camera from '../assets/camera.png';
import micro from '../assets/micro.png';
import lens from '../assets/lens.png';



export default function Catalog() {
  const products = [
    { nombre: "Camera", src: camera, cantidad: 4, id: 1345 },
    { nombre: "Lens", src: lens, cantidad: 4, id: 1346 },
    { nombre: "Microphone", src: micro, cantidad: 4, id: 1347 }
  ]

  return (
    <div className=" flex flex-wrap justify-center gap-4 p-4">
      {products.map((product) => (
        <div
          key={product.id}
          className="w-lvh border border-gray-500 shadow-md p-4 rounded-2xl flex justify-center items-center 
                      hover:shadow-3xl hover:shadow-gray-500 hover:translate-y-3 hover:scale-105 hover:m-4 transition-all 1s"
        >
          {product.src ? (
            <img src={product.src} alt="image" className="w-24 h-24 object-contain " />
          ) : (
            <div className="w-24 h-24 bg-gray-200 flex items-center justify-center">image</div>
          )}
          <div>
            <p className="text-lg text-indigo-500 font-semibold text-center">{product.nombre}</p>
            <p className="text-sm text-indigo-300 text-center">Cantidad: {product.cantidad}</p>
          </div>
        </div>
      ))}
    </div>
  )
}
