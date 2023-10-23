import Nav from "react-bootstrap/esm/Nav";
import { LinkContainer } from "react-router-bootstrap";
function Navegacao({ Row, Col }) {
  return (
    <Row className="fixed-top">
      <Col
        xs={12}
        sm={12}
        md={12}
        lg={12}
        xl={12}
        xxl={12}
        className="d-flex ms-4 justify-content-end"
      >
        <Nav>
          <Nav.Item>
            <LinkContainer to="/">
              <Nav.Link>Home</Nav.Link>
            </LinkContainer>
          </Nav.Item>

          <Nav.Item>
            <LinkContainer to="/Biografia">
              <Nav.Link>Biografia</Nav.Link>
            </LinkContainer>
          </Nav.Item>

          <Nav.Item>
            <LinkContainer to="/Contato">
              <Nav.Link>Contato</Nav.Link>
            </LinkContainer>
          </Nav.Item>
        </Nav>
      </Col>
    </Row>
  );
}

export default Navegacao;
