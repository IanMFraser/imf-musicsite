import React from 'react';
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

const NavBar = () => {

    return(
      <>
        <Navbar expand="lg" collapseOnSelect className="my-4">
          <Container className="ml-2">
            <Navbar.Brand href="/music" style={{fontSize: '2em', fontWeight: '500',fontStyle: 'italic'}} className="my-2">IAN M FRASER</Navbar.Brand>
            <Navbar.Toggle aria-controls="imf-navbar-nav" style={{border:'none'}} />
            <Navbar.Collapse id="imf-navbar-nav">
              <Nav as="ul" className="justify-content-start ml-2 flex-row">
                <Nav.Item as="li" className="m-1">
                  <Nav.Link href="/music/albums" className="m-0">MUSIC</Nav.Link>
                </Nav.Item>
                <Nav.Item as="li" className="m-1">
                    <Nav.Link href="/music/contact" className="m-0">CONTACT</Nav.Link>
                </Nav.Item>
              </Nav>
              </Navbar.Collapse>
          </Container>
        </Navbar>
        </>
    )
}

export default NavBar;