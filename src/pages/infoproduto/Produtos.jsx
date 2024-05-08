import React from 'react'
import './produtos.css'
import poltrona from '../../assets/poltronaiso.png'
import poltronainfo from '../../assets/cadeiravitalisinfo.png'

const Produtos = () => {
  return (
    <div className='produtos-home'>
      <div className='topo'>
        <img className='img-poltrona' src={poltrona} alt="imagem de uma poltrona " />
        <img className='img-info' src={poltronainfo} alt="informacoes" />
      </div>
      <div className='botoes'>
        <a href="/carrinho"><button className='btn botao1'>Comprar</button></a><br />
       <button className='btn botao2'>Adicionar ao Carrinho</button>
      </div>
      <h6>Informações</h6>
      <p>A cadeira Vitalis é um sofisticado e ergonômico móvel projetado para proporcionar o máximo conforto e suporte durante longos períodos de uso. Com um design moderno e elegante, a cadeira Vitalis é uma adição estilosa para qualquer ambiente, seja no escritório, em casa ou em espaços comerciais.
      Principais características da cadeira Vitalis:

Ergonomia Superior: A cadeira Vitalis é cuidadosamente projetada para oferecer suporte ergonômico apropriado para a coluna vertebral, promovendo uma postura correta durante todo o dia. Seu encosto ajustável e assento acolchoado garantem conforto excepcional, reduzindo a fadiga e o desconforto.

Material de Qualidade: Fabricada com materiais de alta qualidade, a Vitalis é durável e resistente. Sua estrutura de metal é robusta, e o revestimento de couro sintético de alta qualidade proporciona uma sensação agradável ao toque, além de ser fácil de limpar e manter.
      </p>
    </div>
  )
}

export default Produtos
