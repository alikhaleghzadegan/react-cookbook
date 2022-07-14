import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Logo from './image/Logo.jpg'
import Cookbook from './image/Cookbook.jpg'

const Header = () => {
    return (
        <Navbar fixed="top" collapseOnSelect expand="lg" className='Navbar' variant="dark">
            <Container className='header-container'>
                <Navbar.Brand href="/">
                    <div className='logo-div'>
                        <img className='logo' src={Logo} />
                        <img className='logo-cookbook' src={Cookbook} />
                        {/* <h1 className='nav-bar-brand'>Cook Book</h1> */}
                    </div>                  
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/"><h3 className='nav-bar-text'>Home</h3></Nav.Link>
                        <Nav.Link href="/"><h3 className='nav-bar-text'>Recipes</h3></Nav.Link>
                        <Nav.Link href="/"><h3 className='nav-bar-text'>Kitchen</h3></Nav.Link>
                        <Nav.Link href="/"><h3 className='nav-bar-text'>FAQ</h3></Nav.Link>
                    </Nav>
                    <Form className="d-flex">
                        <Form.Control
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                        />
                        <Button variant="outline-success">Search</Button>
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Header