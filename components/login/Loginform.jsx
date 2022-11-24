import React from 'react'
import Link from 'next/link'

function Loginform() {
    return (
        <div>
            <form >
                <label>Nome de usuário:</label>
                <input type="text" maxLength="30" />
                <label>Senha:</label>
                <input type="text" maxLength="30" />
                <Link href="/profile/Home">Logar</Link>
            </form>

        </div>
    )
}

export default Loginform