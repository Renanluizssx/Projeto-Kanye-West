import "./tendencias.css";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";

function Tendencias({ Row, Col }) {
  // const theme = createTheme({
  //   breakpoints: {
  //     values: {
  //       xs: 0,
  //       sm: 600,
  //       md: 900,
  //       lg: 1200,
  //       xl: 1536,
  //     },
  //   },
  // });

  // const Root = styled("div")(() => ({
  //   "@global": {
  //     html: {
  //       [theme.breakpoints.up("sm")]: {
  //         fontSize: "50px",
  //       },
  //     },
  //   },
  // }));

  return (
    <Row className="tendencias flex-column justify-content-space-around">
      <Col xs={12}>
        <h2 className="fs-1 text-center text-light">Tendências</h2>

        <Row>
          <Col
            xs={12}
            className="tendencias-col d-flex justify-content-center align-items-center flex-column"
          >
            {/* <Button className="p-1 mb-2 bg-white text-dark border tendencias m-2">
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
        <Row className="d-sm-none d-md-block d-lg-block d-xl-block d-xxl-block">
          <Col
            xs={12}
            className="tendencias-col d-flex justify-content-center "
          >
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
        <Row className="d-sm-none d-md-block d-lg-block d-xl-block d-xxl-block">
          <Col xs={12} className="tendencias-col d-flex justify-content-center">
            <Button className="p-1 mb-2 bg-white text-dark border m-2">
              
            </Button>
            <Button className="p-1 mb-2 bg-white text-dark border m-2">
              Bruna Marquizini
            </Button> */}
            <ButtonGroup aria-label="Basic example" className="m-1">
              <Button variant="outline-secondary">Kayky Brito</Button>
              <Button variant="outline-secondary">Bruno de Luca</Button>
              <Button variant="outline-secondary">Neymar</Button>
            </ButtonGroup>
            <ButtonGroup className="m-1">
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
