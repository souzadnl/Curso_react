import Button from "./Button"

function Evento(){
    function meuEvento(){
        console.log("Ativando primeiro evento")
    }

    function segundoEvento(){
        console.log("Ativando o segundo evento")
    }
    
    return(
        <div>
            <p>Clique para disparar um evento</p>
            <Button event={meuEvento} text="Primeiro Evento"></Button>
            <Button event={segundoEvento} text="Segundo Evento"></Button>

            <button onClick={meuEvento}>Clique aqui</button>
        </div>
    )
}

export default Evento