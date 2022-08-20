import React, { useState } from 'react'
import SelectList from '../Register/SelectList'
import "bootswatch/dist/lux/bootstrap.min.css";




function FormReport() {

  
  const [provincia, setProvincia] = useState()
  const [departamento, setDepartamento] = useState('')
  const [localidad, setLocalidad] = useState('')

  const mascotasAPI = {
    categoria : [
        {
            nombre: "perro",
            descripcion: "mascota tipo perro"
        },
        {
            nombre: "gato",
            descripcion: "mascota tipo gato"
        },
        {
            nombre: "otro",
            descripcion: "mascota tipo otro"
        }
    ],
    raza: [
        {
            nombre: "Mestiso",
            descripcion: "mascota tipo mestiso"
        },
        {
            nombre: "Caniche",
            descripcion: "mascota tipo caniche"
        },
        {
            nombre: "Ovejero",
            descripcion: "mascota tipo Ovejero"
        }
    ],
    color: [
        {
            nombre: "Negro",
            descripcion: "mascota tipo Negro"
        },
        {
            nombre: "Blanco",
            descripcion: "mascota tipo Blanco"
        },
        {
            nombre: "Marron",
            descripcion: "mascota tipo Marron"
        }
    ],
    tamaño: [
        {
            nombre: "Grande",
            descripcion: "mascota tipo Grande"
        },
        {
            nombre: "Mediano",
            descripcion: "mascota tipo Mediano"
        },
        {
            nombre: "Chico",
            descripcion: "mascota tipo Chico"
        }
    ]
  }

  

  return (
    <>
       
        <div className="d-flex justify-content-between my-3">
          <div className="col-md-3">
              <label className="form-label">Categoría</label>

                  <select className="form-select">  {/*  name={""} id={""}  onChange={handleChange}*/}
                      <option value="">Elige</option>
                      {
                          mascotasAPI.categoria.map((el) => (
                          <option key={el.nombre} value={el.nombre}>
                              {el.nombre}
                          </option>
                          ))}
                  </select>
          </div>

          <div className="col-md-3">
              <label className="form-label">Raza</label>

                  <select className="form-select">  {/*  name={""} id={""}  onChange={handleChange}*/}
                      <option value="">Elige</option>
                      {
                          mascotasAPI.raza.map((el) => (
                          <option key={el.nombre} value={el.nombre}>
                              {el.nombre}
                          </option>
                          ))}
                  </select>
          </div>

          <div className="col-md-3">
              <label className="form-label">Color</label>

                  <select className="form-select">  {/*  name={""} id={""}  onChange={handleChange}*/}
                      <option value="">Elige un</option>
                      {
                          mascotasAPI.color.map((el) => (
                          <option key={el.nombre} value={el.nombre}>
                              {el.nombre}
                          </option>
                          ))}
                  </select>
          </div>         
        </div>

        <div className="d-flex justify-content-between mb-3">
            <div className="col-md-4">
                <label className="form-label">Tamaño</label>

                    <select className="form-select">  {/*  name={""} id={""}  onChange={handleChange}*/}
                        <option value="">Elige</option>
                        {
                            mascotasAPI.tamaño.map((el) => (
                            <option key={el.nombre} value={el.nombre}>
                                {el.nombre}
                            </option>
                            ))}
                    </select>
            </div>

            <div className="col-md-3">
                <label className="form-label">Nombre</label>
                <input type="text" className="form-control" />
            </div>                       
            <div className="col-md-3">
                <label className="form-label">Descripcion</label>
                <input type="text" className="form-control" />
            </div>                       
        </div>

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

        <div className='row mb-4'>
            <div className="col-md-4">
              <label className="form-label">Provincia</label>
              <SelectList
                  title="provincias"
                  url={`https://apis.datos.gob.ar/georef/api/provincias?orden=nombre`}
                  handleChange= {(e) => {
                    setProvincia(e.target.value)
                  }}
                />
            </div>
            <div className="col-md-4">
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
            <div className="col-md-4">
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
        </div>

        <div className="d-flex  align-items-center justify-content-center my-3 "> 
          <label htmlFor="formFile" className="form-label col-4 text-center ">Subir una foto</label>
          <input className="form-control" type="file" id="formFile" />
        </div>


      <div className="container py-5">
        <form className="row g-3 ">

          <div className="position-relative">
            <button
              type="submit"
              className="btn btn-primary position-absolute top-0 start-50 translate-middle"
            >
              Reportar
            </button>
          </div>
        </form>
      </div>
      
    </>
  )
}

export default FormReport;

   
          
    
            
           
          
      
            
     

