import Kanye from "../../Assets/kanyeBiografia.jpg";
import Nav from "react-bootstrap/Nav";
import "./header-biografia.css";
import { LinkContainer } from "react-router-bootstrap";
function HeaderBiografia({ Row, Col }) {
  return (
    <Row className="justify-content-center">
      <Col xs={12}>
        <header className="header-biografia" sm={12}>
          <Row className="align-items-center container-header">
            <Col>
              <Row>
                <Col className="d-flex align-items-center text-light flex-column flex-sm-column flex-lg-row">
                  <img
                    className="imagem-kanye-biografia h-100"
                    src={Kanye}
                    alt="imagem Kanye"
                  />

                  <p className="text-center ms-sm-0 ms-lg-5">
                    <span className="fs-3">Kanye West</span>
                    <br /> Cantor, Produtor
                  </p>
                </Col>
              </Row>
            </Col>
          </Row>
        </header>
        <Row>
          <Col xs={12} className="mt-3">
            <Nav className="" variant="tabs" defaultActiveKey="/">
              <Nav.Item>
                <LinkContainer to="/Biografia">
                  <Nav.Link>Biografia</Nav.Link>
                </LinkContainer>
              </Nav.Item>

              <Nav.Item>
                <LinkContainer to="/Famosos">
                  <Nav.Link>Famosos Próximos</Nav.Link>
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
