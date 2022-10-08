// https://openclassrooms.com/en/courses/7132446-create-a-web-application-with-react-js/7208826-share-state-between-different-components

import React, { useState, useEffect } from 'react'

import './App.css';
import Dia from './Componentes/Dia';
import Semana from './Componentes/Semana';
import Spinner from './Componentes/Spinner';
import Topo from './Componentes/Topo';

function App() {

  const bgTransparente ={ background: 'rgba(0, 0, 0, 0.5)'};
  const [atualizado, setAtualizado] = useState(false)
  const [status, setStatus] = useState(false)
  const [cidade, setCidade] = useState('Saoaulo')
  const [temperatura, setTemperatura] = useState('')
  const [descricao, setDescricao] = useState('')

  useEffect(() => {
    setStatus(false)
    setAtualizado(false)
    fetch(`https://api.hgbrasil.com/weather?format=json-cors&key=dd2361a9&city_name=${cidade}`)
          .then(response => {
              if(response.ok){
                  return response.json()
              }
              throw response
          })
              .then(data =>{
                  console.log(data.results.city_name)
                  setTemperatura(data.results.temp)
                  setCidade(data.results.city_name)
                  
                })
                .catch( error => {
                  console.log(error)
                })
                .finally(() =>{
                        setAtualizado(true)
                        console.log("finalizou")
                      })

  }, [status]);

  return (
    <div className="App" style={!atualizado ? bgTransparente : null}>
      {!atualizado ? <Spinner></Spinner> : null}
      <Topo atualizaDado={setStatus} atualizaCidade={setCidade}></Topo>
      <Dia cidade={cidade} temp={temperatura}></Dia>
      <Semana></Semana>
    </div>
  );
}

export default App;
