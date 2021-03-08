import {
  Navbar,
  NavDropdown,
  Button,
  Nav,
  Form,
  FormControl,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
const CustomNavbar = () => {
  return (
    <Navbar bg="dark" expand="lg" variant="dark">
      <img src={"assets/gear.png"} alt="logo" className="App-logo" />
      <Navbar.Brand>Rayan Succar</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/MYCV/#/">Home</Nav.Link>
          <Nav.Link href="/MYCV/#/Projects">Projects</Nav.Link>
          <Nav.Link href="/MYCV/#/About">About</Nav.Link>
          <NavDropdown title="Find me at" id="basic-nav-dropdown">
            <NavDropdown.Item href="https://github.com/Rayan-S0">
              GitHub
            </NavDropdown.Item>
            <NavDropdown.Item href="https://www.linkedin.com/in/rayan-succar-23953a16a/">
              Linked-In
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="https://www.facebook.com/rayan.succar/">
              Facebook
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default CustomNavbar;
