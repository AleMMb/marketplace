import Avatar from '@mui/material/Avatar';
import product9 from  '../assets/9.jpg'
import { Link } from 'react-router-dom';

import PersonalData from '../components/PersonalData';
import AdressData from  '../components/AdressData'

import '../styles/Dashboard.css'
import { useState } from 'react';

function Dashboard() {
  const [mostrar, setMostrar] = useState({})

  return (
    <div className="dashboard">

      <div className="left-side">
      <h1>Mi cuenta</h1>
        <Avatar alt="my pic" src={product9} sx={{ width: 200, height: 200 }} />
        <button on onClick={()=> setMostrar (true)}><Link to={PersonalData}/>Datos Personales</button>
        <button on onClick={()=> setMostrar (false)}><Link to={AdressData}/>Direccion</button>
      </div>

     
      <div className="rigth-side">

        { mostrar ? <PersonalData/> : <AdressData/> } 

      </div>

    </div>
  )
}

export default Dashboard
