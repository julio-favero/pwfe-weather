import './Semana.css'
import CardTemperatura from "./CardTemperatura";

function Semana(props){

    const array = [1,2,3,4,5,6,7]

    return(
        <div className='diariamente'>
            <h2>Diariamente</h2>
            <div className='temperatura-semana'>
                {array.map((dia, index) =>{
                        return(
                            <div>
                                <span>{dia}{index}</span>
                                <CardTemperatura></CardTemperatura>
                            </div>
                        ) 
                })}
            </div>
        </div>
    )
}

export default Semana