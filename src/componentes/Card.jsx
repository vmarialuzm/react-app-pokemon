import '../styles/card.css';
import { Link } from 'react-router-dom';

export const Card = ({nombre, url}) => {
    // Obtén el ID del URL del Pokemon
    const pokemonId = url.split('/').filter(Boolean).pop();
    
    return (
        <div className="tarjeta">
            <div className="tarjeta-contenido">
                <h3 className="tarjeta-titulo">{nombre}</h3>
                <p className="tarjeta-descripcion">{url}</p>
            </div>
                <Link to={`/${pokemonId}`} className='btn btn-primary'>Ver más</Link>
        </div>
    )
}
