import './App.css'; 
import UserPage from './pages/UserPage'; 
import PasswordPage from './pages/PasswordPage';
import MenuPage from './pages/MenuPage';
import ConsultaPage from './pages/ConsultaPage';
import RetiroPage from './pages/RetiroPage';
import SaldoPage from './pages/SaldoPage';
import DepositoPage from './pages/DepositoPage';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
  
function App() { 
  return ( 
    <Router>
    <main className="App"> 
      
      <Routes>
        <Route path='/' element={<UserPage />} />
        <Route path='/password' element={<PasswordPage />} />
        <Route path='/menu' element={<MenuPage />} />
        <Route path='/consulta' element={<ConsultaPage />} />
        <Route path='/retiro' element={<RetiroPage />} />
        <Route path='/saldo' element={<SaldoPage />} />
        <Route path='/deposito' element={<DepositoPage />} />
      </Routes>
      
    </main> 
    </Router>
  ); 
} 
  
export default App; 