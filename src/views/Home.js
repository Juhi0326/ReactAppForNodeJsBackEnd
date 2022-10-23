import { Row, Col, Stack } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import homePageService from '../services/homePageService';
import { toastShow} from '../store/actions'
import CustomButton from '../components/CustomButton'
import { useState, useEffect, } from 'react'
import authService from '../services/authService';

const Home = () => {

    const isLogged = useSelector(state => state.loggedIn);
    const dispatch = useDispatch();
    const [title, setTitle] = useState();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const getTitle = async () => {
        setLoading(true);
        try {
          const result = await homePageService.getHomePage();
          setTitle(result.data.HomePage[0].Title.titleDescription)
          console.log(result.data.HomePage[0].Title.titleDescription
            )
        } catch (err) {
          setError(err.message || "Unexpected Error!");
        } finally {
          setLoading(false);
        }
      };
/*     const handleClick = (event) => {
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
    } */

    useEffect(() => {
        getTitle();
      }, []);


    return (
        <div>
            <Stack gap={5}>
                <Row className="justify-content-md-center">
                {loading ? <p>Home page is loading!</p> :<p>{title}</p>}
                </Row>

                {isLogged ? <h3> secret text</h3> : ''}
                {error && <p>{error}</p>}


            </Stack>
        </div>
    );
}

export default Home;
