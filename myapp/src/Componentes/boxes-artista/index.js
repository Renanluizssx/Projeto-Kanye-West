import { Box } from "@mui/system";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
function DadosArtistas({ imagem, nome }) {
  return (
    <Row>
      <Col xs={12} sm={12} md={12} lg={12}>
        <Box
          className="d-flex align-items-center"
          sx={{
            height: 80,
            backgroundColor: "primary",
            border: 1,
            borderColor: "#dbdbdb",
            borderRadius: 3,
            margin: 1,
          }}
        >
          <img src={imagem} className=" ms-2 w-25 h-75 rounded-circle" />
          <p className="ms-2 mb-0">{nome}</p>
        </Box>
      </Col>
    </Row>
  );
}

export default DadosArtistas;
