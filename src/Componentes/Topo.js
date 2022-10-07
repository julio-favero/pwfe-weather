import React, { useState, useEffect } from 'react'

import './Topo.css'
import './Dia.js'

function Topo({atualizaDado, atualizaCidade}) {
    const [entrada, setEntrada] = useState('')

    const teste = () =>{
        atualizaDado(true)
        atualizaCidade(entrada)
        setEntrada('')
    }
	return (
            <header>
                    <div>
                        <h2>Previsão do Tempo</h2>
                    </div>
                    <div className="pesquisa">
                        <input
                            type="text"
                            placeholder="Buscar"
                            onBlur={(event) => {setEntrada(entrada + event.target.value)}}
                        />
                        <span onClick={teste}>&#x1F50E;&#xFE0E;</span>
                        {/* <img src='/images/search.png' height="40px" alt="Instagram icons created by pictranoosa - Flaticon" /> */}
                    </div>
            </header>

	);
}
export default Topo;


