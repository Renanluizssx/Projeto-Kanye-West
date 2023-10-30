import "./tendencias.css";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";

function Tendencias({ Row, Col }) {
  return (
    <Row className="mt-5 mb-5 mt-sm-0 mb-sm-0 tendencias flex-column justify-content-space-around">
      <Col xs={12}>
        <h2 className="fs-1 text-center text-light mb-3">Tendências</h2>

        <Row>
          <Col
            xs={12}
            className="tendencias-col d-flex justify-content-center align-items-center flex-column w-100"
          >
            <ButtonGroup className="m-1 d-none d-sm-none d-md-none d-lg-none d-xl-none d-xxl-block">
              <Button variant="outline-secondary">Kayky Brito</Button>
              <Button variant="outline-secondary">Bruno de Luca</Button>
              <Button variant="outline-secondary">Neymar</Button>
            </ButtonGroup>
            <ButtonGroup className="m-1 d-none d-sm-none d-md-none d-lg-none d-xl-none d-xxl-block">
              <Button variant="outline-secondary">
                Maiara (Maiara & Maraisa)
              </Button>
              <Button variant="outline-secondary">Sabrina Sato</Button>
              <Button variant="outline-secondary">Fernando Zor</Button>
            </ButtonGroup>
            <ButtonGroup className="m-1">
              <Button variant="outline-secondary">Oboticário</Button>
              <Button variant="outline-secondary">Bruna Marquizini</Button>
              <Button variant="outline-secondary">Mc guimê</Button>
            </ButtonGroup>
          </Col>
        </Row>
        {/* <img src={anuncio} alt="anuncio" className="w-100 h-100" /> */}
      </Col>
    </Row>
  );
}

export default Tendencias;
