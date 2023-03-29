


import './style.css';
const Service = ({name = "default"}) =>{
    return(
        <div className='container-item'>         
            <p>{name}</p>
        </div>
    )
}

export default Service;