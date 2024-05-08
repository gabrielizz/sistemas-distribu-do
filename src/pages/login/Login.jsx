import React from 'react'
import './login.css'
import LogoImg from '../../assets/logo-atemporal.png'
import {FcGoogle} from 'react-icons/fc'
import {BsFacebook} from 'react-icons/bs'

const Login = () => {
  return (
    <div className='content'>
      <img src= {LogoImg} alt="Imagem Logo Estilo Atemporal" />
      <div className='content-login'>
        <form action="/conteudo">
        <input action="/atemporal-app/src/pages/conteudo" type="text" placeholder='Usuário' /><br/>
        <input action="/atemporal-app/src/pages/conteudo" type="text"  placeholder='Senha' /> <br/>
        <p>Esqueci minha senha </p>
        <input  type="submit" value="Entrar" />
        </form>
        <span className='span-1'>Não tem conta? </span><span className='span-2'>Criar Conta</span>
      </div>
        <div className='google'>
        <a href="https://accounts.google.com/v3/signin/identifier?hl=pt-br&ifkv=AYZoVhfkU2nWWryqBajbFoiLrsD8NOuW8rLuhAIalloYbH_ooLZKr2QCITrDKzsjRd72MvGPqqPnVQ&flowName=GlifWebSignIn&flowEntry=ServiceLogin&dsh=S-402482780%3A1694114845698201&theme=glif"><FcGoogle className='icon-google'/></a> <a href="https://www.facebook.com/">
          <BsFacebook className='icon-face'/></a>
        </div>
    </div>
  )
}

export default Login
