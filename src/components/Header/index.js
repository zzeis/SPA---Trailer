import { Link } from "react-router-dom";
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

        </main>
    )
}

export default Header;