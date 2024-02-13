import './App.css';
import Card from './components/001ComponentesBasicosProps/Card';
import Pessoa from './components/002PropsCSS/Pessoa';
import ListaCarros from './components/003FragmentsPropTypes/ListaCarros';
import FormUsuario from './components/004EventosUseState/FormUsuario';
import FormCliente from './components/004EventosUseState/FormCliente';
import FormClienteUseState from './components/004EventosUseState/FormClienteUseState';
import Botao from './components/004EventosUseState/Botao';
import RenderCond from './components/005RenderizacaoCondicional/RenderCond';
import IfInline from './components/005RenderizacaoCondicional/IfInline';
import IfInlineTernario from './components/005RenderizacaoCondicional/IfInlineTernario';
import RenderNull from './components/005RenderizacaoCondicional/RenderNull';
import RenderListas from './components/006RenderizacaoListas/RenderListas';
import RenderListas2 from './components/006RenderizacaoListas/RenderListas2';
import RenderListas3 from './components/006RenderizacaoListas/RenderListas3';
import ComponentePai from './components/007ElevandoState/ComponentePai';
import Icons from './components/008Icons/Icons';


function App() {

  function soma(a, b){
    return a + b
  }

  function deletarUsuario(){
    console.log("Usuario deletado com sucesso!!!");
  }

  const nome = "Ivan"
  return (
    <div className="App">
        <p className="vermelho">Olá {nome}, Este é seu primeiro REACT!</p>
        <p>A soma de A e B é: {soma(2, 5)}</p>
        <p>Teste</p>
        <FormClienteUseState/>
        <FormCliente/>

        <FormUsuario/>
        <Botao event={deletarUsuario} text="Deletar"/>
        <Card/>
        <Pessoa nome="Joselito" 
                idade="34"
                cpf="004.005.009-23" 
                foto="https://github.com/Ivan-J-Borchardt/imagens/blob/master/joinha.jpg?raw=true"       
        />
        <Pessoa nome="Joana" 
                idade="23"
                cpf="004.005.222.98" 
                foto="https://github.com/Ivan-J-Borchardt/imagens/blob/master/toquinho.jpg?raw=true"       
        />

        <ListaCarros/>

        <RenderCond isLogado={true} nome={"João"}/>
        <IfInline isLogado={false} nome={"João"}/>
        <IfInlineTernario isLogado={true} nome={"João"}/>
        <RenderNull err={false} msn={"Deu Erro!!!"}/>
        
        <RenderListas/>
        <RenderListas2/>
        <RenderListas3/>

        <ComponentePai/>

        <Icons/>
          
        <br/>
        <br/>
        <br/>
        <br/>

    </div>
  );
}

export default App;
