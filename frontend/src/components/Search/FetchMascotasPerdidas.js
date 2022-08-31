import React , {useEffect, useState} from 'react'
import "bootswatch/dist/lux/bootstrap.min.css";
import ListaMascotas from './ListaMascotas';
import './FetchMascotasPerdidas.css'


const FetchMascotasPerdidas = () => {

  const [reqData, setReqData] = useState([]);

  useEffect(() => {
    fetch("http://192.168.0.199:3000/pet/")
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




