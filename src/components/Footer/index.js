import React from 'react';
import { AiOutlineInstagram, AiOutlineTwitter, AiFillFacebook  } from 'react-icons/ai'
import { FaDailymotion } from 'react-icons/fa'
import './Footer.css'

const Footer = () => {
    return (
        <footer>
            <div className="itensFooter">
                <ul>
                    <li>Filmes</li>
                    <li>Todos</li>
                    <li>Estreias</li>
                    <li>Nos Cinemas</li>
                    <li>Em Breve</li>
                    <li>DVD/Blu-ray</li>
                    <li>Curtas Metragens</li>
                </ul>
                <ul>
                    <li>Séries</li>
                    <li>TV</li>
                </ul>
                <ul>
                    <li>Listas</li>
                    <li>Destaques</li>
                    <li>Populares</li>
                    <li>Populares da Semana</li>
                    <li>Recentes</li>
                    <li>Minhas listas</li>
                </ul>
                <ul>
                    <li>Pessoas</li>
                    <li>Artistas</li>
                    <li>Usúarios</li>
                </ul>
                <ul>
                    <li>Notícias</li>
                    <li>Populares</li>
                    <li>Recentes</li>
                </ul>
            </div>
            <div className="social">
                <AiOutlineInstagram className="socialIcon"/>
                <AiOutlineTwitter className="socialIcon"/>
                <AiFillFacebook className="socialIcon"/>
                <FaDailymotion className="socialIcon"/>
            </div>
        </footer>
    )
}

export default Footer;