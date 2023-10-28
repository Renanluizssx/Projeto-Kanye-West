import Navegacao from "../../Componentes/navegacao";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import HeaderBiografia from "../../Componentes/header-biografia";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/esm/Button";
import InputGroup from "react-bootstrap/InputGroup";
import { useState } from "react";
function Contato() {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <div>
      <Container fluid>
        <Row className="justify-content-center pt-4 vh-100">
          <Navegacao Row={Row} Col={Col} />
          <Col
            xs={12}
            sm={9}
            md={9}
            lg={9}
            xl={9}
            xxl={9}
            className="text-light"
          >
            <HeaderBiografia Row={Row} Col={Col} />

            <main>
              <Row className="justify-content-center mt-5">
                <Col xs={12} sm={12} md={6} lg={6} xl={6} xxl={6}>
                  <h2>Entre em Contato Conosco</h2>
                  <p>
                    Sua ajuda é importante para nós. Nos envie uma mensagem para
                    avaliar nosso trabalho
                  </p>
                  <Form
                    noValidate
                    validated={validated}
                    onSubmit={handleSubmit}
                  >
                    <Row className="mb-3">
                      <Form.Group
                        as={Col}
                        md="12"
                        controlId="validationCustom01"
                      >
                        <Form.Label>First name</Form.Label>
                        <Form.Control
                          required
                          type="text"
                          placeholder="First name"
                        />
                        <Form.Control.Feedback type="invalid">
                          Por favor digite seu primeiro nome
                        </Form.Control.Feedback>
                        <Form.Control.Feedback></Form.Control.Feedback>
                      </Form.Group>
                    </Row>
                    <Row>
                      <Form.Group
                        as={Col}
                        md="12"
                        controlId="validationCustomUsername"
                      >
                        <Form.Label>Digite seu Email</Form.Label>
                        <InputGroup hasValidation>
                          <InputGroup.Text id="inputGroupPrepend">
                            @
                          </InputGroup.Text>
                          <Form.Control
                            type="text"
                            placeholder="Username"
                            aria-describedby="inputGroupPrepend"
                            required
                          />
                          <Form.Control.Feedback type="invalid">
                            Por favor digite seu email
                          </Form.Control.Feedback>
                        </InputGroup>
                      </Form.Group>
                    </Row>
                    <Row>
                      <Form.Group
                        as={Col}
                        md="12"
                        controlId="validationCustom04"
                      >
                        <Form.Label>Texto</Form.Label>
                        <Form.Control
                          required
                          type="text"
                          placeholder="digite sua mensagem"
                          as="textarea"
                          rows={7}
                        />

                        <Form.Control.Feedback type="invalid">
                          Por favor digite algo na caixa de texto
                        </Form.Control.Feedback>
                        <Form.Control.Feedback></Form.Control.Feedback>
                      </Form.Group>
                    </Row>
                    <Row className="justify-content-center mt-3">
                      <Button
                        className="w-50"
                        size="lg"
                        type="submit"
                        variant="dark"
                      >
                        Enviar
                      </Button>
                    </Row>
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
