import Navegacao from "../../Componentes/Navegacao";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Kanye from "../../Assets/kanye.png";
import Button from "react-bootstrap/esm/Button";
import "./home.css";
import Card from "react-bootstrap/Card";
import { useState, useEffect } from "react";
function Home() {
  const [frase, setFrase] = useState({});
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    function simulateNetworkRequest() {
      return new Promise((resolve) => setTimeout(resolve, 50));
    }

    if (isLoading) {
      simulateNetworkRequest().then(() => {
        setLoading(false);
      });
    }
  }, [isLoading]);

  const handleClick = () => {
    const url = "https://api.kanye.rest/";
    fetch(url)
      .then((url) => url.json())
      .then((url) => {
        setFrase(url);
        setLoading(true);
      });
  };
  return (
    <Container fluid className="text-light">
      <header className="w-100 h-100">
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
                      <Col xs={12} sm={12} md={12} lg={12} xl={11} xxl={8}>
                        <Card
                          className="p-3 bg-transparent w-100 h-100"
                          border="secondary"
                        >
                          <Card.Text className="text-light">
                            <Col
                              xs={12}
                              md={12}
                              lg={12}
                              xl={12}
                              xxl={12}
                              className="d-flex justify-content-center align-items-center flex-row"
                            >
                              <img
                                src={Kanye}
                                alt="foto kanye west"
                                className="imagem-kanye h-100 w-50"
                              />
                              <p className="d-block d-sm-block d-md-block d-lg-none d-xl-none- d-xxl-none fs-5">
                                músico, compositor, produtor musical
                              </p>
                              <p className="d-none d-sm-none d-md-none d-lg-block d-xl-block d-xxl-block fs-5">
                                Mais conhecido como Kanye West, 5 é um músico,
                                compositor, produtor musical, diretor de arte e
                                estilista americano.
                              </p>
                            </Col>
                          </Card.Text>
                        </Card>
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
            <Button
              variant="outline-secondary"
              disabled={isLoading}
              onClick={!isLoading ? handleClick : null}
            >
              {isLoading ? "Carregando" : "Pesquise suas Frases"}
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
