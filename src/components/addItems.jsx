import React, { useState } from 'react'
import {useProducts} from "../context/productsContext"

export default function AddItems({products, setProducts}) {

    const {theme, setTheme} = useProducts;

    const [visible, setVisible] = useState(false)

    const [product, setProduct] = useState({nombre:"", description:"", cantidad:1, src:null, id: Date.now()})

    const saveImage = (e)=>{
        const file = e.target.files[0]
        if(file){
            setProduct({...product, src:URL.createObjectURL(file)})
        }
    }

    const addProduct = (e) => {
        e.preventDefault();
        console.log(products)
        console.log(product)
        const updatedProducts = Array.isArray(products) ? [...products, product] : [product]
        setProducts(updatedProducts)
        
        setProduct({
            nombre: "", 
            description: "", 
            cantidad: 1, 
            src: null, 
            id: Date.now()
        })
    }
    

  return (
    <div>
        <div className='flex justify-center'>
            <div className='flex flex-wrap bg-blue-400 w-8/12 p-2 justify-center gap-6 m-2 rounded-full'>
                <p>Add Items {theme}</p>
                <div>
                    <button onClick={()=>setVisible(!visible)} className='cursor-pointer hover:scale-105 active:scale-95 transition-all duration-150 ease-in-out '>
                        {visible?"⬆":"⬇"}
                    </button>
                </div>
            </div>
             
        </div>
        <div className='flex justify-center'>
                {visible&&(
                <form action="" onSubmit={addProduct} className='flex flex-wrap flex-col bg-white w-8/12 p-2 justify-center items-center gap-6 m-2 rounded'>
                    <label className='flex text-center' htmlFor="nombre"> NOMBRE: </label>
                    <input 
                    className='flex justify-center bg-gray-300 m-2 p-1 border rounded' 
                    type="text" 
                    placeholder='nombre' 
                    id='nombre'
                    required
                    value={product.nombre}
                    onChange={(e)=>setProduct({...product, nombre: e.target.value})}
                    />
                    <label className='flex text-center flex-wrap' htmlFor="descripcion"> DESCRIPCIÓN: </label>
                    <input 
                    className='flex justify-center flex-wrap bg-gray-300 m-2 p-1 border rounded' 
                    type="text" 
                    placeholder='descripción' 
                    id='descripción'
                    required
                    value={product.description}
                    onChange={(e)=>setProduct({...product, description: e.target.value})}
                    />
                    <label className='flex text-center flex-wrap' htmlFor="cantidad"> CANTIDAD: </label>
                    <input 
                    className='flex justify-center flex-wrap bg-gray-300 m-2 p-1 border rounded' 
                    type="number" 
                    placeholder='cantidad' 
                    id='cantidad'
                    min={1}
                    required
                    value={product.quantity}
                    onChange={(e)=>setProduct({...product, cantidad: e.target.value})}
                    />
                    <label className='flex text-center flex-wrap' htmlFor="imagen"> IMAGEN: </label>
                    <input 
                    className='flex justify-center flex-wrap bg-gray-300 m-2 p-1 border rounded file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100' 
                    type="file" 
                    accept='image/*'
                    placeholder='imagen' 
                    id='imagen'
                    required
                    onChange={saveImage}
                    />
                    <button onClick={addProduct} className=' bg-gray-500 text-white px-6 py-2 rounded-lg shadow-md flex text-center items-center
                                hover:bg-gradient-to-tl from-purple-500 to-indigo-500 active:scale-95 transition-all duration-150 ease-in-out mt-2 mx-auto cursor-pointer' >
                                    + Agregar
                    </button>
                </form>
                )}
            </div> 
    </div>
  )
}
