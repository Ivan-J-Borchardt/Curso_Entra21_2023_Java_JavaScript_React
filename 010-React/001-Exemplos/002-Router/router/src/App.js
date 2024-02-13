import {BrowserRouter as Router, Routes, Route, Link, Navigate} from 'react-router-dom'
import './App.css';
import Home from './pages/Home';
import Empresa from './pages/Empresa';
import Contato from './pages/Contato';
import Info from './pages/Info';
import Navebar from './components/Navebar';

function App() {
  return (
    <Router>
      <Navebar/>
      <Routes>
         <Route path='/' element={<Home/>}/>
         <Route path='/empresa' element={<Empresa/>}/>
         <Route path='/contato' element={<Contato/>}/>
         <Route path='/info' element={<Navigate to="/"/>}/>
      </Routes>
    </Router>
  );
}

export default App;
