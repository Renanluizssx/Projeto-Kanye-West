import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Navegacao from "../../Componentes/navegacao";
import HeaderBiografia from "../../Componentes/header-biografia";
import NavegacaoHeader from "../../Componentes/navegacao-header";
import * as React from "react";
import DadosArtistas from "../../Componentes/boxes-artista";
import { dadosArtistas } from "../../colecao-de-dados/ColecaodeDados";
import Tendencias from "../../Componentes/tendencias";
import "./secao-famosos.css";

function SecaoFamosos() {
  const dadosArtistasSemelhantes = dadosArtistas.semelhantes;
  const dadosArtistasInfluencas = dadosArtistas.influencias;
  const dadoParceria = dadosArtistas.parcerias;
  const dadosArtistasAmigosEFamilias = dadosArtistas.amigosEFamilias;
  const dadoArtistaAmor = dadosArtistas.amor;
  return (
    <Container fluid>
      <Row className="justify-content-center text-light">
        <Navegacao Row={Row} Col={Col} />
        <Col
          xs={12}
          sm={11}
          md={9}
          lg={9}
          xl={9}
          xxl={9}
          className="m-5 pb-4 rounded-3"
        >
          <HeaderBiografia Row={Row} Col={Col} />
          <NavegacaoHeader Row={Row} Col={Col} />
          <main className="mw-100 ms-2">
            <Row
              className="
            mt-5 flex-column flex-sm-row-reverse 
            align-items-center align-items-sm-start align-items-md-start
             align-items-lg-start align-items-xl-start align-items-xxl-start 
             justify-content-center"
            >
              <Col xs={12} sm={6} md={6} lg={6} xl={6} xxl={6}>
                <Tendencias Row={Row} Col={Col} />
              </Col>
              <Col
                xs={7}
                sm={6}
                md={6}
                lg={6}
                xl={6}
                xxl={6}
                className="d-flex flex-column"
              >
                <h2 className="fs-1 text-center text-light mb-5">
                  Famosos Próximos
                </h2>
                <Row className="justify-content-center">
                  <Col xs={12} sm={12} md={12} lg={6} xl={6} xxl={6}>
                    <div>
                      <h3 className="fs-3 text-light text-center">
                        Semelhantes
                      </h3>

                      {dadosArtistasSemelhantes.map((artista, id) => (
                        <DadosArtistas
                          key={id}
                          imagem={artista.imagem}
                          nome={artista.nome}
                        />
                      ))}

                      <h3 className="fs-3 text-light text-center mt-5">
                        Influências
                      </h3>
                      {dadosArtistasInfluencas.map((artista, id) => (
                        <DadosArtistas
                          key={id}
                          imagem={artista.imagem}
                          nome={artista.nome}
                        />
                      ))}
                    </div>
                  </Col>

                  <Col
                    xs={12}
                    sm={12}
                    md={12}
                    lg={6}
                    xl={6}
                    xxl={6}
                    className="d-flex flex-column"
                  >
                    <h3 className="fs-3 text-light text-center">Parcerias</h3>

                    <DadosArtistas
                      imagem={dadoParceria.imagem}
                      nome={dadoParceria.nome}
                    />

                    <h3 className="fs-3 text-light text-center mt-5">
                      Amigos/Familias
                    </h3>
                    {dadosArtistasAmigosEFamilias.map((artista, id) => (
                      <DadosArtistas
                        key={id}
                        imagem={artista.imagem}
                        nome={artista.nome}
                      />
                    ))}
                    <h3 className="fs-3 text-light text-center mt-5">Amor</h3>
                    <DadosArtistas
                      imagem={dadoArtistaAmor.imagem}
                      nome={dadoArtistaAmor.nome}
                    />
                  </Col>
                </Row>
              </Col>
            </Row>
          </main>
        </Col>
      </Row>
    </Container>
  );
}
export default SecaoFamosos;
