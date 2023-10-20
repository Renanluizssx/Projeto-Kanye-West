import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Navegacao from "../../Componentes/navegacao";
import HeaderBiografia from "../../Componentes/header-biografia";
import "./secao-famosos.css";
import * as React from "react";
import DadosArtistas from "../../Componentes/boxes-artista";
import { dadosArtistas } from "../../ColecaodeDados";
import Tendencias from "../../Componentes/tendencias";
function SecaoFamosos() {
  const dadosArtistasSemelhantes = dadosArtistas.semelhantes;
  const dadosArtistasInfluencas = dadosArtistas.influencias;
  const dadoParceria = dadosArtistas.parcerias;
  const dadosArtistasAmigosEFamilias = dadosArtistas.amigosEFamilias;
  const dadoArtistaAmor = dadosArtistas.amor;
  return (
    <Container fluid>
      <Navegacao Row={Row} Col={Col} />

      <Row className="justify-content-center">
        <Col xs={6} className="bg-light pt-4">
          <HeaderBiografia Row={Row} Col={Col} />
          <Row className="mt-5">
            <Col xs={7} className="d-flex flex-column">
              <main>
                <h2 className="fs-4">Famosos Próximos</h2>
                <Row className="justify-content-center">
                  <Col xs={5}>
                    <div className="w-100">
                      <h3 className="fs-5">Semelhantes</h3>

                      {dadosArtistasSemelhantes.map((artista, id) => (
                        <DadosArtistas
                          key={id}
                          imagem={artista.imagem}
                          nome={artista.nome}
                        />
                      ))}

                      <h3 className="fs-5">Influências</h3>
                      {dadosArtistasInfluencas.map((artista, id) => (
                        <DadosArtistas
                          key={id}
                          imagem={artista.imagem}
                          nome={artista.nome}
                        />
                      ))}
                    </div>
                  </Col>

                  <Col xs={6} className="d-flex flex-column">
                    <h3 className="fs-5">Parcerias</h3>

                    <DadosArtistas
                      imagem={dadoParceria.imagem}
                      nome={dadoParceria.nome}
                    />

                    <h3 className="fs-5">Amigos/Familias</h3>
                    {dadosArtistasAmigosEFamilias.map((artista, id) => (
                      <DadosArtistas
                        key={id}
                        imagem={artista.imagem}
                        nome={artista.nome}
                      />
                    ))}
                    <h3 className="fs-5">Amor</h3>
                    <DadosArtistas
                      imagem={dadoArtistaAmor.imagem}
                      nome={dadoArtistaAmor.nome}
                    />
                  </Col>
                </Row>
              </main>
            </Col>
            <Col xs={5}>
              <Tendencias Row={Row} Col={Col} />
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}
export default SecaoFamosos;
