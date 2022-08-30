import React from 'react'
import { useState, useEffect } from "react";
import "bootswatch/dist/lux/bootstrap.min.css";
import ReactPaginate from 'react-paginate';


const FetchMascotasPerdidas = () => {

  const [reqData, setReqData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/pet/")
      .then((res) => {
        return res.json()
      })
      .then((data) => {
        setReqData(data[0]);
      });
  }, []);



  return (

    <>
      {reqData.map(e => {
        return (
          <div className="card mb-3" key={e.id} >
            <div className="row g-0">
              <div className="col-md-4">
                <img src="https://pxb.cdn.ciudadano.news/ciudadano/042022/1650219985868/86084-jpg..webp?cw=648&ch=364&extw=jpg" className="img-fluid rounded-start" alt="..." />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">{e.name}</h5>
                  <p className="card-text">{e.description}</p>
                  <button type="button" className="btn btn-outline-dark ">Detalle</button>
                </div>
              </div>
            </div>
          </div>
        )
      })}
    </>
  )

}

export default FetchMascotasPerdidas




