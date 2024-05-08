import React from 'react'
import './produto2.css'
import geladeira from '../../assets/geladeiragrande.png'
import geladeirainfo from '../../assets/geladeirainfo.png'

const Produto2 = () => {
  return (
    <div className='produtos-home'>
    <div className='topo'>
      <img className='img-geladeira' src={geladeira} alt="imagem de uma poltrona " />
      <img className='img-info' src={geladeirainfo} alt="informacoes" />
    </div>
    <div className='botoes'>
      <a href="/carrinho"><button className='btn botao1'>Comprar</button></a><br />
     <button className='btn botao2'>Adicionar ao Carrinho</button>
    </div>
    <h6>Informações</h6>
    <p>A geladeira Brastemp é um eletrodoméstico icônico e confiável que há décadas faz parte das cozinhas de lares em todo o mundo. Com um compromisso constante com a inovação e a qualidade, a marca Brastemp é sinônimo de desempenho excepcional e design sofisticado.

Principais características da geladeira Brastemp:

Desempenho de Refrigeração Superior: As geladeiras Brastemp são projetadas com tecnologia avançada de refrigeração, garantindo a manutenção precisa da temperatura interna para preservar a frescura dos alimentos por mais tempo. Isso ajuda a evitar o desperdício de alimentos e a economizar dinheiro.

Ampla Capacidade de Armazenamento: Disponíveis em diversos tamanhos e configurações, as geladeiras Brastemp oferecem uma variedade de opções de capacidade de armazenamento, desde modelos compactos ideais para espaços menores até geladeiras espaçosas para famílias maiores.
    </p>
  </div>
  )
}

export default Produto2
