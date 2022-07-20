import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Logo from './resources/image/logo.png';
import Search from './Search';

export default function Header() {
    return (
        <Navbar fixed="top" collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="/">
                    <img                                         
                        alt=""
                        src={Logo}
                        width="90"
                        height="50"
                        className="d-inline-block align-top"
                    />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link className='navbar-nav-text' href="/">Home</Nav.Link>
                        <Nav.Link className='navbar-nav-text' href="#">Recipes</Nav.Link>
                        <Nav.Link className='navbar-nav-text' href="#">Kitchen</Nav.Link>
                        <Nav.Link className='navbar-nav-text' href="#">FAQ</Nav.Link>
                    </Nav>
                    <Search />
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}