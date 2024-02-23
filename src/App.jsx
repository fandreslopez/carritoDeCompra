import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Mujeres from "./Pages/Mujeres";
import Hombres from "./Pages/Hombres";
import Ninos from "./Pages/Ninos";
import Tienda from "./Pages/Tienda";
import Producto from "./Pages/Producto";
import { useState, createContext } from "react";

export const CarritoCompra = createContext();

function App() {
  const [carrito, setCarrito] = useState([]);

  return (
    <>
      <CarritoCompra.Provider value={carrito}>
        <NavBar />
        <Routes>
          <Route path="/" element={<Tienda />}></Route>
          <Route path="/mujeres" element={<Mujeres />}></Route>
          <Route path="/hombres" element={<Hombres />}></Route>
          <Route path="/ninos" element={<Ninos />}></Route>
          <Route
            path="/producto/:id"
            element={<Producto setCarrito={setCarrito} carrito={carrito} />}
          ></Route>
        </Routes>
      </CarritoCompra.Provider>
    </>
  );
}

export default App;
