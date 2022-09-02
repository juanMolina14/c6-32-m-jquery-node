import React, { useEffect, useState } from 'react'
import "bootswatch/dist/lux/bootstrap.min.css";
import ListaMascotas from './ListaMascotas';
import './FetchMascotasPerdidas.css';
import SelectList from '../Register/SelectList';
import { useForm } from "react-hook-form";


const FetchMascotasPerdidas = () => {

  const [reqData, setReqData] = useState([]);
  const [filter, setFilter] = useState([]);


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

  const { register, handleSubmit, watch, formState: { errors } } = useForm({
    defaultValues: {
      //shelter: false,
    }
  });


  const filterReqData = (filter) => {
      console.log("dentro de la funcion con data:" + filter);
  }


  const onSubmit = data => {
    setFilter(data);
    filterReqData(filter);
  }

  const province = watch("province", "");
  const department = watch("department", "");

  useEffect(() => {
    fetch("http://localhost:3030/pet/")
      .then((res) => {
        return res.json()
      })
      .then((data) => {
        setReqData(data[0]);
      });
  }, []);



  return (
    <div>
      <form className="row g-3 mb-5" onSubmit={handleSubmit(onSubmit)}>
        <div className="row my-5">

          <div className="col-md-4 mt-3">
            <label className="form-label">Provincia</label>
            <select className="form-select" aria-invalid={errors.province ? "true" : "false"}{...register("province", { required: true })}>
              <SelectList
                title="provincias"
                url={`https://apis.datos.gob.ar/georef/api/provincias?orden=nombre`}

              />
            </select>
            {errors.province && errors.province.type === "required" && (
              <span role="alert">Seleccione una Provincia</span>
            )}
          </div>
          <div className="col-md-4 mt-3">
            <label className="form-label">Departamento</label>
            {!province && (
              <select className="form-select " >
                <option value="">...</option>
              </select>
            )}

            {province && (
              <select className="form-select" aria-invalid={errors.department ? "true" : "false"}{...register("department", { required: true })}>
                <SelectList
                  title="departamentos"
                  url={`https://apis.datos.gob.ar/georef/api/departamentos?orden=nombre&max=5000&provincia=${province}`}

                />
              </select>
            )}
            {errors.department && errors.department.type === "required" && (
              <span role="alert">Seleccione una departamento</span>
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
              <select className="form-select" aria-invalid={errors.city ? "true" : "false"}{...register("city", { required: true })}>
                <SelectList
                  title="localidades"
                  url={`https://apis.datos.gob.ar/georef/api/localidades?orden=nombre&max=5000&departamento=${department}`}
                />
              </select>
            )}
            {errors.city && errors.city.type === "required" && (
              <span role="alert">Seleccione una localidad</span>
            )}
          </div>
        </div>
        <div className="col-md-4">
          <label className="form-label">Categoría</label>
          <select className="form-select" aria-invalid={errors.category ? "true" : "false"}{...register("category", { required: true })}>
            <option value="">Elige</option>
            {
              mascotasAPI.categoria.map((el) => (
                <option key={el.nombre} value={el.nombre}>
                  {el.nombre}
                </option>
              ))}
          </select>
        </div>

        <div className="position-relative">
          <button
            type="submit"
            className="btn btn-primary position-absolute top-0 start-50 translate-middle">
              Buscar
          </button>
        </div>

      </form>

      <ListaMascotas data={reqData} />
    </div>
  );

}

export default FetchMascotasPerdidas




