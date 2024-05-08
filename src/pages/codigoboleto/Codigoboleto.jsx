import React from 'react'
import './codigoboleto.css'
import imagemtela from '../../assets/imgboletocodigo.png'

const Codigoboleto = () => {
  return (
    <div className='img-corpo'>
      <img src={imagemtela} alt="corpo da tela" />

      <a href="/rastreamento"><button>Rastrear produto</button></a>
    </div>
  )
}

export default Codigoboleto
