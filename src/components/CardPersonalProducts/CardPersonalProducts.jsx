import "../CardPersonalProducts/CardPersonalProducts.css"

const CardPersonalProducts = (info) => {
    const {nombre, descripcion, precio, imagen} = info.data

  return (
    <div className="personal-product-container">
        <img src={imagen} alt="" />
        <div>
            <p>{nombre}</p>
        </div>
        <div>
        <p>{descripcion}</p>
        </div>
        {precio}
        <div className="actions">
            <button>Editar</button>
            <button>Eliminar</button>
        </div>

    </div>

  )
}
export default CardPersonalProducts