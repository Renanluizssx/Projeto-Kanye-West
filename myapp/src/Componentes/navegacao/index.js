import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { LinkContainer } from "react-router-bootstrap";
function Navegacao() {
  return (
    <Navbar
      fixed="top"
      className="d-flex justify-content-start"
      bg="dark"
      data-bs-theme="dark"
    >
      <Nav className="me-auto">
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
