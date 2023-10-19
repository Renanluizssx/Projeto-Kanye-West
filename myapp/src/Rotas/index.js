import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Biografia from "../pages/biografia";
import SecaoFamosos from "../pages/secao-famosos";
function Rotas() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Biografia" element={<Biografia />} />
        <Route path="/Famosos" element={<SecaoFamosos />} />
      </Routes>
    </BrowserRouter>
  );
}
export default Rotas;
