import { Link } from "react-router-dom";
import './style.css'

const Header = () =>{
    return(
        <main className="container-main">
            <h1>Consultoria</h1>

            <ul>
                <li><Link to='/'><a>Home</a></Link></li>
                <li><Link to='/service'><a>Service</a></Link></li>
                <li><Link to='/contact'><a>Contact</a></Link></li>
            </ul>

        </main>
    )
}

export default Header;