import Avatar from '@mui/material/Avatar';
import avatar from  "../../assets/60111.jpg"
import { Link } from 'react-router-dom';

import PersonalData from '../../components/PersonalData/PersonalData';
import AdressData from  '../../components/AdressData/AdressData'

import '../Dashboard/Dashboard.css'
import { useState } from 'react';

function Dashboard() {
const [mostrar, setMostrar] = useState("")

  return (
    <div className="dashboard">

      <div className="left-side">
      <h1>Mi cuenta</h1>
        <Avatar alt="my pic" src={avatar} sx={{ width: 200, height: 200 }} />
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
