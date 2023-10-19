import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Navegacao from "../../Componentes/navegacao";
import HeaderBiografia from "../../Componentes/header-biografia";
import "./secao-famosos.css";
import * as React from "react";
import { Box } from "@mui/system";
function SecaoFamosos() {
  return (
    <Container fluid>
      <Navegacao Row={Row} Col={Col} />
      <HeaderBiografia Row={Row} Col={Col} />
      <Row className="justify-content-center mt-5">
        <Col xs={6}>
          <main className="w-100 h-100">
            <h2 className="fs-1">Famosos Próximos</h2>
            <h3>Relacionados</h3>
          </main>

          <Box
            sx={{
              width: 300,
              height: 100,
              backgroundColor: "primary",
              border: 1,
              borderColor: "#dbdbdb",
              borderRadius: 3,
              "&:hover": {
                opacity: [0.9, 0.8, 0.7],
              },
            }}
          ></Box>
        </Col>
      </Row>
    </Container>
  );
}
export default SecaoFamosos;
