import React from 'react'
import CardsMascotas from '../CardsMascotas/CardsMascotas'
import Navbar from '../navbar/Navbar'
import Nosotros from '../Nosotros/Nosotros'


export default function Home() {
  return (
    <div>
      <Navbar />
      <Nosotros/>
      <CardsMascotas/>
    </div>
  )
}


