import { Container } from "react-bootstrap";
import CustomNavbar from "../components/navbar";

const About = () => {
  return (
    <div>
      <CustomNavbar />
      <div className="App">
        <header className="App-header">
          <Container>
            <p>
              Hello I'm Rayan, I was born in 1999 in Bcharreh, North of Lebanon
            </p>
            <p>
              During HighSchool, I gained some experience in programming in JAVA
              and C# and later developed my Coding skill set during university
              through required projects and personal ones
            </p>
            <p>
              After Graduating from Highschool I received the USAID scholarship
              in the lebanese American University where I studied mechanical
              Engineering.
            </p>
            <p>
              During My time At university, I worked with one of the best
              Faculty in our department on several research projects that I
              learned a lot from.
            </p>
            <p>
              I'm now looking for a Ph.D. in robotics engineering where I can
              combine my skills in artificial intelligence and ME design.
            </p>
          </Container>
        </header>
      </div>
    </div>
  );
};

export default About;
