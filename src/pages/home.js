import CustomNavbar from "../components/navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import Skills from "../components/skills";
import { Col, Container, Row, Image, ListGroup } from "react-bootstrap";

const Home = () => {
  return (
    <div>
      <CustomNavbar />
      <div className="App">
        <header className="App-header">
          <Container>
            <Row>
              <Col sm={3}>
                <Image
                  style={{ height: "auto", width: "75%" }}
                  src="assets/profile.jpg"
                  roundedCircle
                />

                <p>Skills</p>
                <Skills name="Python" val="93" />
                <Skills name="Solid Works" val="90" />
                <Skills name="COMSOL Multi-Physiques" val="90" />
                <Skills name="Microprocessors" val="80" />
                <Skills name="Matlab" val="75" />
                <Skills name="React" val="75" />
                <Skills name="G" val="65" />
                <Skills name="Java" val="50" />
                <Skills name="C" val="50" />
                <Skills name="C#" val="50" />
                <Skills name="Unity" val="50" />
                <Skills name="Ansys" val="50" />

                <br />
                <p>languages</p>
                <Skills name="English" val="95" />
                <Skills name="French" val="50" />
                <Skills name="Arabic" val="90" />
              </Col>
              <Col>
                <Row>
                  <p>Education</p>
                </Row>
                <Row>
                  <ListGroup variant="flush">
                    <ListGroup.Item variant="dark">
                      Highschool of Gibran khalil Gibran Bcharreh
                    </ListGroup.Item>
                    <ListGroup.Item
                      variant="light"
                      action
                      href="https://soe.lau.edu.lb/ime/programs/be-mechanical/"
                    >
                      BE in Mechanical Engineering, Lebanese American
                      University(LAU) 2017-2021
                    </ListGroup.Item>
                  </ListGroup>
                </Row>
                <br />
                <Row>
                  <p>Experience</p>
                </Row>
                <Row>
                  <ListGroup variant="flush">
                    <ListGroup.Item variant="dark">
                      Research project on memristors, improving them and
                      implementing them in machine learning and neuromorphic
                      neural networks
                    </ListGroup.Item>
                    <ListGroup.Item variant="light">
                      Built a spin coater to get nano-scale nafion membrane to
                      build the memristors
                    </ListGroup.Item>
                    <ListGroup.Item variant="dark">
                      Research project on numerical analysis of the buoyancy
                      engine and investigation of potential application
                    </ListGroup.Item>
                    <ListGroup.Item variant="light">
                      Modeled the Poisson-Nernest-Planck equation using COMSOL
                      to optimize the buoyancy engines parameters
                    </ListGroup.Item>
                    <ListGroup.Item
                      variant="dark"
                      action
                      href="http://www.atalianswitchgroup.com/"
                    >
                      One month internship in summer 2020 at ATALIAN Switch
                      Group
                    </ListGroup.Item>
                  </ListGroup>
                </Row>
                <br />
                <Row>
                  <p>Awards</p>
                </Row>
                <Row>
                  <ListGroup variant="flush">
                    <ListGroup.Item variant="dark">
                      Recieved the USAID ScholarShip in August 2017 for my
                      academic performance and my social activities and
                      participation in many non academic programes
                    </ListGroup.Item>
                  </ListGroup>
                </Row>
                <br />
                <Row>
                  <p>Contact</p>
                </Row>
                <Row>
                  <ListGroup variant="flush">
                    <ListGroup.Item variant="dark">
                      Phone: +961 70 340 668
                    </ListGroup.Item>
                    <ListGroup.Item variant="light">
                      Email: Rayan.succar@lau.edu
                    </ListGroup.Item>
                  </ListGroup>
                </Row>
              </Col>
            </Row>
          </Container>
        </header>
      </div>
    </div>
  );
};

export default Home;
