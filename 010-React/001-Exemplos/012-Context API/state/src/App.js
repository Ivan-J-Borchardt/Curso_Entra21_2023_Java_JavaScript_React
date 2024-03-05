import {useState} from 'react'
import './App.css';
import Contador from './components/Contador';
import Display from './components/Display';

function App() {
  const [cont, setCont] = useState(0)

  return (
    <div className="App">
           <Contador cont={cont} setCont={setCont} />
           <Display cont={cont}/>
    </div>
  );
}

export default App;
