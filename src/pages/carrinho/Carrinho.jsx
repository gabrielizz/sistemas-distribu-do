import React from 'react'
import './carrinho.css'
import boleto from '../../assets/boletomp.png'
const Carrinho = () => {
  return (
    <div className='pagamento'>
      <h3>Pagamento</h3>
      <h6>Faça seu pagamento pelo boleto</h6>
      <div className='img-pagamento'>
       <a href="/codigoboleto"> <img src={boleto} alt="foto do codigo do boleto" /></a>
      </div>

      <h6>Em csao de dúvida clique <a href='/sobre'>aqui!</a></h6>
      <p>Nosso sistema de pagamentos é 100% seguro e eficaz. Feito para você!</p>
    </div>
  )
}

export default Carrinho
