import Header from "./components/header"
import CatKart from "./components/CatKart"
import ProductsProvider from "./context/productsContext"

import { BrowserRouter } from "react-router"

function App() {

  return (
    <>
      <BrowserRouter>
        <ProductsProvider>
          <Header />
          <CatKart />
        </ProductsProvider>
      </BrowserRouter>
    </>
  )
}

export default App
