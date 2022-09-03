import React from 'react'
import { useState, useEffect } from "react";
import ListaAdoptados from './ListaAdoptados';

const FetchMascotas = () => {

    const [reqDataadoptados, setReqDataAdoptados] = useState([]);
  
    useEffect(() => {
      fetch("http://localhost:3000/pet/")
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          setReqDataAdoptados(
            data[0]
          );
        });
    }, []);
    

  
  return (

    <>
        <ListaAdoptados data={reqDataadoptados}/>
    </>
  )

}

export default FetchMascotas




