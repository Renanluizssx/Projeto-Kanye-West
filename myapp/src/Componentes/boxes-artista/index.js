import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Card from "react-bootstrap/Card";
import "./boxes-artistas.css";
function DadosArtistas({ imagem, nome }) {
  return (
    <Row>
      <Col xs={12} sm={12} md={12} lg={12} xl={12} xxl={12}>
        <Card className="p-3 bg-transparent w-100 m-2" border="secondary">
          <Card.Text className="text-light">
            <Col
              xs={12}
              md={12}
              lg={12}
              xl={12}
              xxl={12}
              className="d-flex align-items-center flex-row cards-height"
            >
              <img
                src={imagem}
                alt="box-imagem"
                className=" ms-2 w-25 h-75 rounded-circle"
              />
              <p className="ms-2 mb-0">{nome}</p>
            </Col>
          </Card.Text>
        </Card>
      </Col>
    </Row>
  );
}

export default DadosArtistas;
