import React, { useState, useEffect } from 'react'
import Axios from 'axios'
import styles from '../../styles/Login.module.css'

function Register() {
    const [inputData, setInputData] = useState({
        username: "",
        password: "",
        email: ""
    })
    const [submitError, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState({ message: '' });

    const handleChange = e => setInputData(prevData => ({ ...prevData, [e.target.name]: e.target.value }));

    const register = e => {
        e.preventDefault();
        if (inputData.username === '' || inputData.password === '' || inputData.email === '') {
            return setErrorMessage({ message: "Every field must be filled!" });
        }

        const register = async () => {
            Axios.post('http://localhost:4000/api/auth/signup', {
                username: inputData.username,
                password: inputData.password,
                email: inputData.email
            }).then((res, req) => {
                setInputData({
                    username: "",
                    password: "",
                    email: ""
                })

                setErrorMessage({
                    message: ''
                })
            }).catch(err => {
                setErrorMessage({
                    message: err.response.data.message
                })
            })

        }

        register();

        setError(false);

    }

    return (
        <div className={styles.registerContainer}>
            <form onSubmit={register} className={styles.registerForm}>
                <label>Username</label>
                <input name="username" type="text" value={inputData.username} onChange={handleChange} />
                <label>Password</label>
                <input name="password" type="password" autoComplete='off' value={inputData.password} onChange={handleChange} />
                <label>E-mail</label>
                <input name="email" type="email" value={inputData.email} onChange={handleChange} />
                <button type="submit">Register</button>
                <h5>{errorMessage.message}</h5>
            </form>
        </div>
    )
}

export default Register