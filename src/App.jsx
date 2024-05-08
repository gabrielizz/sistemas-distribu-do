import { BrowserRouter, Routes, Route } from "react-router-dom";

import Conteudo from "./pages/conteudo/Conteudo.jsx";
import Carrinho from "./pages/carrinho/Carrinho.jsx";
import NavBar from "./components/NavBar.jsx";
import Login from "./pages/login/Login.jsx";
import Produto from "./pages/infoproduto/Produtos.jsx";
import Produto2 from './pages/infoproduto2/Produto2.jsx'
import Codigoboleto from './pages/codigoboleto/Codigoboleto.jsx'
import Rastreamento from "./pages/rastreamento/Rastreamento.jsx";

function App() {
  return (
    <BrowserRouter>
    <NavBar />
    <Routes>

      <Route path="/" index element={<Login/>} />
      <Route path='/Conteudo' element={<Conteudo/>} />
      <Route path='/produto' element={<Produto/>} />
      <Route path='/produto2' element={<Produto2/>} />
      <Route path='/Carrinho' element={<Carrinho/>} />
      <Route path='/Codigoboleto' element={<Codigoboleto/>} />
      <Route path='/Rastreamento' element={<Rastreamento/>} />

    </Routes>
    </BrowserRouter>
  );
}

export default App;
