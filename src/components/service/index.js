
import Serv from '../../img/service.svg';
import './style.css';
const Service = ({name = "default"}) =>{
    return(
        <div className='container-service'>
            <img src={Serv} alt='service'></img>
            <p>{name}</p>

        </div>
    )
}

export default Service;