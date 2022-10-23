import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate } from "react-router-dom";
import {signOut2, toastShow} from '../store/actions'
import authService from '../services/authService';

function NavBar() {
    const navigate = useNavigate()
    const isLogged = useSelector(state => state.user.state);
    const dispatch = useDispatch();

    const logOut= () => {
            authService.logout();
            dispatch(signOut2());
            dispatch(toastShow(` sikeres kijelentkezés!`, 'success'))
    }
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">Juhi's React app</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link className="me-auto" as={Link} to="/">
                            Home
                        </Nav.Link>

                        <Nav.Link className="me-auto" as={Link} to="/other">
                            Other
                        </Nav.Link>
                    </Nav>
                    <Nav className="justify-content-end">
                    <Nav.Link className="me-auto" onClick={()=> 
                        isLogged ? logOut() : navigate('/login')}>
                          {isLogged ? 'Sign Out' : 'Sign In'}
                    </Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    );
}

export default NavBar;