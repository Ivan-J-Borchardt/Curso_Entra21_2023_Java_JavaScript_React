import logo from './logo.svg';
import './App.css';
import Card from './components/Card';
import Pessoa from './components/Pessoa';

function App() {

  function soma(a, b){
    return a + b
  }

  const nome = "Ivan"
  return (
    <div className="App">
        <p>Olá {nome}, Este é seu primeiro REACT!</p>
        <p>A soma de A e B é: {soma(2, 5)}</p>
        <p>TEste</p>
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
    </div>
  );
}

export default App;
