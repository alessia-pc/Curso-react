import "./App.css";
/* import { useState } from "react"; */
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import Inicio from "./components/Inicio/Inicio";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contacto from "./components/Contacto/Contacto";

const App = () => {
  /*  const [show, setShow] = useState('list') */

  return (
    <div className="App">
      {/* <NavBar />
      {show === "list" ? <ItemListContainer /> : null}
      {show === "detail" ? <ItemDetailContainer /> : null} */}
      <BrowserRouter>
        <NavBar />
        <Routes>
          {/*  <Route path="/inicio" element={App}/> 
          <Route path="/productos" element={<ItemListContainer />} />
          <Route path="/detalle" element={<ItemDetailContainer />} />

          <Route path="*" element={<h1 className="error-404">NOT FOUND 404</h1>} /> */}
          <Route path="/" element={<Inicio />} />
          <Route path="/inicio" element={<Inicio />} />
          <Route path="/productos" element={<ItemListContainer />} />
          <Route
            path="/productos/:categoriaId"
            element={<ItemListContainer />}
          />
          <Route path="/detalle/:productId" element={<ItemDetailContainer />} />
          <Route path="/contacto" element={<Contacto />}></Route>

          <Route
            path="*"
            element={<h1 className="error-404">NOT FOUND 404</h1>}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
