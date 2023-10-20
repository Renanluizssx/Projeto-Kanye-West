import { Box } from "@mui/system";

function DadosArtistas({ imagem, nome }) {
  return (
    <Box
      className="d-flex align-items-center"
      sx={{
        width: 200,
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
  );
}

export default DadosArtistas;
