import { useState } from "react"


function Condicional(){

    const [email, setEmail] = useState()
    const [userEmail, setUserEmail] = useState()

    function limparEmail(e) {
        e.preventDefault()
        setUserEmail('')
    }

    function enviarEmail(e) {
        e.preventDefault()
        setUserEmail(email)

    }
    
    return(
        <div>
            <h2>Cadastre o seu email:</h2>
            <form>
                <input type='email' placeholder='Digite seu email' onChange={(e) => setEmail(e.target.value)}></input>
                <button type="submit" onClick={enviarEmail}>Enviar emial</button>
                {userEmail && (
                    <div>
                        <p>O email do usuário é: {userEmail}</p>
                        <button onClick={limparEmail}>Limpar email</button>
                    </div>
                )}

            </form>
            
            
        </div>
    )
}

export default Condicional