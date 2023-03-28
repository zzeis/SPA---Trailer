import { Link } from "react-router-dom";
import logo from '../../img/logo.png';
import {AiFillInstagram} from 'react-icons/ai'
import {BsFacebook} from 'react-icons/bs'
import './style.css'

const Header = () =>{
    return(
        <main className="container-main">
            <h1>Ohana</h1>

            <ul>
                <li><Link to='/'><a>Inicio</a></Link></li>
                <li><Link to='/service'><a>Cardapio</a></Link></li>
                <li><Link to='/contact'><a>Sobre</a></Link></li>
            </ul>

            <ul className="icons">
                <li><AiFillInstagram/></li>
                <li><BsFacebook/></li>  
            </ul>

        </main>
    )
}

export default Header;