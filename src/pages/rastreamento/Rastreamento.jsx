import React from 'react'
import './rastreamento.css'
import imagemtela2 from '../../assets/imgrastreamento.png'

const Rastreamento = () => {
  return (
    <div className='img-corpo'>
    <img src={imagemtela2} alt="corpo da tela" />

    <a href="/conteudo"><button>Voltar ao Início</button></a>
  </div>
  )
}

export default Rastreamento
