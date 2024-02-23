import React from 'react'; 
import '../../public/login.css'; 
import { useLocation, useNavigate } from "react-router-dom";

function MenuPage() {
  const navigate = useNavigate(); 
  const location = useLocation();
  const {user_exist} = location.state;


  const handleClicSalir = () => {
    navigate('/');
  }

  const handleClicConsulta = () => {
    navigate('/consulta', {state: {user_exist}});
  }
  
  const handleClicRetiro = () => {
    navigate('/retiro', {state: {user_exist}});
  }

  const handleClicDeposito = () => {
    navigate('/deposito', {state: {user_exist}});
  }

  return ( 
    <div className='container'>
        <div className="item item-1"></div>
        <div className="item item-2"></div>
        <div className="item item-3"></div>
        <div className="item item-4">
          <button className={ false ? 'arrow left b4': 'color-green arrow left b4'} onClick={handleClicSalir} ></button>
          <button className='arrow left b3'></button>
          <button className={ false ? 'arrow left b2': 'color-green arrow left b2'} onClick={handleClicDeposito}></button>
          <button className={ false ? 'arrow left b1': 'color-green arrow left b1'} onClick={handleClicConsulta}></button>
        </div>
        <div className="item item-5">
          <div className="screen">
            <h2>Que desea hacer:</h2>
          </div>
          <div className='menu-options'>
              <div className='ConsultarSaldo'><h3>{'<'}--- Consultar Saldo</h3></div>
              <div className='Retiro'><h3>Retiro---{'>'}</h3></div>
              <div className='Deposito'><h3>{'<'}--- Depósito</h3></div>
            <div></div>
          </div>
          <div className='options'>
            <div className='SalirYContinuar'>{ true  && <h3>{'<'}--- Salir</h3>}</div>
            <div className='Continuar'>{ false && <h3>Continuar ---{'>'}</h3>}</div>
          </div>
        </div>
        <div className="item item-6">
          <button className={true ? 'arrow right b4': 'color-green arrow right b4'}></button>
          <button className='arrow right b3'></button>
          <button className='arrow right b2'></button>
          <button className={false ? 'arrow right b1': 'color-green arrow right b1'} onClick={handleClicRetiro}></button>
        </div>
        <div className="item item-7"></div>
        <div className="item item-8"></div>
        <div className="item item-9"></div>
    </div>
  ) 
}

export default MenuPage;