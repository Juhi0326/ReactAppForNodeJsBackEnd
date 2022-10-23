import { Button, Row, Col, Stack } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { toastShow} from '../store/actions'
import CustomButton from '../components/CustomButton'
import { useState } from 'react'
import authService from '../services/authService';

const Home = () => {

    const isLogged = useSelector(state => state.loggedIn);
    const dispatch = useDispatch();
    const [title, setTitle] = useState('Juhi Webalkalmazása');
    const titleChange = (newTitle) => {
        setTitle(newTitle);
    }
    const handleClick = (event) => {
        event.preventDefault();
        const user = {
            userName: 'Anna',
            email: 'anna@anna.hu',
            password: 'Anna1234*',
            role: 'user'
        }
        authService.RegisterForm(user)
        .then((response) => {
            console.log(response.data)
            dispatch(toastShow('Sikeres regisztráció', 'success'))
          })
          .catch((err) => {
            console.log(err)
            dispatch(toastShow('Sikertelen regisztáció', 'danger'))
          });
    }

/*     const login = (event) => {
        event.preventDefault();
        const user = {
            email: 'juhi0326@gmail.com',
            password: 'Juhi1234*',
        }
        authService.login(user)
        .then((response) => {
            console.log(response)
          })
          .catch((err) => {
            console.log(err)
          });
    } */
/*     const loginForRedux = (event) => {
        event.preventDefault();
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

          })
          .catch((err) => {
            console.log(err)
            dispatch(toastShow('Sikertelen bejelentkezés! részletes hibaüzenet: '+ err, 'danger'))
          });
    } */
    
    return (
        <div>
            <Stack gap={5}>
                <Row className="justify-content-md-center">
                    {title}
                </Row>
                <Row className="justify-content-md-center">
                    <Col md="auto">
                        <Button variant="dark" onClick={() => {
                            titleChange('Ez az új cím');
                        }}>Change Title</Button>
                    </Col>
                </Row>
                <Row className="justify-content-md-center">
                    <Col md="auto">
                        <CustomButton onClick={handleClick} value='proba regisztráció' />
                    </Col>
                </Row>

                {isLogged ? <h3> secret text</h3> : ''
                }


            </Stack>
        </div>
    );
}

export default Home;
