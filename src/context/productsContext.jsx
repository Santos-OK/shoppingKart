import { createContext, useContext, useState } from "react";
import React from 'react'

////////////////////Crear el contexto///////////////////////
const ProductsContext = createContext()

////////////////////Crear el provider///////////////////////

export default function ProductsProvider({children}) {
    const [theme, setTheme] = useState("dark")
  return (
    <div>
        <ProductsContext.Provider value={{theme, setTheme}}>
            {children}
        </ProductsContext.Provider>
    </div>
  )
}

////////////////////Crear hook///////////////////////

export default function useProducts() {
  return useContext(productsContext);
}
