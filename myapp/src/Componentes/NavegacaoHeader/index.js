import { LinkContainer } from "react-router-bootstrap";
import Nav from "react-bootstrap/Nav";
function NavegacaoHeader({ Row, Col }) {
  return (
    <nav>
      <Row>
        <Col xs={12} className="mt-3">
          <Nav variant="tabs" bg="" data-bs-theme="dark">
            <Nav.Item>
              <LinkContainer to="/Biografia">
                <Nav.Link className="text-light">Biografia</Nav.Link>
              </LinkContainer>
            </Nav.Item>

            <Nav.Item>
              <LinkContainer to="/Famosos">
                <Nav.Link className="text-light">Famosos Próximos</Nav.Link>
              </LinkContainer>
            </Nav.Item>
          </Nav>
        </Col>
      </Row>
    </nav>
  );
}
export default NavegacaoHeader;
