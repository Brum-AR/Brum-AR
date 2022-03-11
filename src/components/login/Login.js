import React, {useRef, useState} from 'react'
import './Login.css';
import axios from "axios";

const Login = (props) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const emailInput = useRef(null);
    const passwordInput = useRef(null);

    function connect() {
        const body = {
            username: email,
            password
        }

        axios
            .post("https://brum-ar-api.herokuapp.com/login/", body)
            .then(response => console.log(response))
            .catch(error => console.log(error))
            .finally(() => clear())
    }

    function clear() {
        emailInput.current.value = '';
        passwordInput.current.value = '';
        props.history.push('/products')
    }

    return (
        <>
            <div className='login'>
                <div className='login__form'>
                    <input ref={emailInput} className='form__text' onChange={e => setEmail(e.target.value)} type={"text"} placeholder={"email"}/>
                    <input ref={passwordInput} className='form__text' onChange={e => setPassword(e.target.value)} type={"password"} placeholder={"mot de passe"}/>
                    <input className='form__submit' onClick={() => connect()} type={"submit"} placeholder={"login"}/>
                </div>
            </div>
        </>
    )
}

export default Login