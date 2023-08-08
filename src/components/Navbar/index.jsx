import { Link } from 'react-router-dom'
import { Container, Nav, Navbar } from 'react-bootstrap'
import ReactSwitch from 'react-switch'
import ThemeContext from '../../theme/themecontext';
import { useContext } from 'react';

const NavbarComp = () => {
  const mode = useContext(ThemeContext)
  return (
    <Navbar expand="lg">
      <Container>
        <Navbar.Brand href="#home">Home</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link to="/">Accueil</Link>
            <Link to="/about">L'Agence</Link>
            <Link to="/works">Projets</Link>
          </Nav>
          <div className="switch">
            <label>{mode.theme === 'light' ? 'Light Mode' : 'Dark Mode'}</label>
            <ReactSwitch onChange={mode.toggleTheme} checked={mode.theme === 'dark'} />
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavbarComp;