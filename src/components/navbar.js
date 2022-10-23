import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from "react-router-dom";
import {signIn2, signOut2, toastShow} from '../store/actions'
import authService from '../services/authService';

function NavBar() {
    const isLogged = useSelector(state => state.user.state);
    const dispatch = useDispatch();

    const handleLogStatus= () => {
        if (!isLogged) {
            const user = {
                email: 'juhi0326@gmail.com',
                password: 'Juhi1234*',
            }
            authService.login(user)
            .then((response) => {
                console.log(response)
                const loggedUser = {
                    userName: response.userName,
                    userId: response.userId,
                    role: response.role,
                    email: response.useemailrName,
                    accessToken: response.accessToken,
                }
                dispatch(signIn2(loggedUser))
                dispatch(toastShow(`Sikeres bejelentkezés, ${loggedUser.userName}, légy üdvözölve! :) `, 'success'))
    
              })
              .catch((err) => {
                console.log(err)
                dispatch(toastShow('Sikertelen bejelentkezés! részletes hibaüzenet: '+ err, 'danger'))
              });
        } else {
            authService.logout();
            dispatch(signOut2());
            dispatch(toastShow(` sikeres kijelentkezés!`, 'success'))
        }
        

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
                    <Nav.Link className="me-auto" onClick={()=> handleLogStatus()}>
                          {isLogged ? 'Sign Out' : 'Sign In'}
                    </Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    );
}

export default NavBar;