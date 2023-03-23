import Logo from '../../img/drawn.svg'
import './style.css';
const Home = () =>{
    return(
        <main className='container-home'>
            <img src={Logo} alt='Logo'></img>
            <div>
                <h1>My Title</h1>
                <p>Consectetur sit veniam commodo veniam nisi. Dolore dolor ut sit non aliquip esse ea mollit do sint quis minim voluptate dolore. Eiusmod duis consequat do Lorem aute.</p>
                <button>Acessar Serviços</button>
            </div>
        </main>
    )
}

export default Home;