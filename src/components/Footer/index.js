import './style.css';
import {AiOutlineGithub} from 'react-icons/ai'
import {MdLocationOn} from 'react-icons/md'
import {BsFillTelephoneFill} from 'react-icons/bs'
const Footer = () =>{
    return(
        <footer >
             
             <span className='adress'>
                
                <MdLocationOn/> Av. Princesa Isabel , 731 - Centro, Iguape - SP (s/n)
                <BsFillTelephoneFill/>(13)997064784
             </span>
             <a href='https://github.com/zzeis/SPA---Trailer'> <p> by @zzeis <br/> <AiOutlineGithub/> </p></a>
            
        </footer>
    )
}

export default Footer;