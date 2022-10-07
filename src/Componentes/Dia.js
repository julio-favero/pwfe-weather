import './Dia.css'
import CardTemperatura from "./CardTemperatura";


function Dia(props){
    return(
        <div className='temperatura-dia'>
            <CardTemperatura cidade={'São Paulo, SP'} temperatura={24.5} descricao={'Ensolarado'}></CardTemperatura>
        </div>
    )
}

export default Dia