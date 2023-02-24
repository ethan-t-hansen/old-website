import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '../assets/personal_logo.png';

function NavBar() {

  window.addEventListener('load', function (event) {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            console.log(entry)
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            }
        });
    });
    const hiddenElements = document.querySelectorAll('.hidden');
    hiddenElements.forEach((el) => observer.observe(el));
  });

  return (
      <Navbar expand="lg" variant="light" className='sticky-lg-top'>
        <Container>
          <Navbar.Brand href="#home" className="hidden-bottom">
            <img
              alt=""
              src={logo}
              width="80"
              height="80"
              vertical-align="middle"
              className="d-inline-block align-top hidden"
            />{' '}
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
            </Nav>
            <Nav className='hidden-bottom'>
              <Nav.Link href="#home">home</Nav.Link>
              <Nav.Link eventKey={2} href="#projects">
                projects
              </Nav.Link>
              <Nav.Link eventKey={3} href="#designs">
                designs
              </Nav.Link>
              <Nav.Link eventKey={4} href="#resume">
                resume
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
  );
}

export default NavBar;