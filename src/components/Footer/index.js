import React from 'react';
import { AiOutlineInstagram, AiOutlineTwitter, AiFillFacebook  } from 'react-icons/ai'
import { FaDailymotion } from 'react-icons/fa'
import './Footer.css'

const Footer = () => {

    function handleClick1() {
        window.location.assign('https://www.instagram.com/filmow/');
      }

    function handleclick2() {
        window.location.assign('https://twitter.com/filmow');
      }
    
    function handleclick3() {
        window.location.assign('https://www.facebook.com/filmow');
      }
    
    function handleclick4() {
        window.location.assign('https://www.dailymotion.com/filmow');
      }  
    
    return (
        <footer>
            <div className="containerFooter">
                <div className="itensFooter">
                    <ul>
                        <li className="title">Filmes</li>
                        <li>Todos</li>
                        <li>Estreias</li>
                        <li>Nos Cinemas</li>
                        <li>Em Breve</li>
                        <li>DVD/Blu-ray</li>
                        <li>Curtas Metragens</li>
                    </ul>
                    <ul>
                        <li className="title">Séries</li>
                        <li className="title">TV</li>
                    </ul>
                    <ul>
                        <li  className="title">Listas</li>
                        <li>Destaques</li>
                        <li>Populares</li>
                        <li>Populares da Semana</li>
                        <li>Recentes</li>
                        <li>Minhas listas</li>
                    </ul>
                    <ul>
                        <li  className="title">Pessoas</li>
                        <li>Artistas</li>
                        <li>Usúarios</li>
                    </ul>
                    <ul>
                        <li  className="title">Notícias</li>
                        <li>Populares</li>
                        <li>Recentes</li>
                    </ul>
                </div>
                <div className="social">
                    <AiOutlineInstagram className="socialIcon" onClick={handleClick1}/>
                    <AiOutlineTwitter className="socialIcon"onClick={handleclick2}/>
                    <AiFillFacebook className="socialIcon" onClick={handleclick3}/>
                    <FaDailymotion className="socialIcon" onClick={handleclick4}/>
                </div>
            </div>
        </footer>
    )
}

export default Footer;