import './style.css';
import {AiOutlineGithub} from 'react-icons/ai'
import {MdLocationOn} from 'react-icons/md'
import {BsFillTelephoneFill} from 'react-icons/bs'
const Footer = () =>{
    return(
        <footer>
             
             <p className='adress'> <MdLocationOn/> Av. Princesa Isabel, 731 - Centro, Iguape - SP, 11920-000
                 <BsFillTelephoneFill/>(13)997064784
             </p>
            <p>by @zzeis <br/> <AiOutlineGithub/> </p>
            
        </footer>
    )
}

export default Footer;