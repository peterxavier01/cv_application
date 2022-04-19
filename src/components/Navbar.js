import { Navbar, Container, Nav } from "react-bootstrap";

const Navigation = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className="d-md-none">
      <Container>
        <Navbar.Brand href="/" className="logo">Peter Uadiale</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#info">Personal Info</Nav.Link>
            <Nav.Link href="#edu">Education</Nav.Link>
            <Nav.Link href="#skills">Skills</Nav.Link>
            <Nav.Link href="#links">Links</Nav.Link>
            <Nav.Link href="#experience">Work Experience</Nav.Link>
            <Nav.Link href="#cert">Certifications</Nav.Link>
            <Nav.Link href="#languages">Languages</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
