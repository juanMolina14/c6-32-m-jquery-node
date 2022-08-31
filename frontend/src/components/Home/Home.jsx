import React from 'react'
import CardsMascotas from '../CardsMascotas/CardsMascotas'
import Navbar from '../navbar/Navbar'
import Nosotros from '../Nosotros/Nosotros'
import Footer from '../Footer/Footer'
import "bootswatch/dist/lux/bootstrap.min.css";
import Reportar from '../Reportar/Reportar'
// import FetchAll from './FetchAll'

export default function Home() {
  return (
    <>
      <Navbar />
      <Nosotros/>
      <CardsMascotas/>
      <Reportar/>
      <Footer />
    </>
  )
}


