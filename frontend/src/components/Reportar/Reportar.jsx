import React from 'react'
import "./Reportar.css"
import "bootswatch/dist/lux/bootstrap.min.css";
import FormReport from '../Report/FormReport';

const Reportar = () => {
    return (
        <>
        <div className="margin">
            <figure className="text-center">
                <h1>¿Encontraste o Perdiste?</h1>
                <blockquote className="blockquote">
                    <p className="mb-0">Publica una nueva busqueda en nuestro Portal</p>
                </blockquote>
                <br></br>
                {/*<button type="button" className="btn btn-danger"><NavLink className="btn-Reportar" to="/Report">Reportar</NavLink></button>*/}
                <button type="button" className="btn btn-outline-dark" data-bs-toggle="modal" data-bs-target="#staticBackdrop">Publicar</button>
            </figure>
        </div>


         {/* ---Modal--- */}
        <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex={-1} aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div className="modal-dialog modal-xl">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="staticBackdropLabel">Reportá una mascota</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                    </div>

                    <div className="modal-body">
                        <FormReport />
                    </div>

                    {/* <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
                    </div> */}
                </div>
            </div>
        </div>


        </>
    );
}

export default Reportar;
