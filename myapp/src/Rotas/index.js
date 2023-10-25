import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Biografia from "../pages/biografia";
import SecaoFamosos from "../pages/secao-famosos";
import Contato from "../pages/contato";
function Rotas() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Biografia" element={<Biografia />} />
        <Route path="/Famosos" element={<SecaoFamosos />} />
        <Route path="/Contato" element={<Contato />} />
      </Routes>
    </BrowserRouter>
  );
}
export default Rotas;
