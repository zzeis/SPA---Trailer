import Logo from "../../img/fastfood.svg";
import "./style.css";
import { Player, Controls } from "@lottiefiles/react-lottie-player";
const Home = () => {
  return (
    <main className="container-home">
     
        <div className="card-title">
          <h1>
            Ohana
            <br />
            Trailer
          </h1>
          <p>
            Consectetur sit veniam commodo veniam nisi. Dolore dolor ut sit non
            aliquip esse ea mollit do sint quis minim voluptate dolore. Eiusmod
            duis consequat do Lorem aute.
          </p>
        </div>
      <div>
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
