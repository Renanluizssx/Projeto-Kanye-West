import Kanye from "../../Assets/kanyeBiografia.jpg";
import "./header-biografia.css";

function HeaderBiografia({ Row, Col }) {
  return (
    <Row className="justify-content-center">
      <Col xs={12}>
        <header className="header-biografia" sm={12}>
          <Row className="align-items-center container-header">
            <Col>
              <Row>
                <Col className="d-flex align-items-center text-light flex-column flex-sm-column flex-md-column flex-lg-row flex-xl-row flex-xxl-row">
                  <img
                    className="imagem-kanye-biografia h-100"
                    src={Kanye}
                    alt="imagem Kanye"
                  />

                  <p className="text-center ms-0 ms-sm-0 ms-md-0 ms-lg-5 ms-xl-5 ms-xxl-5">
                    <span className="fs-3">Kanye West</span>
                    <br /> Cantor, Produtor
                  </p>
                </Col>
              </Row>
            </Col>
          </Row>
        </header>
      </Col>
    </Row>
  );
}
export default HeaderBiografia;
