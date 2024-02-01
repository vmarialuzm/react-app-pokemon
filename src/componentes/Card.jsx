import '../styles/card.css'

export const Card = ({nombre, url}) => {
  return (
    <div className="tarjeta">
        <div className="tarjeta-contenido">
            <h3 className="tarjeta-titulo">{nombre}</h3>
            <p className="tarjeta-descripcion">{url}</p>
        </div>
            <button className='btn btn-primary'>Ver más</button>
    </div>
  )
}
