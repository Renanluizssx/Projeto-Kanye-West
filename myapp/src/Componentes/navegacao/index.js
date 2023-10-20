import Nav from "react-bootstrap/esm/Nav";
import { LinkContainer } from "react-router-bootstrap";
function Navegacao({ Row, Col }) {
  return (
    <Row className="fixed-top fs-2">
      <Col xs={12}>
        <Nav className="justify-content-end" activeKey="/home">
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
