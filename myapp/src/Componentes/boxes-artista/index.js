import { Box } from "@mui/system";

function DadosArtistas({ imagem, nome }) {
  return (
    <Box
      className="d-flex align-items-center"
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
    >
      <img src={imagem} className=" ms-2 w-25 h-75 rounded-circle" />
      <p className="ms-2 mb-0">{nome}</p>
    </Box>
  );
}

export default DadosArtistas;
