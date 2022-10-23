import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import { BrowserRouter as Router} from "react-router-dom";
import NavBar from './components/navbar';
import ToastComponent from './components/toastComponent';
import AppRoutes from './AppRoutes';
import { useSelector } from 'react-redux';



function App() {
  const isActiveToast = useSelector(state => state.toast.state);

  return (

    <Router>
      <NavBar> </NavBar>
      <Container >
      {!isActiveToast ? <div className='placeOfToast'></div> : <ToastComponent animation={true}/>}
      <AppRoutes />
      </Container>
    </Router>
  );
}

export default App;
