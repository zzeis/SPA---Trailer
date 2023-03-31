import "./style.css";
import photo from "../../img/photo.jpg"
const Sobre = () => {
  return (
    <div className="container-sobre h-screen md:h-screen lg:h-screen sm:h-full">
      <p>
       Trailer localizado na Cidade Iguape SP, gerenciado pelo tio Oziender e a tia Eunice,
       começou em 2019 e se mantem até hoje.
       
      <hr/>
     
      </p>
      <img src={photo}/>
    </div>
  );
};

export default Sobre;
