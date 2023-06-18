import React from 'react'
import { Link } from 'react-router-dom'

import videobg from "../../assets/videobg.mp4"
import '../Home/Home.css'
import Footer from "../../components/Footer/Footer"

function Home() {
  return (
    <div className='home'>
      <div className="overlay"></div>
        <video src={videobg} autoPlay loop muted />
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
