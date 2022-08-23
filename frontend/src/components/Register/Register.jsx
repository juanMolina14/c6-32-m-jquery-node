import React, { useState } from 'react'
import SelectList from './SelectList'
import Navbar from '../navbar/Navbar'
import Footer from '../Footer/Footer'

function Register() {

  
  const [provincia, setProvincia] = useState()
  const [departamento, setDepartamento] = useState('')
  const [localidad, setLocalidad] = useState('')
  

  return (
    <>
      <Navbar />
      <div className="container">
        <div className="md-12 my-3">
          <h1>Ingresa tus datos</h1>
        </div>

        <form className="row g-3 mb-5">
          <div className="col-md-6">
            <label className="form-label">Nombre</label>
            <input type="text" className="form-control" />
          </div>
          <div className="col-md-6">
            <label className="form-label">Apellido</label>
            <input type="text" className="form-control" />
          </div>
          <div className="col-md-6">
            <label className="form-label">Teléfono</label>
            <input type="text" className="form-control" />
          </div>
          <div className="col-md-6">
            <label className="form-label">Email</label>
            <input type="email" className="form-control" />
          </div>
          {/* <div className="col-md-9">
            <label className="form-label">Calle</label>
            <input type="text" className="form-control" />
          </div>
          <div className="col-md-3">
            <label className="form-label">Numero</label>
            <input type="text" className="form-control" />
          </div> */}
          <div className='row align-items-center mb-3'>
            <div className="col-md-8">
                <label className="form-label">Calle</label>
                <input type="text" className="form-control" />
            </div>

            <div className="col-md-2">
                <label className="form-label">Numero</label>
                <input type="text" className="form-control" />
            </div>

            <div className="form-check col-md-2 text-center">
                <input className="form-check-input" type="checkbox" defaultValue id="flexCheckDefault" />
                <label className="form-check-label" htmlFor="flexCheckDefault">
                  Refugio
                </label>
            </div> 
        </div>

          <div className="col-md-4 pb-3">
          <label className="form-label">Provincia</label>
          <SelectList
                title="provincias"
                url={`https://apis.datos.gob.ar/georef/api/provincias?orden=nombre`}
                handleChange= {(e) => {
                  setProvincia(e.target.value)
                }}
              />
          </div>
          <div className="col-md-4 pb-3">
            <label className="form-label">Departamento</label>
            {!provincia && (
              <select className="form-select" >
              <option value="">...</option>
             </select>
            )}
            
            {provincia && (
            
            <SelectList
              title="departamentos"
              url={`https://apis.datos.gob.ar/georef/api/departamentos?orden=nombre&max=5000&provincia=${provincia}`}
              handleChange={(e) => {
                setDepartamento(e.target.value)
              }}
            />
          )} 
          </div>
          <div className="col-md-4 pb-3">
            <label className="form-label">Localidad</label>
            {!departamento && (
              <select className="form-select" >
              <option value="">...</option>
             </select>
            )}
            {departamento && (
            <SelectList
              title="localidades"
              url={`https://apis.datos.gob.ar/georef/api/localidades?orden=nombre&max=5000&departamento=${departamento}`}
              handleChange={(e) => {
                setLocalidad(e.target.value);
                console.log(localidad)
              }}
            />
          )} 
          </div>

          <div className="col-md-6 mx-auto d-flex align-items-center">
            <label className="form-label me-3">CBU</label>
            <input type="text" className="form-control " />
          </div>

          <div className="position-relative ">
            <button
              type="submit"
              className="btn btn-primary mt-5 position-absolute top-0 start-50 translate-middle"
            >
              Registrar
            </button>
          </div>
        </form>
      </div>
      <Footer />
    </>
  )
}

export default Register;
