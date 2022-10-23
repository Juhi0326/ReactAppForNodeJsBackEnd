import Container from 'react-bootstrap/Container';
import CustomButton from './CustomButton';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate } from "react-router-dom";
import { signOut2, toastShow } from '../store/actions'
import authService from '../services/authService';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import Offcanvas from 'react-bootstrap/Offcanvas';

function NavBar() {
    const navigate = useNavigate()
    const isLogged = useSelector(state => state.user.state);
    const dispatch = useDispatch();

    const logOut = () => {
        authService.logout();
        dispatch(signOut2());
        dispatch(toastShow(` sikeres kijelentkezés!`, 'success'))
    }
    return (
        <>
            {[false].map((expand) => (
                <Navbar key={expand} bg="dark" variant="dark" expand={expand} className="mb-3">
                    <Container>
                        <Navbar.Brand href="#">Juhi's React app</Navbar.Brand>
                        <Nav className="me-auto">
                            <Nav.Link className="me-auto" as={Link} to="/">
                                Home
                            </Nav.Link>
                        </Nav>  
                        <Nav className="me-auto">  
                            <Nav.Link className="me-auto" onClick={() =>
                                isLogged ? logOut() : navigate('/login')}>
                                {isLogged ? 'Sign Out' : 'Sign In'}
                            </Nav.Link>
                        </Nav>
                        <Nav >
                            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />

                        </Nav>
                        <Navbar.Offcanvas
                            id={`offcanvasNavbar-expand-${expand}`}
                            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                            placement="end"
                        >
                            <Offcanvas.Header closeButton>
                                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                                    Menü
                                </Offcanvas.Title>
                            </Offcanvas.Header>
                            <Offcanvas.Body>
                                <Nav className="justify-content-end flex-grow-1 pe-3">
                                    <Nav.Link href="#action1">Home</Nav.Link>
                                    <Nav.Link href="#action2">Link</Nav.Link>
                                    <NavDropdown
                                        title="Dropdown"
                                        id={`offcanvasNavbarDropdown-expand-${expand}`}
                                    >
                                        <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                                        <NavDropdown.Item href="#action4">
                                            Another action
                                        </NavDropdown.Item>
                                        <NavDropdown.Divider />
                                        <NavDropdown.Item href="#action5">
                                            Something else here
                                        </NavDropdown.Item>
                                    </NavDropdown>
                                </Nav>
                                <Form className="d-flex">
                                    <Form.Control
                                        type="search"
                                        placeholder="Search"
                                        className="me-2"
                                        aria-label="Search"
                                    />
                                    <CustomButton variant="outline-success">Search</CustomButton>
                                </Form>
                            </Offcanvas.Body>
                        </Navbar.Offcanvas>
                    </Container>
                </Navbar>
            ))}
        </>
    );
}

export default NavBar;