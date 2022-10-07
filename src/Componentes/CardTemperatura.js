

function CardTemperatura(props){
    return(
        <div>
            <h3>{props.cidade}</h3>
            {/* <img></img> */}
            <h1>{props.temperatura}</h1>
            <p>{props.descricao}</p>
        </div>

    )
}
export default CardTemperatura;