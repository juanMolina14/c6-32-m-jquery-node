import React , {useEffect, useState} from 'react'
import "bootswatch/dist/lux/bootstrap.min.css";
import ListaMascotas from './ListaMascotas';
import './FetchMascotasPerdidas.css'


const FetchMascotasPerdidas = () => {

  const [reqData, setReqData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3030/pet/")
      .then((res) => {
        return res.json()
      })
      .then((data) => {
        setReqData(data[0]);
      });
  }, []);



  return(
      <div>
        <ListaMascotas data={ reqData }/>
      </div>
  );

}

export default FetchMascotasPerdidas




