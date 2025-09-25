import React from 'react'

export default function Catalog() {
  const products = [
    { nombre: "Camera", cantidad: 4, id: 1345 },
    { nombre: "Lens", cantidad: 4, id: 1346 },
    { nombre: "Microphone", cantidad: 4, id: 1347 }
  ]

  return (
    <div className="flex flex-wrap justify-center gap-4 p-4">
      {products.map((product) => (
        <div
          key={product.id}
          className="w-4/12 border border-gray-500 shadow-md p-4 text-center rounded-2xl"
        >
          <p className="text-lg font-semibold">{product.nombre}</p>
          <p className="text-sm text-gray-600">Cantidad: {product.cantidad}</p>
        </div>
      ))}
    </div>
  )
}
