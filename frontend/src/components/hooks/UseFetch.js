import { useState, useEffect } from "react";
// import axios from 'axios';


export const UseFetch = (url) =>{
    const[data,setData] = useState(null);
    const[error,setError] = useState(null);
    const[loading,setLoading] = useState(false);

    useEffect(()=>{
        const abortController = new AbortController();
        const signal = abortController.signal;

        const fetchData = async () =>{
            setLoading(true);
            try {
                const res = await fetch(url);
                if(!res.ok){
                    let err = new Error("Error en la peticion fetch");
                    err.status = res.status || "00";
                    err.statusText = res.statusText || "Ocurrio un error";
                    throw err;
                }

                const json = await res.json();

                if(!signal.aborted){
                    setData(json);
                    setError(null);
                }
            } catch (error) {
                if(!signal.aborted){
                    setData(null);
                    setError(error);
                }
            }finally{
                if(!signal.aborted){
                    setLoading(false);
                }
            }
        };

        fetchData();
    },[url])
    return {data,error,loading};
}


// // export default useAxios = (url) => {
// //   const urlProv = 'url'
// //   const [data, setData] = useState([])

// //   useEffect(() => {
// //     axios.get(urlProv).then((response) => {
// //       setData(response.data.provincias)
// //     })
// //   }, []);
// //   return {data};
// // }

//   //https://apis.datos.gob.ar/georef/api/provincias?orden=nombre