import "./index.css";

function Tendencias({ Row, Col }) {
  return (
    <Row className="tendencias">
      <h2 className="fs-4 text-center">Tendências</h2>
      <Row>
        <Col xs={12} className="tendencias-col d-flex justify-content-center">
          <span className="p-1 mb-2 bg-white text-dark border tendencias m-2">
            Kayky Brito
          </span>

          <span className="p-1 mb-2 bg-white text-dark border tendencias m-2">
            Bruno de Luca
          </span>
          <span className="p-1 mb-2 bg-white text-dark border tendencias m-2">
            Neymar
          </span>
        </Col>
      </Row>
      <Row>
        <Col xs={12} className="tendencias-col d-flex justify-content-center">
          <span className="p-1  mb-2 bg-white text-dark border tendencias m-2">
            Maiara (Maiara & Maraisa)
          </span>

          <span className="p-1 mb-2 bg-white text-dark border tendencias m-2">
            Sabrina Sato
          </span>
          <span className="p-1  mb-2 bg-white text-dark border tendencias m-2">
            Fernando Zor
          </span>
        </Col>
      </Row>
      <Row>
        <Col xs={12} className="tendencias-col d-flex justify-content-center">
          <span className="p-1 mb-2 bg-white text-dark border m-2">
            Oboticário
          </span>
          <span className="p-1 mb-2 bg-white text-dark border m-2">
            Bruna Marquizini
          </span>
        </Col>
      </Row>
    </Row>
  );
}

export default Tendencias;
