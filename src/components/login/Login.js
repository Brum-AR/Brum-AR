import React, {useRef, useState} from 'react'
import './Login.css';
import axios from "axios";

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const usernameInput = useRef(null);
    const passwordInput = useRef(null);

    function connect() {
        const body = {
            username,
            password
        }

        axios
            .post("https://brum-ar-api.herokuapp.com/login/", body)
            .then(response => console.log(response))
            .catch(error => console.log(error))
            .finally(() => clear())
    }

    function clear() {
        usernameInput.current.value = '';
        passwordInput.current.value = '';
    }

    return (
        <>
            <div className='login'>
                <div className='login__form'>
                    <input ref={usernameInput} className='form__text' onChange={e => setUsername(e.target.value)} type={"text"} placeholder={"username"}/>
                    <input ref={passwordInput} className='form__text' onChange={e => setPassword(e.target.value)} type={"text"} placeholder={"password"}/>
                    <input className='form__submit' onClick={() => connect()} type={"submit"} placeholder={"login"}/>
                </div>
            </div>
        </>
    )
}

export default Login