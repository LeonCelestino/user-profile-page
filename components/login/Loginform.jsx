import React, { useState } from 'react'
import Link from 'next/link'
import styles from '../../styles/Login.module.css'
import Axios from 'axios'

function Loginform() {

    const [inputValues, setInputValues] = useState({
        username: "",
        password: ""
    })

    const [loginData, setLoginData] = useState({})

    const handleChange = e => setInputValues(prevData => ({ ...prevData, [e.target.name]: e.target.value }));


    const handleSignin = e => {
        Axios.post("http://localhost:4000/api/auth/signin", {
            username: inputValues.username,
            password: inputValues.password
        }).then(res => {
            setLoginData(res.data)
            console.log(loginData)
        }).catch(err => {
            console.log(err)
        })
    }

    return (
        <div>
            <form >
                <label>Username:</label>
                <input name="username" type="text" maxLength="30" onChange={handleChange} />
                <label>Password:</label>
                <input name="password" type="password" maxLength="30" onChange={handleChange} />
                <div className={styles.signinup}>
                    <Link className={styles.signin} onClick={handleSignin} href="/">Logar</Link>
                    <p>Não tem uma conta?  <Link className={styles.signup} href="/login/Register">registre-se!</Link></p>
                </div>
            </form>

        </div>
    )
}

export default Loginform