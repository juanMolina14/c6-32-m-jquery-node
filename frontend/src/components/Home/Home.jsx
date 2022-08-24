import React from 'react'
import CardsMascotas from '../CardsMascotas/CardsMascotas'
import Navbar from '../navbar/Navbar'
import Nosotros from '../Nosotros/Nosotros'

import { NavLink } from 'react-router-dom'

import Footer from '../Footer/Footer'



export default function Home() {
  return (
    <>
      <Navbar />
      <Nosotros/>
      <CardsMascotas/>

      <figure className="text-center">
                <h1>¿Encontraste o Perdiste?</h1>
                <blockquote className="blockquote">
                    <p className="mb-0">Publica una nueva busqueda en nuestro Portal</p>
                </blockquote>
                <br></br>
                <button type="button" className="btn btn-danger"><NavLink className="btn-Reportar" to="/Report">Reportar</NavLink></button>
      </figure>
    </>

      <Footer />
    </div>

  )
}


