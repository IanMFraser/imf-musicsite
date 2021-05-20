import React from 'react';
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/NavBar'
import Nav from 'react-bootstrap/Nav'

const NavBar = () => {

    return(
      <>
        <Navbar expand="lg" collapseOnSelect className="mt-4">
          <Container className="ml-2">
            <Navbar.Brand href="/music" style={{fontSize: '2em', fontWeight: '500',fontStyle: 'italic'}} className="m-2">IAN M FRASER</Navbar.Brand>
            <Navbar.Toggle aria-controls="imf-navbar-nav" />
            <Navbar.Collapse id="imf-navbar-nav">
              <Nav as="ul" className="justify-content-start ml-2">
                <Nav.Item as="li" className="m-0">
                  <Nav.Link href="/music/albums" className="m-0 mt-2">MUSIC</Nav.Link>
                </Nav.Item>
                <Nav.Item as="li" className="m-0">
                    <Nav.Link href="/music/contact" className="m-0 mt-2">CONTACT</Nav.Link>
                </Nav.Item>
              </Nav>
              </Navbar.Collapse>
          </Container>
        </Navbar>
        </>
    )
}

export default NavBar;