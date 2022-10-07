import './Dia.css'
import CardTemperatura from "./CardTemperatura";


function Dia(props){
    return(
        <div className='temperatura-dia'>
            <CardTemperatura></CardTemperatura>
        </div>
    )
}

export default Dia