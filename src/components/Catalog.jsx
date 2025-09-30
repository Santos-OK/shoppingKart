import React, { useState } from 'react'

export default function Catalog({products, onClick}) {

  return (
    <div className=" flex flex-wrap justify-center gap-4 p-4">
      {products.map((product) => (
        <div
          key={product.id} 
          className="w-3/12 aspect-square border border-gray-500 shadow-md p-3 rounded-2xl 
                     flex flex-col justify-between items-center 
                     hover:shadow-2xl hover:shadow-gray-500 hover:scale-105 transition-all duration-300"
                    >

          {product.src ? (
            <img src={product.src} alt="image" className="w-8/12 aspect-square object-contain " />
          ) : (
            <div className="w-24 h-24 bg-gray-200 flex items-center justify-center">image</div>
          )}

          <div>
            <p className="text-sm text-gray-400 italic text-center">{product.description}</p>
            <p className="text-lg text-indigo-500 font-semibold text-center">{product.nombre}</p>
            <p className="text-sm text-indigo-300 text-center">Cantidad: {product.cantidad}</p>
            <button onClick={()=>(onClick(product.id))} className='bg-gradient-to-tl from-purple-500 to-indigo-500 text-white px-6 py-2 rounded-lg shadow-md flex text-center items-center
                                hover:bg-indigo-500 active:scale-95 transition-all duration-150 ease-in-out mt-2 mx-auto cursor-pointer' >
              ADD
            </button>
          </div>
        </div>
      ))}
    </div>
  )
}
