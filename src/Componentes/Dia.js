import './Dia.css'
import CardTemperatura from "./CardTemperatura";


function Dia(props){
    return(
        <div className='temperatura-dia'>
            <CardTemperatura cidade={props.cidade} temperatura={props.temp} descricao={'Ensolarado'}></CardTemperatura>
        </div>
    )
}

export default Dia