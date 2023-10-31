import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Biografia from "../pages/Biografia";
import SecaoFamosos from "../pages/SecaoFamosos";
import Contato from "../pages/contato";
import Agradecimento from "../pages/agradecimento";
function Rotas() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Biografia" element={<Biografia />} />
        <Route path="/Famosos" element={<SecaoFamosos />} />
        <Route path="/Contato" element={<Contato />} />
        <Route path="/Agradecimento" element={<Agradecimento />} />
      </Routes>
    </BrowserRouter>
  );
}
export default Rotas;
