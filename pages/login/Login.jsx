import React from 'react'
import Loginform from '../../components/login/Loginform'
import Logininfo from '../../components/login/Logininfo'
import styles from '../../styles/Login.module.css'

function Login() {
    return (
        <div className={styles.container}>
            <Loginform />
            <Logininfo />
        </div>
    )
}

export default Login