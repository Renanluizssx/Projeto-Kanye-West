import "./index.css";
import Button from "react-bootstrap/Button";
function Tendencias({ Row, Col }) {
  return (
    <Row className="tendencias">
      <h2 className="fs-4 text-center">Tendências</h2>
      <Row className="d-lg-flex flex-column">
        <Col xs={12} className="tendencias-col justify-content-center">
          <Button variant="p-1 mb-2 bg-white text-dark border tendencias m-2">
            Kayky Brito
          </Button>

          <Button className="p-1 mb-2 bg-white text-dark border tendencias m-2">
            Bruno de Luca
          </Button>
          <Button className="p-1 mb-2 bg-white text-dark border tendencias m-2">
            Neymar
          </Button>
        </Col>
      </Row>
      <Row className="d-sm-none d-lg-flex">
        <Col xs={12} className="tendencias-col d-flex justify-content-center ">
          <Button className="p-1  mb-2 bg-white text-dark border tendencias m-2">
            Maiara (Maiara & Maraisa)
          </Button>

          <Button className="p-1 mb-2 bg-white text-dark border tendencias m-2">
            Sabrina Sato
          </Button>
          <Button className="p-1  mb-2 bg-white text-dark border tendencias m-2">
            Fernando Zor
          </Button>
        </Col>
      </Row>
      <Row className="d-sm-none d-lg-flex">
        <Col xs={12} className="tendencias-col d-flex justify-content-center">
          <Button className="p-1 mb-2 bg-white text-dark border m-2">
            Oboticário
          </Button>
          <Button className="p-1 mb-2 bg-white text-dark border m-2">
            Bruna Marquizini
          </Button>
        </Col>
      </Row>
    </Row>
  );
}

export default Tendencias;
