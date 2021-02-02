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
                Developed a code on labview that scans a rubik’s cube using a
                camera and proceed to solve it using 8 servo motors
              </CustomCard2>

              <CustomCard2 header="The Boat" title="Solid works, Matlab">
                Developed a boat that propels using kinematic linkage -modeled
                the seven-bar linkages on Matlab -verified the design on solid
                work
              </CustomCard2>
              <CustomCard2 header="Finite Elements" title="Python">
                Developed 2 finite elements codes, one to solve a one
                dimensional linear ionic diffusion problem, the second to solve
                2d frames and trusses structures of any shape
              </CustomCard2>
              <CustomCard2
                header="Water jet machining process optimization"
                title=""
              >
                This was small research where we investigated a method for
                parameter optimization of water jet machining using different ai
                techniques
              </CustomCard2>
              <CustomCard2
                header="Smart Robotic Arm"
                title="Python, Neat, Pygame"
              >
                Modeled a 3dof 2d robotic arm in PyGame and taught it how to
                reach objects using the neat module which is a combination of
                neural networks and genetic algorithm
              </CustomCard2>
              <CustomCard2 header="Computational Fluid Dynamics" title="Python">
                Developed several CFD codes to solve advection-diffusion
                equation, burgers equation, and Navier-stocks equation
              </CustomCard2>

              <CustomCard2 header="Bcharreh's Tourist Guide" title="Android">
                Back in high school, I developed an android app that helps
                tourists navigate through my beautiful hometown of Bcharreh
              </CustomCard2>

              <CustomCard2 header="Server Room" title="Solid works">
                Designed a server room Cooling system on SolidWorks and was
                simulated using SolidWorks CFD solver
              </CustomCard2>

              <CustomCard2 header="CAD Vehicles" title="Solid works">
                Designed several vehicles including trucks, helicopters and much
                more for our computer-aided design school project
              </CustomCard2>

              <CustomCard2 header="Solar Panel" title="MyRio">
                Implemented a PID controller for a solar collector to maximize
                its efficiency by always following the sun
              </CustomCard2>
            </Row>
          </Container>
        </header>
      </div>
    </div>
  );
};

export default Projects2;
