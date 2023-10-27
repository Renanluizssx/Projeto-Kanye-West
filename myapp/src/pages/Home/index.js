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
    <Container fluid className="text-light">
      <header className="w-100">
        <Row>
          <Navegacao Row={Row} Col={Col} />
          <Col className="mt-5">
            <Row className="align-items-center header-home">
              <Col>
                <Row className=" align-items-center justify-content-center flex-column flex-sm-column flex-md-column flex-lg-row flex-xl-row flex-xxl-row">
                  <Col xs={12} sm={6} md={6} lg={6} xl={7} xxl={6}>
                    <h1 className="title-kanye text-center">Kanye West</h1>
                  </Col>
                  <Col xs={12} sm={6} md={6} lg={6} xl={5} xxl={6}>
                    <Row>
                      <Col xs={12} lg={12} xl={11} xxl={8}>
                        <Box
                          className="align-items-center rounded border-secondary"
                          sx={{
                            height: 120,
                            backgroundColor: "primary",
                            border: 1,
                            borderColor: "#dbdbdb",
                            borderRadius: 3,
                            margin: 1,
                            padding: 1,
                          }}
                        >
                          <Col
                            xs={12}
                            md={12}
                            lg={12}
                            xl={12}
                            xxl={12}
                            className="justify-content-center d-flex align-items-center flex-row h-100"
                          >
                            <img
                              src={Kanye}
                              alt="foto kanye west"
                              className="imagem-kanye h-100 w-50"
                            />
                            <p className="d-block d-sm-block d-md-block d-lg-none d-xl-none- d-xxl-none  fs-5">
                              músico, compositor, produtor musical
                            </p>
                            <p className="d-none d-sm-none d-md-none d-lg-block d-xl-block d-xxl-block fs-5">
                              Mais conhecido como Kanye West, 5 é um músico,
                              compositor, produtor musical, diretor de arte e
                              estilista americano.
                            </p>
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
      </header>
      <main className="w-100 h-100">
        <Row className="mt-5 justify-content-center align-items-center">
          <Col xs={6} className="text-center">
            <Button onClick={() => buscarFrase()} variant="dark">
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
