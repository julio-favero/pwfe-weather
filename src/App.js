// https://openclassrooms.com/en/courses/7132446-create-a-web-application-with-react-js/7208826-share-state-between-different-components

import React, { useState, useEffect } from 'react'

import './App.css';
import Dia from './Componentes/Dia';
import Semana from './Componentes/Semana';
import Topo from './Componentes/Topo';

function App() {

  const [status, setStatus] = useState(false)
  const [cidade, setCidade] = useState('')
  const [temperatura, setTemperatura] = useState('')
  const [descricao, setDescricao] = useState('')

  useEffect(() => {
    if(status){
      setStatus(false)
      fetch(`https://viacep.com.br/ws/03454050/json/`)
            .then(response => {
                if(response.ok){
                    return response.json()
                }
                throw response
            })
                .then(data =>{
                    console.log(data)
                    alert(data.bairro)
                })
                    .catch( error => {
                        console.log(error)
                    })
                        .finally(() =>{
                            console.log("finalizou")
                        })
    }

  }, [status]);

  return (
    <div className="App">
      <h1>{cidade}</h1>
      <Topo atualizaDado={setStatus} atualizaCidade={setCidade}></Topo>
      <Dia></Dia>
      <Semana></Semana>
    </div>
  );
}

export default App;
