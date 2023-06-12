import React from 'react'
import { Link } from 'react-router-dom'

import '../Home/Home.css'
import hero from '../../assets/HEROclay.jpg'
import Footer from "../../components/Footer/Footer"

function Home() {
  return (
    <div className='home' style={{backgroundImage:`url(${hero})`}}>
        <div className='headerContainer'>
          <h1>Estudio Pingüino</h1>
          <p>Pasión por el arte</p>
          <Link to='shop'>
            <button>Comprar</button>
          </Link>
        </div>
        <Footer/>
    </div>
  )
}

export default Home
