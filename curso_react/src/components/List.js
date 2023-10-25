import Item from "./Items"

function List(){
    return(
        <>
            <h1>Minha Lista</h1>
            <ul>
                <Item ano_lancamento={1985}></Item>
                <Item marca="Fiat" ano_lancamento={1964}></Item>
                <Item marca="Renault" ano_lancamento={2008}></Item>
                <Item ></Item>
            </ul>
        </>
    )
}

export default List