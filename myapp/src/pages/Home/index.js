import Navegacao from "../../Componentes/navegacao";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Kanye from "../../Assets/kanye.png";
import Button from "react-bootstrap/esm/Button";
import { useState } from "react";
import "./home.css";
import { Box } from "@mui/system";
function Home() {
  const [frase, setFrase] = useState({});
  function buscarFrase() {
    const url = "https://api.kanye.rest/";
    fetch(url)
      .then((url) => url.json())
      .then((url) => {
        setFrase(url);
      });
  }
  return (
    <Container fluid>
      <Navegacao Row={Row} Col={Col} />
      <header className="w-100">
        <Row className="bg-secondary-subtle">
          <Col xs={12} sm={12} className="sm">
            <Row className="align-items-center header-home">
              <Col>
                <Row className="align-items-center justify-content-center">
                  <Col xs={6} sm={12} className="text-center">
                    <h1 className="title-kanye">Kanye West</h1>
                  </Col>
                  <Col xs={6}>
                    <Row className="justify-content-center">
                      <Col xs={6}>
                        <Row className="align-items-center">
                          <Col xs={6} className="text-center">
                            <Row>
                              <Col sm={12} lg={12}>
                                <Box
                                  className="d-flex align-items-center rounded border-secondary"
                                  sx={{
                                    height: 180,
                                    backgroundColor: "primary",
                                    border: 1,
                                    borderColor: "#dbdbdb",
                                    borderRadius: 3,
                                    margin: 1,
                                  }}
                                >
                                  <Col
                                    lg={12}
                                    className="justify-content-center"
                                  >
                                    <img src={Kanye} alt="foto kanye west" />
                                    Mais conhecido como Kanye West, 5 é um
                                    músico, compositor, produtor musical,
                                    diretor de arte e estilista americano.
                                  </Col>
                                </Box>
                              </Col>
                            </Row>
                          </Col>
                        </Row>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Col>
        </Row>
      </header>
      <main className="w-100 h-100">
        <Row className="mt-5 justify-content-center align-items-center">
          <Col xs={6} className="text-center">
            <Button onClick={() => buscarFrase()} variant="primary">
              Pesquise suas Frases
            </Button>
          </Col>
          <Row className="mt-5 justify-content-center">
            <Col xs={6} className="text-center">
              <p>{frase.quote}</p>
            </Col>
          </Row>
        </Row>
      </main>
    </Container>
  );
}
export default Home;
