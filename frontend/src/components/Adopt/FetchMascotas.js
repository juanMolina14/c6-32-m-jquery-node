import React from 'react'
import { useState, useEffect } from "react";

const FetchMascotas = () => {

    const [reqData, setReqData] = useState([]);
  
    useEffect(() => {
      fetch("http://localhost:3000/pet/")
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          setReqData(
            data[0]
          );
        });
    }, []);
    

  
  return (

    <>
      {reqData.map(e => {
        return (
          <div className="col-md-4 p-2" key={e.id}>
            <div className="card">
                <img src="https://static3.ideal.es/www/multimedia/201909/06/media/cortadas/perro-impuesto-kl3B-U9069082473uHE-624x385@Ideal.jpg" className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{e.name}</h5>
                    <p className="card-text">{e.description}</p>
                    <div className='d-flex d-flex justify-content-center'>
                        <a href="</home>" className="btn btn-success">Contactar</a>
                    </div>
                </div>
            </div>
          </div>
          )
        })}
    </>
  )

}

export default FetchMascotas




