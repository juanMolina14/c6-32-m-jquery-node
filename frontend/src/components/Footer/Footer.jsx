import React from 'react';
import './Footer.css';
import "bootswatch/dist/lux/bootstrap.min.css";
import Face from '../img/facebook.png';
import Inst from '../img/instagram.png';
import Twitter from '../img/twitter.png';
import Linkedin from '../img/linkedin.png';
import logo from '../img/logobyn.png';


export default function Footer() {
    return (
        <div>
            <footer className="bg-dark d-flex align-items-center">
                <div className="container-fluid">
                    <div className="row">
                        {/* Redes sociales */}
                        <div className="col-md-4 d-flex justify-content-center">
                            <div className='d-flex justify-content-between contLogos'>
                                <a href="https://facebook.com">
                                    <img src={Face} alt="Logo Facebook" className='logos' />
                                </a>
                                <a href="https://instagram.com">
                                    <img src={Inst} alt="Logo instagram" className='logos' />
                                </a>
                                <a href="https://twitter.com">
                                    <img src={Twitter} alt="Logo Twitter" className='logos' />
                                </a>
                                <a href="https://linkedin.com">
                                    <img src={Linkedin} alt="Logo Linkedin" className='logos' />
                                </a>
                            </div>
                        </div>

                        {/* Links de secciones */}
                        <div className="col-md-4 d-flex justify-content-center">
                            <ul className="navbar-nav d-flex justify-content-center">
                                <li className="nav-item">
                                    <a href="/home" className="nav-link linkFooter">HOME
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link linkFooter" href="/search">SEARCH</a>
                                </li>
                                <li className="nav-item">
                                    <a href="/report" className="nav-link linkFooter" >REPORT</a>
                                </li>
                                <li className="nav-item">
                                    <a href="/adopt" className="nav-link linkFooter">ADOPT</a>
                                </li>
                                <li className="nav-item">
                                    <a href="/login" className="nav-link linkFooter">LOGIN</a>
                                </li>
                            </ul>
                        </div>

                        <div className="col-md-4 d-flex flex-column align-items-center justify-content-between">
                            {/* Logo de footer */}
                            <a href="/home">
                                <img src={logo} alt="Logo empresa" width="150px" />
                            </a>
                            <p className="texto">¡Ayudamos a las Familias a encontrar a su Mascota extraviada!</p>

                            {/* Boton de contacto */}
                            <button type="button" className="btn btn-outline-secondary" data-bs-toggle="modal" data-bs-target="#exampleModal" id="btnModal">
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
                                            <button type="button" className="btn btn-outline-success">Send</button>
                                            <button type="button" className="btn btn-outline-danger" data-bs-dismiss="modal">Close</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <p className='align-self-bottom reg texto'>@2022. Pet-Search marca registrada. Todos los derechos reservados</p>
                </div>
            </footer>
        </div>
    )
}
