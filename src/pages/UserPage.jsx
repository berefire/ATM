import React, { useState} from 'react'; 
import '../../public/login.css'; 
import { useNavigate} from "react-router-dom";
import { cuentas } from '../data/users';
  
function UserPage({}) { 
    const navigate = useNavigate();
    
    const [inputText, setInputText] = useState('');
    const [user, setUser] = useState(true);
    const [NoUser, setNoUser] = useState(false);
    const limit_character = 32;

   
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
      const user_exist = cuentas.find(cuenta => cuenta.nombre === inputText);

      if (user_exist) {
        setNoUser(false);
        setUser(true);
        navigate('/password', {state: {user_exist}});
        
        }
        setUser(false);
        setNoUser(true);
        setInputText('');
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
            <button className={'arrow left b4'} ></button>
            <button className='arrow left b3'></button>
            <button className='arrow left b2'></button>
            <button className='arrow left b1'></button>
          </div>
          <div className="item item-5">
            <div className="screen">
              {user && <h2>Ingrese su usuario:</h2>}
              {NoUser && <h2>Ingrese nuevamente su usuario:</h2>}
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
              <div className='SalirYContinuar'>{ false  && <h3>{'<'}--- Salir</h3>}</div>
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

export default UserPage;