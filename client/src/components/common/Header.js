import React from 'react'
import logo from '../../images/milan_logo.png'
import styles from '../../css/Header.module.css'
import {Navbar,Nav,Container} from 'react-bootstrap'
function Header() {
  const routes = [
    ["Team", "/team"],
    ["Events","/events"],
    ["Sponsors", "/sponsors"],
    ["Schedule", "/schedule"],
  ];

  return (
    <Navbar collapseOnSelect expand="lg" className={styles.nav_color} variant="dark">
      <Container fluid className={styles.padding}>
      <Navbar.Brand href="/">
        <img 
          src={logo} 
          width="60px" 
          height="60px"
          alt="logo"
        />
        <em className={styles.nav_brand}>Milan</em>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ms-auto">
          <Nav.Link className={styles.nav_link} href="/schedule">Schedule</Nav.Link>
          <Nav.Link className={styles.nav_link} href="/events">Events</Nav.Link>
          <Nav.Link className={styles.nav_link} href="/sponsors">Sponsors</Nav.Link>
          <Nav.Link className={styles.nav_link} href="/team">Team</Nav.Link>
        </Nav>
      </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header