import React from 'react'
import SelectList from './SelectList'
import Navbar from '../navbar/Navbar'
import Footer from '../Footer/Footer'


import { useForm } from "react-hook-form";
// import { TextField, Checkbox } from "@material-ui/core";

export default function Regist() {




  const { register, handleSubmit, watch, formState: { errors } } = useForm({
    defaultValues:{
        shelter: false,
    }
  });


  const onSubmit = data =>  alert(JSON.stringify(data));

//   const province = register("province");
//   const departament = register("departament");
//   const city = register("city");

const provincia = watch("province", "");
const departamento = watch("departament", "");
// const localidad = watch("city", "");
const password = watch("password", "");
const password2 = watch("password2", "");


  
 
   
  return (
    <>
       <Navbar />
    <div className="container">
   
    <form  className="row g-3 mb-5" onSubmit={handleSubmit(onSubmit)}>
        <div className="d-flex flex-column align-items-center">

          <div className="col-md-6 my-3">
              <h1>Ingresa tus datos</h1>
          </div>

          <div className="col-md-6 mb-3">
            <label className="form-label">Email</label> 
            <input type="email"  className="form-control"  aria-invalid={errors.email ? "true" : "false"}{...register("email",{ required:{value: true, message:"Email es requerido"} , maxLength: 30 })} />
              {errors.email && errors.email.type === "required" && (
                <span role="alert">Teléfono es requerido</span>
              )}
          </div>

          <div className="col-md-6 mb-3">
                <label className="form-label">Contraseña</label>
                <input type="password" className="form-control"  aria-invalid={errors.password ? "true" : "false"}{...register("password",{ required: true , maxLength: 20 })} />
                {errors.password && errors.password.type === "required" && (
                <span role="alert">Password es requerido</span>
              
                )}
          </div>

          <div className="col-md-6 mb-3">
                <label className="form-label">Repetir Contraseña</label>
                <input type="password" className="form-control"  aria-invalid={errors.password2 ? "true" : "false"}{...register("password2",{ required: true , maxLength: 20 })} />
                {password2 !== password && password2!== ""&&(
                <span role="alert">Las contraseñas deben coincidir</span>
              
                )}
          </div>

          <div className="col-md-6 mb-3">
                <label className="form-label">Nombre</label> 
                <input  className="form-control"  aria-invalid={errors.firstName ? "true" : "false"}{...register("firstName",{ required: true, maxLength: 20 })} />
                {errors.firstName && errors.firstName.type === "required" && (
                <span role="alert">Nombre es requerido</span>
              
                )}
          </div>

          <div className="col-md-6 mb-3">
                <label className="form-label">Apellido</label> 
                <input  className="form-control"  aria-invalid={errors.lastName ? "true" : "false"}{...register("lastName",{ required: true, maxLength: 20 })} />
                {errors.lastName && errors.lastName.type === "required" && (
                <span role="alert">Apellido es requerido</span>
              
                )}
          </div>

          <div className="col-md-6 mb-3">
                    <label className="form-label">Telefono</label> 
                    <input type="tel" className="form-control"  aria-invalid={errors.tel ? "true" : "false"}{...register("tel",{ required:{value: true, message:"Teléfono es requerido"} , maxLength: 20 })} />
                    {errors.tel && errors.tel.type === "required" && (
                    <span role="alert">Teléfono es requerido</span>
                    )}
          </div>

          <div className="col-md-6 col-sm-6 mb-3 ">
            <label className="form-label">Provincia</label>
                <select className="form-select"  aria-invalid={errors.province ? "true" : "false"}{...register("province",{ required: true})}>
                <SelectList
                    title="provincias"
                    url={`https://apis.datos.gob.ar/georef/api/provincias?orden=nombre`}
                 
                />
                </select>
                {errors.province && errors.province.type === "required" && (
                    <span role="alert">Seleccione una Provincia</span>
                    )}

          </div>

          <div className="col-md-6 mb-3">
            <label className="form-label">Departamento</label>
            {!provincia && (
               <select className="form-select " >
               <option value="">...</option>
              </select>
             )}
             
            {provincia && (
                <select  className="form-select"  aria-invalid={errors.departament ? "true" : "false"}{...register("departament",{ required: true})}>
                <SelectList
                      title="departamentos"
                      url={`https://apis.datos.gob.ar/georef/api/departamentos?orden=nombre&max=5000&provincia=${provincia}`}
                  
                 />
               </select>
             )} 
            {errors.departament && errors.departament.type === "required" && (
                    <span role="alert">Seleccione una departamento</span>
                    )}
          </div>

          <div className="col-md-6 col-sm-8 mb-3">    
            <label className="form-label">Localidad</label> 
            {!departamento && (
               <select className="form-select" >
               <option value="">...</option>
              </select>
             )}
            {departamento && (
                <select className="form-select" aria-invalid={errors.city ? "true" : "false"}{...register("city",{ required: true})}>
                   <SelectList
                       title="localidades"
                       url={`https://apis.datos.gob.ar/georef/api/localidades?orden=nombre&max=5000&departamento=${departamento}`}  
                   />
                </select>
             )} 
            {errors.city && errors.city.type === "required" && (
                <span role="alert">Seleccione una localidad</span>
              )}
          </div>

          <div className="col-md-6 mb-3"> 
              <label className="form-label col-4 text-center ">Foto de perfil</label>
              <input type="file"  className="form-control"{...register("foto",{ required: false})} />
          </div>

          {/* <div className="form-check col-md-2"> */}
          <div className="col-md-6 mb-3 d-flex justify-content-center align-content-center">
              <input
                type="checkbox"
                className="form-check-input"
                {...register("shelter", {
                    // validate: atLeastOne
                })}
                    />
              <label className="form-check-label ps-2" htmlFor="flexCheckDefault">
                    Refugio
              </label>
          </div>

          <div className="col-md-6 mb-3">
            <label className="form-label">CBU</label> 
            <input className="form-control"{...register("cbu",{ required:{value: false} , maxLength: 20 })} />             
          </div>

          <div className="position-relative col-md-6 d-flex justify-content-center">
             <button 
                type="submit"
               className="btn btn-primary mt-5 "
             >
               Registrar
             </button>
          </div>
        </div>
      </form>
    </div>

    <Footer />
   
    </>
  );
}
