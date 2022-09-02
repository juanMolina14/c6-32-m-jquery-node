import React, { useEffect, useState } from 'react'
import "bootswatch/dist/lux/bootstrap.min.css";
import ListaMascotas from './ListaMascotas';
import './FetchMascotasPerdidas.css';
import SelectList from '../Register/SelectList';

const FetchMascotasPerdidas = () => {

  const [reqData, setReqData] = useState([]);
  const [searchProvince, setSearchProvince] = useState("");
  const [searchDepartment, setSearchDepartment] = useState("");
  const [searchCity, setSearchCity] = useState("");
  const [searchCategory, setSearchCategory] = useState("");
  const [province, setProvince] = useState("");
  const [department, setDepartment] = useState("");


  const mascotasAPI = {
    categoria: [
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
  };


  const URL = 'http://localhost:3030/pet'

  const showData = async () => {
    const response = await fetch(URL)
    const data = await response.json()
    setReqData(data[0]);
 
  }  
  
  
  useEffect(()=>{
    showData()

  },[])

  const searcherProvince = (e) =>{
    setSearchProvince(e.target.value)
   
    setProvince(e.target.value)
    setSearchDepartment("")
  }
  const searcherDepartment = (e) =>{
    setSearchDepartment(e.target.value)
   
    setDepartment(e.target.value)
    setSearchCity("")
  }
  const searcherCity = (e) =>{
    setSearchCity(e.target.value)
    setSearchCategory("")
  }
  const searcherCategory = (e) =>{
    setSearchCategory(e.target.value)
    
  }


  
  let results2 = reqData;

  const results = !searchProvince ? reqData : reqData.filter( (dato) =>dato.province.toLowerCase().includes(searchProvince.toLocaleLowerCase()))
{searchProvince &&(
  results2 = !searchDepartment ? results : results.filter( (dato) =>dato.department.toLowerCase().includes(searchDepartment.toLocaleLowerCase()))
)}
{searchDepartment &&(
  results2 = !searchCity ? results2 : results2.filter( (dato) =>dato.city.toLowerCase().includes(searchCity.toLocaleLowerCase()))
)}
{searchCity &&(
  results2 = !searchCategory ? results2 : results2.filter( (dato) =>dato.category.toLowerCase().includes(searchCategory.toLocaleLowerCase()))
)}




  return (
    <div>
      <form className="row g-3 mb-5">
        <div className="row my-5">

          <div className="col-md-4 mt-3">
            <label className="form-label">Provincia</label>
            <select value={searchProvince}  onChange={searcherProvince} className="form-select">
              <SelectList
                title="provincias"
                url={`https://apis.datos.gob.ar/georef/api/provincias?orden=nombre`}

              />
            </select>
           
          </div>
          <div className="col-md-4 mt-3">
            <label className="form-label">Departamento</label>
            {!province && (
              <select className="form-select " >
                <option value="">...</option>
              </select>
            )}

            {province && (
              <select  value={searchDepartment}  onChange={searcherDepartment} className="form-select">
                <SelectList
                  title="departamentos"
                  url={`https://apis.datos.gob.ar/georef/api/departamentos?orden=nombre&max=5000&provincia=${province}`}

                />
              </select>
            )}
           
          </div>
          <div className="col-md-4 mt-3">
            <label className="form-label">Localidad</label>
            {!department && (
              <select className="form-select" >
                <option value="">...</option>
              </select>
            )}
            {department && (
              <select className="form-select"  value={searchCity}  onChange={searcherCity}>
                <SelectList
                  title="localidades"
                  url={`https://apis.datos.gob.ar/georef/api/localidades?orden=nombre&max=5000&departamento=${department}`}
                />
              </select>
            )}
           
          </div>
        </div>
        <div className="col-md-4">
          <label className="form-label">Categoría</label>
          <select className="form-select" value={searchCategory}  onChange={searcherCategory}>
            <option value="">Elige</option>
            {
              mascotasAPI.categoria.map((el) => (
                <option key={el.nombre} value={el.nombre}>
                  {el.nombre}
                </option>
              ))}
          </select>
        </div>

       
      </form>

      <ListaMascotas data={results2} />
    </div>
  );

}

export default FetchMascotasPerdidas




