import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Navegacao from "../../Componentes/navegacao";
import HeaderBiografia from "../../Componentes/header-biografia";
import "./secao-famosos.css";
import * as React from "react";
import { useState } from "react";
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
      <HeaderBiografia Row={Row} Col={Col} />
      <Row className="justify-content-center mt-5">
        <Col>
          <Row>
            <Col xs={9}>
              <main>
                <h2 className="fs-1">Famosos Próximos</h2>
                <Row>
                  <Col xs={6}>
                    <h3>Semelhantes</h3>

                    {dadosArtistasSemelhantes.map((artista, id) => (
                      <DadosArtistas
                        key={id}
                        imagem={artista.imagem}
                        nome={artista.nome}
                      />
                    ))}

                    <h3>Influências</h3>
                    {dadosArtistasInfluencas.map((artista, id) => (
                      <DadosArtistas
                        key={id}
                        imagem={artista.imagem}
                        nome={artista.nome}
                      />
                    ))}
                  </Col>

                  <Col
                    xs={6}
                    className="d-flex flex-column justify-content-right"
                  >
                    <h3>Parcerias</h3>

                    <DadosArtistas
                      imagem={dadoParceria.imagem}
                      nome={dadoParceria.nome}
                    />

                    <h3>Amigos/Familias</h3>
                    {dadosArtistasAmigosEFamilias.map((artista, id) => (
                      <DadosArtistas
                        key={id}
                        imagem={artista.imagem}
                        nome={artista.nome}
                      />
                    ))}
                    <h3>Amor</h3>
                    <DadosArtistas
                      imagem={dadoArtistaAmor.imagem}
                      nome={dadoArtistaAmor.nome}
                    />
                  </Col>
                </Row>
              </main>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}
export default SecaoFamosos;
