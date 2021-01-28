import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { Container, Row, Col } from "react-bootstrap";
import CustomNavbar from "../components/navbar";
import CustomCard from "../components/card";
const Projects = () => {
  return (
    <div>
      <CustomNavbar />
      <div className="App">
        <header className="App-header">
          <Container fluid>
            <Row className="projectcontainer" noGutters>
              <CustomCard header="Rubik’s Cube Solver" title="MyRIo (Labview)">
                DEVELOPED A CODE ON LABVIEW THAT SCANS A RUBIK’S CUBE USING A
                CAMERA AND PROCEED TO SOLVE IT USING 8 SERVO MOTORS
              </CustomCard>

              <CustomCard header="The Boat" title="Solid works, Matlab">
                WE MADE A BOAT THAT PROPEL USING KINEMATIC LINKAGE -MODELED THE
                SEVEN BAR LINKAGES ON MATLAB -VERIFIED THE DESIGN ON SOLID WORKS
              </CustomCard>
              <CustomCard header="Finite Elements" title="Python">
                DEVELOPED 2 FINITE ELEMENTS CODES -ONE TO SOLVE A ONE
                DIMENSIONAL LINEAR IONIC DIFFUSION PROBLEM -THE SECOND TO SOLVE
                2D FRAMES AND TRUSSES STRUCTURES OF ANY SHAPE
              </CustomCard>
              <CustomCard
                header="Water jet machining process optimization"
                title=""
              >
                THIS WAS A SMALL RESEARCH WHERE WE INVESTIGATED A METHOD FOR
                PARAMETER OPTIMIZATION OF WATER JET MACHINING USING DIFFERENT AI
                TECHNIQUES
              </CustomCard>
              <CustomCard
                header="Smart Robotic Arm"
                title="Python, Neat, Pygame"
              >
                I MODELED A 3DOF 2D ROBOTIC ARM IN PYGAME AND TAUGHT IT HOW TO
                REACH OBJECTS USING THE NEAT MODULE WHICH IS A COMBINATION OF
                NEURAL NETWORKS AND GENETIC ALGORITHM
              </CustomCard>
              <CustomCard header="Computational Fluid Dynamics" title="Python">
                DEVELOPED SEVERAL CFD CODES TO SOLVE ADVECTION-DIFFUSION
                EQUATION, BURGERS EQUATION AND NAVIER-STOCKS EQUATION
              </CustomCard>
            </Row>
          </Container>
        </header>
      </div>
    </div>
  );
};

export default Projects;
