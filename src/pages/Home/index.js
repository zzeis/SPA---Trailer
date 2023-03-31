import Logo from "../../img/fastfood.svg";
import "./style.css";
import { Player, Controls } from "@lottiefiles/react-lottie-player";
const Home = () => {
  return (
    <main className="container-home  h-screen md:h-full lg:h-screen sm:h-full">
     
        <div className="card-title">
          <h1 >
            Ohana
            <br />
            Trailer
          </h1>
          <p >
           O trailer da familia! venha se divertir com seus
           amigos.<br/>
           Lanches | Hotdogs | Salgados | Drinks
          </p>
        </div>
      <div className="animation ">
        <Player
          autoplay
          loop
          src="https://assets4.lottiefiles.com/packages/lf20_GUQObWT5Mw.json"
          style={{ height: "400px", width: "400px" }}
        ></Player>
      </div>
      
    </main>
    
  );
};

export default Home;
