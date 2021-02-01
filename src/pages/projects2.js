import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { Container, Row, Col } from "react-bootstrap";
import CustomNavbar from "../components/navbar";
import CustomCard2 from "../components/card2";
const Projects2 = () => {
  return (
    <div>
      <CustomNavbar />
      <div className="App">
        <header className="App-header">
          <Container>
            <Row className="projectcontainer" noGutters>
              <CustomCard2 header="Rubik’s Cube Solver" title="MyRIo (Labview)">
                DEVELOPED A CODE ON LABVIEW THAT SCANS A RUBIK’S CUBE USING A
                CAMERA AND PROCEED TO SOLVE IT USING 8 SERVO MOTORS
              </CustomCard2>

              <CustomCard2 header="The Boat" title="Solid works, Matlab">
                WE MADE A BOAT THAT PROPEL USING KINEMATIC LINKAGE -MODELED THE
                SEVEN BAR LINKAGES ON MATLAB -VERIFIED THE DESIGN ON SOLID WORKS
              </CustomCard2>
              <CustomCard2 header="Finite Elements" title="Python">
                DEVELOPED 2 FINITE ELEMENTS CODES -ONE TO SOLVE A ONE
                DIMENSIONAL LINEAR IONIC DIFFUSION PROBLEM -THE SECOND TO SOLVE
                2D FRAMES AND TRUSSES STRUCTURES OF ANY SHAPE
              </CustomCard2>
              <CustomCard2
                header="Water jet machining process optimization"
                title=""
              >
                THIS WAS A SMALL RESEARCH WHERE WE INVESTIGATED A METHOD FOR
                PARAMETER OPTIMIZATION OF WATER JET MACHINING USING DIFFERENT AI
                TECHNIQUES
              </CustomCard2>
              <CustomCard2
                header="Smart Robotic Arm"
                title="Python, Neat, Pygame"
              >
                I MODELED A 3DOF 2D ROBOTIC ARM IN PYGAME AND TAUGHT IT HOW TO
                REACH OBJECTS USING THE NEAT MODULE WHICH IS A COMBINATION OF
                NEURAL NETWORKS AND GENETIC ALGORITHM
              </CustomCard2>
              <CustomCard2 header="Computational Fluid Dynamics" title="Python">
                DEVELOPED SEVERAL CFD CODES TO SOLVE ADVECTION-DIFFUSION
                EQUATION, BURGERS EQUATION AND NAVIER-STOCKS EQUATION
              </CustomCard2>

              <CustomCard2 header="Bcharreh's Tourist Guide" title="Android">
                Back in highschool, I developed an android app that help
                tousrists navigate through my beatiful hometowm of bachrreh
              </CustomCard2>
            </Row>
          </Container>
        </header>
      </div>
    </div>
  );
};

export default Projects2;
