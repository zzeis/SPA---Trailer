import Logo from '../../img/fastfood.svg'
import './style.css';
const Home = () =>{
    return(
        <main className='container-home'>
           
            <div>
              
                <h1>Ohana<br/>Trailer</h1>
                <p>Consectetur sit veniam commodo veniam nisi. Dolore dolor ut sit non aliquip esse ea mollit do sint quis minim voluptate dolore. Eiusmod duis consequat do Lorem aute.</p>
               
            </div>
            <img src={Logo}/>
        </main>
    )
}

export default Home;