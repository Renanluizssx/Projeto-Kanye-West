import { LinkContainer } from "react-router-bootstrap";
import Nav from "react-bootstrap/Nav";
function NavegacaoHeader({ Row, Col }) {
  return (
    <nav>
      <Row>
        <Col xs={12} sm={12} md={12} lg={12} xl={12} xxl={12} className="mt-3">
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
