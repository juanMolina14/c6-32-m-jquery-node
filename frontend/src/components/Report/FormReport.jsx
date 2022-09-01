import SelectList from '../Register/SelectList';
import "bootswatch/dist/lux/bootstrap.min.css";
import { useForm } from "react-hook-form";
import React , {useEffect, useState} from 'react';

export default function FormReport() {
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
    };

    // const [reqData, setReqData] = useState([]);

    // useEffect(() => {
    //   fetch("http://localhost:3030/pet/genericData")
    //     .then((res) => {
    //         console.log(res);
    //       return res.json()
    //     })
    //     .then((data) => {
    //         console.log(data);
    //       setReqData(data[0]);
    //     });
    // }, []);

    const { register, handleSubmit, watch, formState: { errors } } = useForm({
        defaultValues:{
        //shelter: false,
    }
    });

    const onSubmit = data =>  {
        
        console.log(data)
            fetch("http://localhost:3030/pet", {
              method: "POST",
            //   credentials: 'include',
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                // id: undefined,
                category: data.category,
                breed: data.breed,
                color: data.color,
                size: data.size,
                name: data.name,
                description: data.description,
                street: data.street,
                number: data.number,
                province: data.province,
                department: data.department,
                city: data.city,
              }),
        })
        .then(
            (data)=>{
                
                alert(JSON.stringify(data))
            }
        );
    }
    // const categoria = watch("categoria", "");
    // const raza = watch("raza", "");
    // const color = watch("color", "");
    // const tamanio = watch("tamanio", "");
    // const nombre = watch("nombre", "");
    // const descripcion = watch("descripcion", "");
    // const calle = watch("calle", "");
    const province = watch("province", "");
    const department = watch("department", "");
    const category = watch("category", "");
    const breed = watch("breed", "");
  
  return (
    <>
    <div className="container">
         <form  className="row g-3 mb-5" onSubmit={handleSubmit(onSubmit)}>
            <div className="row my-5">
                
            <div className="col-md-4 mt-3">
                    <label className="form-label">Categoría</label>
                    <select className="form-select"  aria-invalid={errors.category ? "true" : "false"}{...register("category",{ required: true})}>
                        <SelectList
                            title="category"
                            url={`http://localhost:3030/api/category`}
                 
                        />
                    </select>
                    {errors.category && errors.category.type === "required" && (
                    <span role="alert">Seleccione una categoría</span>
                    )}
                </div>

                <div className="col-md-4 mt-3">
                    <label className="form-label">Raza</label>
                    {!category && (
                        <select className="form-select " >
                            <option value="">...</option>
                        </select>
                    )}
             
                    {category && (
                        <select  className="form-select"  aria-invalid={errors.breed ? "true" : "false"}{...register("breed",{ required: true})}>
                        <SelectList
                            title="breed"
                            url={`http://localhost:3030/api/breed`}
                        
                        />
                        </select>
                    )} 
                    {errors.breed && errors.breed.type === "required" && (
                        <span role="alert">Seleccione una raza</span>
                    )}
                </div>


                <div className="col-md-4">
                    <label className="form-label">Color</label>
                    <select className="form-select"  aria-invalid={errors.color ? "true" : "false"}{...register("color",{ required: true})}>
                      <option value="">Elige un</option>
                      {
                          mascotasAPI.color.map((el) => (
                          <option key={el.nombre} value={el.nombre}>
                              {el.nombre}
                          </option>
                          ))}
                    </select>
                </div>         
                <div className="col-md-4 mt-3">
                    <label className="form-label">Tamaño</label>
                    <select className="form-select"  aria-invalid={errors.size ? "true" : "false"}{...register("size",{ required: true})}>
                        <option value="">Elige</option>
                        {
                            mascotasAPI.tamaño.map((el) => (
                            <option key={el.nombre} value={el.nombre}>
                                {el.nombre}
                            </option>
                            ))}
                    </select>
                </div>
                <div className="col-md-4 mt-3">
                    <label className="form-label">Nombre</label>
                    <input type="text" className="form-control" aria-invalid={errors.name ? "true" : "false"}{...register("name",{ required: false, maxLength: 20 })}/>
                </div> 
                {/* <div className=" col-md-4 mt-3 "> 
                    <label htmlFor="formFile" className="form-label col-4 text-center ">foto</label>
                    <input type="file"  className="form-control"{...register("foto",{ required: false})} />
                </div> */}
                <div className="col-md-12 mt-3">
                    <label className="form-label">Descripcion</label>
                    <textarea className="form-control"  aria-invalid={errors.description ? "true" : "false"}{...register("description",{ required: false, maxLength: 20 })}/>
                </div>                       
                <div className="col-md-8 mt-3">
                    <label className="form-label">Calle</label>
                    <input type="text" className="form-control" aria-invalid={errors.street ? "true" : "false"}{...register("street",{ required: true, maxLength: 20 })}/>
                </div>
                <div className="col-md-4 mt-3">
                    <label className="form-label">Numero</label>
                    <input type="text" className="form-control" aria-invalid={errors.number ? "true" : "false"}{...register("number",{ required: true, maxLength: 20 })}/>
                </div>
            
                <div className="col-md-4 mt-3">
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
                <div className="col-md-4 mt-3">
                    <label className="form-label">Departamento</label>
                    {!province && (
                        <select className="form-select " >
                            <option value="">...</option>
                        </select>
                    )}
             
                    {province && (
                        <select  className="form-select"  aria-invalid={errors.department ? "true" : "false"}{...register("department",{ required: true})}>
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
                        <select className="form-select" aria-invalid={errors.city ? "true" : "false"}{...register("city",{ required: true})}>
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

