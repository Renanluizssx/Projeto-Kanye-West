import Navegacao from "../../Componentes/navegacao";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import HeaderBiografia from "../../Componentes/header-biografia";
import Form from "react-bootstrap/Form";
function Contato() {
  return (
    <div>
      <Container fluid>
        <Row className="justify-content-center pt-4 vh-100">
          <Navegacao Row={Row} Col={Col} />
          <Col xs={12} sm={9} md={9} lg={9} xl={9} xxl={9} className="bg-light">
            <HeaderBiografia Row={Row} Col={Col} />

            <main>
              <Row className="justify-content-center mt-5">
                <Col xs={12} sm={12} md={6} lg={6} xl={6} xxl={6}>
                  <h2>Entre em Contato Conosco</h2>
                  <p>
                    Sua ajuda é importante para nós. Nos envie uma mensagem para
                    avaliar nosso trabalho
                  </p>
                  <Form>
                    <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlInput1"
                    >
                      <Form.Label>Digite seu Email:</Form.Label>
                      <Form.Control
                        type="email"
                        placeholder="name@example.com"
                      />
                    </Form.Group>
                    <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlTextarea1"
                    >
                      <Form.Label>Digite sua Mensagem:</Form.Label>
                      <Form.Control as="textarea" rows={7} />
                    </Form.Group>
                  </Form>
                </Col>
              </Row>
            </main>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
export default Contato;
