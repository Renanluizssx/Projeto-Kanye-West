import Kanye from "../../Assets/kanyeBiografia.jpg";
import Nav from "react-bootstrap/Nav";
import "./header-biografia.css";
import { LinkContainer } from "react-router-bootstrap";
function HeaderBiografia({ Row, Col }) {
  return (
    <Row className="justify-content-center">
      <Col xs={9}>
        <header className="header-biografia">
          <Row className="align-items-center container-header">
            <Col>
              <Row>
                <Col>
                  <img
                    className="imagem-kanye-biografia"
                    src={Kanye}
                    alt="imagem Kanye"
                  />
                  <span className="text-center">
                    Kanye West Cantor, Produtor
                  </span>
                </Col>
              </Row>
            </Col>
          </Row>
        </header>
        <Row>
          <Col xs={12} className="mt-3">
            <Nav className="fs-5" variant="tabs" defaultActiveKey="/">
              <Nav.Item>
                <LinkContainer to="/Biografia">
                  <Nav.Link>Biografia</Nav.Link>
                </LinkContainer>
              </Nav.Item>

              <Nav.Item>
                <LinkContainer to="/Famosos">
                  <Nav.Link>Famosos Proxímos</Nav.Link>
                </LinkContainer>
              </Nav.Item>
            </Nav>
          </Col>
        </Row>
      </Col>
    </Row>
  );
}
export default HeaderBiografia;
