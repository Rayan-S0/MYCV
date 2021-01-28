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
              Hello I'm Rayan, I was born in 1999 in Bcharreh,North of Lebanon
            </p>
            <p>
              After Graduating from Highschool I received the USaid scholarship
              in the lebanese American University where I studied mechanical
              Engineering.
            </p>
            <p>
              During HighSchool I gained some experince in programming in JAVA
              and C# and later developped my Coding skill-set during university
              throught required project and personel ones
            </p>
            <p>
              During My time At university I worked with one of the best Faculty
              in our department on several reseach projects that I learned alot
              from.
            </p>
          </Container>
        </header>
      </div>
    </div>
  );
};

export default About;
