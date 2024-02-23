import React, { useState } from 'react'; 
import '../../public/login.css'; 
import { useLocation, useNavigate } from "react-router-dom";

function SaldoPage() {
    const navigate = useNavigate(); 
    const location = useLocation();
    const {user_exist, cambio_saldo} = location.state;
  
  
    const handleClicSalir = () => {
        navigate('/');
    }
  
    const handleClicRegresar = () => {
        navigate('/menu', {state: {user_exist}});
    }
    
    return ( 
      <div className='container'>
          <div className="item item-1"></div>
          <div className="item item-2"></div>
          <div className="item item-3"></div>
          <div className="item item-4">
            <button className={ false ? 'arrow left b4': 'color-green arrow left b4'} onClick={handleClicSalir} ></button>
            <button className='arrow left b3'></button>
            <button className={ true ? 'arrow left b2': 'color-green arrow left b2'}></button>
            <button className={ true ? 'arrow left b1': 'color-green arrow left b1'}></button>
          </div>
          <div className="item item-5">
            <div className="screen">
            </div>
            <div className='Consulta'>
                { (cambio_saldo) ? (<h3> Acción aprobada, nuevo saldo: {user_exist.saldo} </h3>) : (<h3> Acción rechazada, saldo: {user_exist.saldo} </h3>)}
              <div></div>
            </div>
            <div className='options'>
              <div className='SalirYContinuar'>{ true  && <h3>{'<'}--- Salir</h3>}</div>
              <div className='RegresarSaldo'>{ true && <h3> Regresar ---{'>'}</h3>}</div>
            </div>
          </div>
          <div className="item item-6">
            <button className={false ? 'arrow right b4': 'color-green arrow right b4'} onClick={handleClicRegresar}></button>
            <button className='arrow right b3'></button>
            <button className='arrow right b2'></button>
            <button className={true ? 'arrow right b1': 'color-green arrow right b1'}></button>
          </div>
          <div className="item item-7"></div>
          <div className="item item-8"></div>
          <div className="item item-9"></div>
      </div>
    ) 
}

export default SaldoPage;