import React from 'react'
import { useNavigate } from 'react-router'

export default function Header() {
  const nav = useNavigate();
  return (
    <div className='bg-gradient-to-tl from-purple-500 to-indigo-500 flex justify-center  cursor-pointer rounded-4xl p-6'>
      
      <a onClick={()=>nav('/agregar')}><p className='font-josefin text-white p-2 text-3xl'> Agregar</p></a>
      <a onClick={()=>nav('/')}><p className='font-josefin text-white p-2 text-3xl'> Catálogo </p></a>
      <a onClick={()=>nav('/carrito')}><p className='font-josefin text-white p-2 text-3xl'> Carrito </p></a>
    </div>

  )
}
