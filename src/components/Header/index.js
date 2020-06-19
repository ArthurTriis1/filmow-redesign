import React, { useState } from 'react';
import logo from '../../assets/logo.png';
import { FiMenu } from 'react-icons/fi';
import { AiOutlineClose } from 'react-icons/ai'

import './Header.css';

const Header = () => {

    const [portable, setPortable] = useState(window.outerWidth <= 860);
    const [showMenu, setShowMenu] = useState(false)

    window.addEventListener('resize', function(){
        setPortable(window.outerWidth <= 860)
    });

    return(
        <header>
            <div className="leftHeader">
                <img src={logo} alt="Filmow"/>
                
                {
                    !portable &&
                    <ul>
                        <li>Início</li>
                        <li>Filmes</li>
                        <li>Séries</li>
                        <li>TV</li>
                        <li>Listas</li>
                        <li>Artistas</li>
                        <li>Usuários</li>
                        <li>Notícias</li>
                        <li>Grupos</li>
                    </ul>
                }
            </div>
            
            <div  className={`rigthHeader ${showMenu? '' : 'close'}`} >
                {
                    portable && 
                    <AiOutlineClose 
                    className="closeButton"
                    onClick={() => {setShowMenu(false)}}/> 
                }
                {
                    !portable &&
                    <>
                        <a href="/">Entrar</a>
                        <button>Cadastre-se</button>
                    </>
                }
                {
                    portable &&
                    <ul>
                        <li>Início</li>
                        <li>Filmes</li>
                        <li>Séries</li>
                        <li>TV</li>
                        <li>Listas</li>
                        <li>Artistas</li>
                        <li>Usuários</li>
                        <li>Notícias</li>
                        <li>Grupos</li>
                    </ul>
                }
            </div>
            {portable && 
                <div className="optionsPortable">
                    <a href="/">Entrar</a>
                    <FiMenu className="menuHamburguer"  onClick={() => {setShowMenu(true)}}/>
                </div>
            }
        </header>
    )
}

export default Header;

