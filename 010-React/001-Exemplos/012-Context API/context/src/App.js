import {useState} from 'react'
import './App.css';
import Contador from './components/Contador';
import Display from './components/Display';

import { CountContext } from './contexts/CountContext';

function App() {
  const [cont, setCont] = useState(0)

  return (
    <CountContext.Provider value={{cont, setCont}}>
      <div className="App">
            <Contador/>
            <Display/>
      </div>
    </CountContext.Provider>
  );
}

export default App;
