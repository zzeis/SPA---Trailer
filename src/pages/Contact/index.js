
import './style.css';
const Contato = () =>{
    return(
        <div className="container-contact">
            <form>
                <input placeholder="Nome completo"/>
                <input placeholder="Email"/>
                <input placeholder="Telefone"/>
                <input type='submit'/>
            </form>
        </div>
    )
}

export default Contato;