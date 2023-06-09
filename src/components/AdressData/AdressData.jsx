import "../styles/AdressData.css"

function AdressData() {
  return (
    <div className="adress-data">
      <h3>Dirección.</h3>
          <div>
            <p> <b>Calle:</b> Las rosas</p>
            <p> <b>Número:</b> 152</p>
            <p> <b>Comuna:</b> Chiguayante</p>
            <p><b>Región:</b> Bio-Bio</p>
            <div className="button-container">
            <button>editar</button>
            </div>
          </div>
    </div>
  )
}

export default AdressData
