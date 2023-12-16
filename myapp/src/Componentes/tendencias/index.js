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
              <Button
                onClick={() =>
                  window.open(
                    "https://www.purepeople.com.br/famosos/o-boticario_p551110"
                  )
                }
                variant="outline-secondary"
              >
                Kayky Brito
              </Button>
              <Button
                onClick={() =>
                  window.open(
                    "https://www.purepeople.com.br/famosos/bruno-de-luca_p547344"
                  )
                }
                variant="outline-secondary"
              >
                Bruno de Luca
              </Button>
              <Button
                variant="outline-secondary"
                onClick={() =>
                  window.open(
                    "https://www.purepeople.com.br/famosos/neymar_p2402"
                  )
                }
              >
                Neymar
              </Button>
            </ButtonGroup>
            <ButtonGroup
              onClick={() =>
                window.open(
                  "https://www.purepeople.com.br/famosos/neymar_p2402"
                )
              }
              className="m-1 d-none d-sm-none d-md-none d-lg-none d-xl-none d-xxl-block"
            >
              <Button
                onClick={() =>
                  window.open(
                    "https://www.purepeople.com.br/famosos/maiara-maiara-maraisa_p547680"
                  )
                }
                variant="outline-secondary"
              >
                Maiara (Maiara & Maraisa)
              </Button>
              <Button
                variant="outline-secondary"
                onClick={() =>
                  window.open(
                    "https://www.purepeople.com.br/famosos/maiara-maiara-maraisa_p547680"
                  )
                }
              >
                Sabrina Sato
              </Button>
              <Button
                variant="outline-secondary"
                onClick={() =>
                  window.open(
                    "https://www.purepeople.com.br/famosos/fernando-zor_p552250/noticias/1"
                  )
                }
              >
                Fernando Zor
              </Button>
            </ButtonGroup>
            <ButtonGroup className="m-1">
              <Button
                variant="outline-secondary"
                onClick={() =>
                  window.open(
                    "https://www.purepeople.com.br/famosos/o-boticario_p551110"
                  )
                }
              >
                Oboticário
              </Button>
              <Button
                variant="outline-secondary"
                onClick={() =>
                  window.open(
                    "https://www.purepeople.com.br/famosos/bruna-marquezine_p2467"
                  )
                }
              >
                Bruna Marquizini
              </Button>
              <Button
                variant="outline-secondary"
                onClick={() =>
                  window.open(
                    "https://www.purepeople.com.br/famosos/mc-guime_p541063"
                  )
                }
              >
                Mc guimê
              </Button>
            </ButtonGroup>
          </Col>
        </Row>
      </Col>
    </Row>
  );
}

export default Tendencias;
