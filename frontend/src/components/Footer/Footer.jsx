import React from 'react';
import './Footer.css';
import "bootswatch/dist/lux/bootstrap.min.css";
import Face from '../img/facebook.png';
import Inst from '../img/instagram.png';
import logo from '../img/logobyn.png';


export default function Footer() {
    return (
        <div>
            <footer className="bg-dark d-flex align-items-center">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-4 d-flex justify-content-center">
                            <div className='d-flex justify-content-between contLogos'>
                                <a href="https://facebook.com">
                                    <img src={Face} alt="Logo facebook" className='logos' />
                                </a>
                                <a href="https://instagram.com">
                                    <img src={Inst} alt="Logo instagram" className='logos' />
                                </a>
                            </div>
                        </div>
                       
                        {/* Boton de contacto */}
                        <div className="col-md-4 d-flex justify-content-center">
                            <button type="button" className="btn btn-secondary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                Contactanos
                            </button>

                            {/* Modal con form para contacto */}
                            <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div className="modal-dialog" role="document">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <h5 className="modal-title">Contacto</h5>
                                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close">
                                                <span aria-hidden="true" />
                                            </button>
                                        </div>
                                        <div className="modal-body">
                                            <form>
                                                <fieldset>
                                                    <div className="form-group row">
                                                        <label htmlFor="staticName" className="col-sm-2 col-form-label mt-3">Nombre</label>
                                                        <div className="col-sm-12">
                                                            <input type="text" className="form-control" id="inputName" aria-describedby="emailName" placeholder="Decinos tu nombre completo" style={{ backgroundImage: 'url("data:image/png', backgroundRepeat: 'no-repeat', backgroundAttachment: 'scroll', backgroundSize: '16px 18px', backgroundPosition: '98% 50%', cursor: 'auto' }} />
                                                        </div>
                                                    </div>
                                                    <div className="form-group row">
                                                        <label htmlFor="staticEmail" className="col-sm-2 col-form-label mt-3">Email</label>
                                                        <div className="col-sm-12">
                                                            <input type="email" className="form-control" id="inputMail" aria-describedby="emailHelp" placeholder="nombre@mail.com" style={{ backgroundImage: 'url("data:image/png', backgroundRepeat: 'no-repeat', backgroundAttachment: 'scroll', backgroundSize: '16px 18px', backgroundPosition: '98% 50%', cursor: 'auto' }} />
                                                        </div>
                                                    </div>
                                                    <div className="form-group">
                                                        <label htmlFor="exampleTextarea" className="form-label mt-4">Dejanos tu consulta y nos pondremos en contacto</label>
                                                        <textarea className="form-control" id="exampleTextarea" rows={4} defaultValue={""} />
                                                    </div>
                                                </fieldset>
                                            </form>

                                        </div>
                                        <div className="modal-footer">
                                            <button type="button" className="btn btn-success">Send</button>
                                            <button type="button" className="btn btn-primary" data-bs-dismiss="modal">Close</button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="col-md-4 d-flex justify-content-center">
                            <a href="/home">
                                <img src={logo} alt="Logo empresa" width="150px" />
                            </a>
                        </div>
                    </div>

                </div>
            </footer>
        </div>
    )
}
