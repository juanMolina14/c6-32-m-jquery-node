import React from "react";
import { UseFetch } from '../hooks/UseFetch';
import Loader from "./Loader";
import Message from "./Message";





const SelectList = ({ title, url}) => {
  const { data, error, loading } = UseFetch(url);
  // console.log(data, error, loading);

  if (!data) return null;

  if (error) {
    return (
      <Message
        msg={`Error ${error.status}: ${error.statusText}`}
        bgColor="#dc3545"
      />
    );
  }
  let options=null;
  // let id = `select-${title}`;
  // let label = title.charAt(0).toUpperCase() + title.slice(1);
 
  options = data[title];

  console.log(options);

  return (
    <>
     {/* <label htmlFor={id}>{label}</label> */}
        {loading && <Loader />}
              
        {/* <select className="form-select" name={id} id={id} onChange={handleChange}> */}
          <option value="">Elige un {title}</option>
          {options &&
            options.map((el) => (
              <option key={el.id} value={el.nombre} >
                {el.nombre}
              </option>
            ))}
        {/* </select> */}
    </>
  );
};

export default SelectList;

