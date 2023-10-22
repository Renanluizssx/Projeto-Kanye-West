import Nav from "react-bootstrap/esm/Nav";
import { LinkContainer } from "react-router-bootstrap";
function Navegacao({ Row, Col }) {
  return (
    <Row className="fixed-top">
      <Col xs={12} sm={12}>
        <Nav
          className="justify-content-sm-end justify-content-end"
          activeKey="/home"
        >
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
