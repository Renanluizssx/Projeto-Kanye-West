import Navegacao from "../../Componentes/navegacao";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import HeaderBiografia from "../../Componentes/header-biografia";
import "./biografia.css";
import Tendencias from "../../Componentes/tendencias";
import NavegacaoHeader from "../../Componentes/navegacao-header";
import Card from "react-bootstrap/Card";
function Biografia() {
  return (
    <Container fluid className="text-light">
      <Row className="justify-content-center">
        <Navegacao Row={Row} Col={Col} />
        <Col
          xs={12}
          sm={11}
          md={9}
          lg={9}
          xl={9}
          xxl={9}
          className="pb-4 m-5 rounded-3"
        >
          <HeaderBiografia Row={Row} Col={Col} />
          <NavegacaoHeader Row={Row} Col={Col} />
          <main className="mw-100  ms-2">
            <Row className="mt-5 flex-sm-row">
              <Col xs={12} sm={6} md={6} lg={6} xl={6} xxl={6}>
                <Row className="caixa-detalhes fs-6">
                  <h2 className="fs-1 text-center text-light">Biografia</h2>

                  <Col xs={12} sm={12} md={12} lg={12} xl={12} xxl={12}>
                    <Card
                      className="p-3 bg-transparent w-100"
                      border="secondary"
                    >
                      <Card.Text>
                        <span className="text-light md-0 opacity-100">
                          <span className="font-weight-bold">Nascimento:</span>8
                          de junho de 1977, Atlanta
                        </span>
                        <br />
                        <span className="text-light  md-0">Idade: 46 anos</span>
                        <br />
                        <span className="text-light md-0">Signo: Gêmeos</span>
                        <br />
                        <span className="text-light  md-0">
                          País: Estados Unidos
                        </span>
                      </Card.Text>
                    </Card>
                  </Col>
                </Row>
              </Col>
              <Col xs={12} sm={6} md={6} lg={6} xl={6} xxl={6}>
                <Tendencias Row={Row} Col={Col} />
              </Col>
            </Row>
            <Row>
              <Col xs={12} sm={6} md={6} lg={6} xl={6} xxl={6}>
                <section className="secao-biografia fs-6">
                  <p>
                    Kanye West nasceu em 8 de junho de 1977 em Atlanta, nos
                    Estados Unidos. Seu pai, Ray West, era ex membro dos
                    Panteras Negras. Sua mãe, Donda, era profesora de inglês na
                    Universidade de Chicago. Kanye estudou artes e design, mas
                    seu interesse era mesmo a música.
                  </p>
                  <p>
                    O produtor de nomes como Alicia Keys, Jay-Z, Janet Jackson e
                    outros grandes, lhe dá uma chance. Depois de um acidente de
                    carro que aconteceu em 23 de outubro de 2002, no qual se
                    machuca severamente, ele passa a ver outro significado na
                    vida. Foi dessa experiência que saiu o single "Through the
                    Wire", gravado seis semanas depois do acontecido.
                  </p>
                  <p>
                    O álbum foi um verdadeiro sucesso, e lhe rendeu 3 Grammys. A
                    imprensa o considera como um dos "100 mais influentes do
                    mundo". Em 2005, lança seu segundo disco "Late Registration"
                    que conta com participação de Jamie Foxx. Em 2007,
                    "Graduation", alcança ainda mais sucesso.
                  </p>
                  <p>
                    A mãe de Kanye morre em 2010, aos 58 anos, depois de uma
                    operação de redução mamária e lipoaspiração. Uma semana
                    depois, ela lança a música "Hey Mama".
                  </p>
                  <p>
                    Em 2012, Kanye assume uma relação com a bombshell Kim
                    Kardashian
                  </p>
                  <p>
                    Em 2012, Kanye assume uma relação com a bombshell Kim
                    Kardashian
                  </p>
                </section>
                <section className="Discografia fs-6">
                  <h3 className="fs-4">Discografia:</h3>
                  <ul>
                    <li>2011 : Watch the throne</li>
                    <li>2010 : My beautiful dark twisted fantasy</li>
                    <li>2008 : 808's & Heartbreak</li>
                    <li>2007 : Graduation</li>
                    <li>2005 : Late Registration</li>
                    <li>2004 : The College Dropout</li>
                  </ul>
                </section>
              </Col>
            </Row>
          </main>
        </Col>
      </Row>
    </Container>
  );
}

export default Biografia;
