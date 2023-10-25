function Evento({numero}){
    
    function meuEvento(){
        console.log("Fui ativado")
    }
    
    return(
        <div>
            <p>Clique para disparar um evento</p>
            <button onClick={meuEvento}>Clique aqui</button>
        </div>
    )
}

export default Evento