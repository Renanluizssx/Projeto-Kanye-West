function Tendencias({ Row, Col }) {
  return (
    <>
      <h2 className="fs-1">Tendências</h2>
      <Row className="fs-4">
        <Col xs={12} className="tendencias-col d-flex justify-content-left">
          <span className="p-1 mb-2 bg-white text-dark border tendencias">
            Kayky Brito
          </span>
          <span className="p-1 mb-2 bg-white text-dark border tendencias">
            Bruno de Luca
          </span>
          <span className="p-1 mb-2 bg-white text-dark border tendencias">
            Neymar
          </span>
        </Col>
        <Col xs={12} className="tendencias-col d-flex justify-content-left">
          <span className="p-1  mb-2 bg-white text-dark border tendencias">
            Maiara (Maiara & Maraisa)
          </span>

          <span className="p-1 mb-2 bg-white text-dark border tendencias">
            Sabrina Sato
          </span>
          <span className="p-1  mb-2 bg-white text-dark border tendencias">
            Fernando Zor
          </span>
        </Col>

        <Col xs={12} className="tendencias-col d-flex justify-content-left">
          <span className="p-1 mb-2 bg-white text-dark border">Oboticário</span>
          <span className="p-1 mb-2 bg-white text-dark border">
            Bruna Marquizini
          </span>
        </Col>
      </Row>
    </>
  );
}

export default Tendencias;
