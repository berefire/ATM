import React, { useState} from 'react'; 
import '../../public/login.css'; 
import { useLocation, useNavigate } from "react-router-dom";

function RetiroPage() {
    const navigate = useNavigate(); 
    const location = useLocation();
    const {user_exist} = location.state;
    const [inputText, setInputText] = useState('');
    const [saldo, setSaldo] = useState(true);
    const [NoNumber, setNoNumber] = useState(false);
    const limit_character = 32;
    let new_saldo, net_saldo;
    let cambio_saldo = false;

    const regex_numerico = /^[0-9]*$/;

   
    const handleKeyClick = (key) => { 
      if(inputText.length < limit_character)
      {
        if (key === 'borrar') { 
            setInputText(inputText.slice(0, -1))
        } else if (key === 'espacio') { 
            setInputText(inputText + ' ');
        }else {
            setInputText(inputText + key);
        }
      } 
    };

    const handleClicContinuar = () => {
        const onlyNumbers = regex_numerico.test(inputText);
        if (onlyNumbers) {
            setSaldo(true);
            setNoNumber(false);
            new_saldo = Number(inputText);
            net_saldo = user_exist.saldo - new_saldo;
            if(net_saldo >= 10){
                user_exist.saldo = net_saldo;
                cambio_saldo = true;
            } else {
                cambio_saldo = false;
            }
            navigate('/saldo', {state: {user_exist, cambio_saldo}});
        
        } else {
            setSaldo(false);
            setNoNumber(true);
            setInputText('');
        }
        
    }

    const handleClicRegresar = () => {
        navigate('/menu', {state: {user_exist}});
    }
    
    const teclado = [
        ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'],
        ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'],
        ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'ñ' ],
        ['z', 'x', 'c', 'v', 'b', 'n', 'm', 'borrar'],
        [ 'espacio']
    ];

    return ( 
      <div className='container'>
          <div className="item item-1"></div>
          <div className="item item-2"></div>
          <div className="item item-3"></div>
          <div className="item item-4">
            <button className={false ? 'arrow left b4': 'color-green arrow left b4'} onClick={handleClicRegresar}></button>
            <button className='arrow left b3'></button>
            <button className='arrow left b2'></button>
            <button className='arrow left b1'></button>
          </div>
          <div className="item item-5">
            <div className="screen">
              {saldo && <h2>¿Cuánto desea retirar?</h2>}
              {NoNumber && <h2>Ingrese una cantidad numérica para retirar: </h2>}
              <input 
                className='textcontainer'
                type="text" 
                value={inputText}
              readOnly />
            </div>
            <div className='keyboard'>
              {teclado.map((fila, rowIndex) => (
                <div className='row' key={rowIndex}>
                {fila.map((tecla, colIndex) => (
                  <button className={(tecla === "espacio" ? "espacio key" : tecla == "borrar" ? "borrar key" : "key" )} key={colIndex} onClick={() => handleKeyClick(tecla)}>
                    {tecla}
                  </button>
                  ))}
                </div>
              ))}
            </div>
            <div className='options'>
              <div className='Regresar'>{ true  && <h3>{'<'}--- Regresar</h3>}</div>
              <div className='Continuar'><h3>Continuar ---{'>'}</h3></div>
            </div>
          </div>
          <div className="item item-6">
            <button className={false ? 'arrow right b4': 'color-green arrow right b4'} onClick={handleClicContinuar}></button>
            <button className='arrow right b3'></button>
            <button className='arrow right b2'></button>
            <button className='arrow right b1'></button>
          </div>
          <div className="item item-7"></div>
          <div className="item item-8"></div>
          <div className="item item-9"></div>
      </div>
    ) 
}

export default RetiroPage;
