import React from 'react';
import logo from '../../assets/logo.png';

import './Header.css';

const Header = () => {
    return(
        <header className="Header">
            <div className="leftHeader">
                <img src={logo} alt="Filmow"/>
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
            </div>
            <div className="rigthHeader">
                <a href="/">Entrar</a>
                <button>Cadastre-se</button>
            </div>
        </header>
    )
}

export default Header;