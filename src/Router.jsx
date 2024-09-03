import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Teste from "./pages/Teste";
import Sobre from "./pages/Sobre";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/teste" element={<Teste />}/>
        <Route path="/sobre" element={<Sobre />} />
      </Routes>
    </BrowserRouter>
  );
}
 
export default Router;