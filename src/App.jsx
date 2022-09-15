
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./Pages/Home";
import { IngresoVisacion } from "./Pages/IngresoVisacion";
import { ObjetadasVisacion } from "./Pages/ObjetadasVisacion";
import { ReporteVisacion } from "./Pages/ReporteVisacion";
import { SeguimientoVisacion } from "./Pages/SeguimientoVisacion";

function App() {

 
  return (

     

      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home/>}/>
          </Route>
          <Route path="/ingresoVisacion">
            <Route index element={<IngresoVisacion/>}/>
          </Route>
          <Route path="/seguimientoVisacion">
            <Route index element={<SeguimientoVisacion/>}/>
          </Route>
          <Route path="/visacionesObjetadas">
            <Route index element={<ObjetadasVisacion/>}/>
          </Route>
          <Route path="/reporteVisacion">
            <Route index element={<ReporteVisacion/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
