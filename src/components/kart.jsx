import React from 'react'

export default function Kart({products}) {

  return (
    <div className='flex flex-wrap fixed bottom-0 bg-blue-400 w-dvw p-4 justify-center gap-6'>
      {products.map((product) => (
        <div key={product.id} className='flex items-center shadow-gray-600 border border-gray-500 bg-white p-2.5 gap-2 rounded-lg'>
          <p>{product.nombre}</p>
          <p>Cant: {product.cantidad}</p>
          <button className='bg-gradient-to-tl from-purple-500 to-indigo-500 text-white p-2 rounded-full shadow-md flex text-center items-center
                                hover:bg-indigo-500 active:scale-95 transition-all duration-150 ease-in-out mt-2 mx-auto cursor-pointer'>
              x
            </button>
        </div>
      ))}
    </div>
  )
}
