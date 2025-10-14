import React from 'react'


export default function Kart({products, onClick}) {

  return (
    <>
      <div className='flex flex-wrap fixed bottom-4 overflow-x-auto flex-shrink-0 min-w-max pb-2 left-1/2 transform -translate-x-1/2 bg-blue-400 w-8/12 items-center justify-center gap-6 rounded-2xl'>
          
          {products.map((product) => (
            <div key={product.id} className='w-36 h-36 flex flex-row  items-center shadow-gray-600 border border-gray-500 bg-white p-2 m-2 gap-1 rounded-lg justify-between overflow-hidden ' >
              {/* Imagen */}
              <div className='flex justify-center items-center h-10 flex-shrink-0'>
                <img 
                  className="w-10 h-10 object-contain" 
                  src={product.src} 
                  alt="producto"
                />
              </div>
              {/* Contenido */}
              <div className='flex flex-col items-center justify-center gap-1 w-full'>
                <div className='text-xs font-bold text-center leading-tight'>
                  <p>{product.nombre}</p>
                </div>
                
                <div>
                  <p className='bg-purple-500/50 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold'>
                    {product.cantidad}
                  </p>
                </div>
                  
                <button 
                  onClick={() => onClick(product.id)} 
                  className='bg-gray-500/50 hover:bg-gradient-to-tl from-purple-500 to-indigo-500 text-white p-1 rounded-lg shadow-md flex items-center justify-center w-full gap-1 text-xs hover:bg-indigo-500 active:scale-95 transition-all duration-150 ease-in-out cursor-pointer'
                >
                  <div className='bg-gray-400/50 rounded-full w-5 h-5 flex items-center justify-center text-xs '>
                    🗑️
                  </div> 
                  <span>Quitar</span>
                </button>
              </div>
            </div>
          ))}
        {/* Texto arriba del carrito */}
        
        {products.length > 0 && (<div className='fixed bottom-38 left-1/5 transform -translate-x-8/12 text-center shadow-gray-800 '>
          <p className='font-bold text-white bg-blue-500/80 px-4 py-2 rounded-full shadow-lg'>
            Productos en el carrito: <span className='bg-gray-400/50 rounded-full w-6 h-6 inline-block text-center leading-6 ml-2'>{products.length}</span>
          </p>
        </div>)}
      </div>
      </>
  )
}
