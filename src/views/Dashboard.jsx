import Avatar from '@mui/material/Avatar';
import product9 from  '../assets/9.jpg'
import { Link } from 'react-router-dom';

import PersonalData from '../components/PersonalData';
import AdressData from  '../components/AdressData'

import '../styles/Dashboard.css'

function Dashboard() {
  return (
    <div className="dashboard">

      <div className="left-side">
      <h1>Mi cuenta</h1>
        <Avatar alt="Travis Howard" src={product9} sx={{ width: 200, height: 200 }} />
        <h3><b>rol: admin</b></h3>
        <button><Link to={PersonalData}/>Datos Personales</button>
        <button><Link to={AdressData}/>Direccion</button>
      </div>

     
      <div className="rigth-side">
          <PersonalData/>
          {' '}
          <AdressData/>
      </div>

    </div>
  )
}

export default Dashboard
