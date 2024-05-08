import React from 'react'
import './conteudo.css'
import imagem from '../../assets/home-verde.jpg'
import fotogeladeira from '../../assets/foto-geladeira.png'
import cadeira from '../../assets/cadeiramadeira.png'
import conjunto from '../../assets/conjuntoplantas.png'
import poltrona from '../../assets/poltrona.png'

const Conteudo = () => {
  return (
    <div className='conteudo-home'>
      <div className='home-img'>
        <img src={imagem} alt="Imagem Mobilha de Fundo" />
      </div>

       <h2>Super <span>Ofertas</span></h2>
       <p className='ofertas'>Ofertas especiais</p>
       <p className='precos'>Os melhores preços são aqui!</p>

    <div className='cards'>
        <div className='card-1'>
         <a href="/produto2"><img src={fotogeladeira} alt="foto geladeira" /></a>
        </div>

        <div className='card-1'>
          <a href="/produto"><img src={poltrona} alt="foto de uma poltrona" /></a>
        </div>
        <div className='card-1'>
          <a href="/produto"><img src={cadeira} alt="foto de uma cadeira" /></a>
        </div>
        <div className='card-1'>
          <a href="/produto"><img src={conjunto} alt="foto de um conjunto de plantas" /></a>
        </div>
      </div>
    </div>
  )
}

export default Conteudo
