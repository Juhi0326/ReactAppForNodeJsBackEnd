import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux';
import Form from 'react-bootstrap/Form';
import CustomButton from '../components/CustomButton'
import { toastShow, signIn2 } from '../store/actions'
import authService from '../services/authService';

export const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();


  const loginForRedux = () => {
    const user = {
      email,
      password
    }
    authService.login(user)
      .then((response) => {
        const loggedUser = {
          userName: response.userName,
          userId: response.userId,
          role: response.role,
          email: response.useemailrName,
          accessToken: response.accessToken,
        }
        dispatch(signIn2(loggedUser))
        dispatch(toastShow(`Sikeres bejelentkezés, ${loggedUser.userName}, légy üdvözölve! :) `, 'success'))
        setEmail('');
        setPassword('');
        
      })
      .catch((err) => {
        console.log(err)
        dispatch(toastShow('Sikertelen bejelentkezés! részletes hibaüzenet: ' + err, 'danger'))
      });
  }


  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Email" value={email} onChange={(e) => { setEmail(e.target.value) }} />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Jelszó" value={password} onChange={(e) => { setPassword(e.target.value) }} />
      </Form.Group>
      <CustomButton onClick={loginForRedux} value='Bejelentkezés' type="submit" />
    </Form>
  )
}

export default Login;