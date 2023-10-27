import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { LinkContainer } from "react-router-bootstrap";
function Navegacao() {
  return (
    <Navbar fixed="top" bg="" data-bs-theme="dark">
      <Nav className="w-100 d-flex justify-content-end">
        <LinkContainer to="/">
          <Nav.Link>Home</Nav.Link>
        </LinkContainer>
        <LinkContainer to="/Biografia">
          <Nav.Link>Biografia</Nav.Link>
        </LinkContainer>
        <LinkContainer to="/Contato">
          <Nav.Link>Contato</Nav.Link>
        </LinkContainer>
      </Nav>
    </Navbar>
  );
}

export default Navegacao;
