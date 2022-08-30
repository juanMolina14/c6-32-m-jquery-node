import React from 'react'
import "./Reportar.css"
import "bootswatch/dist/lux/bootstrap.min.css";

const Reportar = () => {
    return (
        <div className="margin">
            <figure className="text-center">
                <h1>¿Encontraste o Perdiste?</h1>
                <blockquote className="blockquote">
                    <p className="mb-0">Publica una nueva busqueda en nuestro Portal</p>
                </blockquote>
                <br></br>
                {/*<button type="button" className="btn btn-danger"><NavLink className="btn-Reportar" to="/Report">Reportar</NavLink></button>*/}
                <button type="button" className="btn btn-outline-dark">Publicar</button>
            </figure>
        </div>
    );
}

export default Reportar;
