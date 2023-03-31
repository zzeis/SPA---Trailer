import { Link } from "react-router-dom";
import logo from '../../img/logo.png';
import {AiFillInstagram} from 'react-icons/ai'
import {GrFacebookOption} from 'react-icons/gr'
import {IoMdFlower} from 'react-icons/io'
import './style.css'

const Header = () =>{
    return(
        <main className="container-main">
            <h1><IoMdFlower/>Ohana</h1>

            <ul>
                <li><Link to='/'><a>Inicio</a></Link></li>
                <li><Link to='/service'><a>Cardapio</a></Link></li>
                <li><Link to='/contact'><a>Sobre</a></Link></li>
            </ul>

            <ul className="icons">
                <li><a href="https://www.instagram.com/ohana.trailer/"><AiFillInstagram/></a></li>
                <li><a href="https://www.facebook.com/ohana.trailer013"><GrFacebookOption/></a></li>  
            </ul>

        </main>
    )
}

export default Header;