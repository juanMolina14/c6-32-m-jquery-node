import React from 'react';
import './Footer.css';
import "bootswatch/dist/lux/bootstrap.min.css";
// import Face from '../img/facebook.png';
// import Inst from '../img/instagram.png';
// import Twitter from '../img/twitter.png';
// import Linkedin from '../img/linkedin.png';
import logo from '../img/logobyn.png';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Instagram, Facebook, Twitter, Linkedin } from 'react-bootstrap-icons';
import { NavLink } from 'react-router-dom';
// import { Twitter } from 'react-bootstrap-icons';
// import { Facebook } from 'react-bootstrap-icons';
// import { Linkedin } from 'react-bootstrap-icons';


export default function Footer() {
    return (
        <div>
            <footer className="bg-dark d-flex align-items-center">
                <div className="container-fluid mt-4">
                    <div className="row">
                        {/* Redes sociales */}
                        <div className="col-md-4 d-flex justify-content-center">
                            <div className='d-flex justify-content-between contLogos'>
                                <a href="https://facebook.com">
                                    {/* <img src={Face} alt="Logo Facebook" className='logos' /> */}
                                    <Facebook color='white' size={48} />

                                </a>
                                <a href="https://instagram.com">
                                    {/* <img src={Inst} alt="Logo instagram" className='logos' /> */}
                                    <Instagram color='white' size={48} />
                                </a>
                                <a href="https://twitter.com">
                                    {/* <img src={Twitter} alt="Logo Twitter" className='logos' /> */}
                                    <Twitter color='white' size={48} />                                    
                                </a>
                                <a href="https://linkedin.com">
                                    {/* <img src={Linkedin} alt="Logo Linkedin" className='logos' /> */}
                                    <Linkedin color='white' size={48} />
</a>
                            </div>
                        </div>

                        {/* Links de secciones */}
                        <div className="col-md-4 d-flex justify-content-center py-3">
                            <ul className="navbar-nav">
                                <li className="nav-item liItem">
                                    <NavLink to="/home" className="nav-link linkFooter">HOME
                                    </NavLink>
                                </li>
                                <li className="nav-item liItem">
                                    <NavLink className="nav-link linkFooter" to="/search">SEARCH</NavLink>
                                </li>
                                <li className="nav-item liItem">
                                    <NavLink to="/adopt" className="nav-link linkFooter">ADOPT</NavLink>
                                </li>
                                <li className="nav-item liItem">
                                    <NavLink to="/login" className="nav-link linkFooter">LOGIN</NavLink>
                                </li>
                            </ul>
                        </div>

                        <div className="col-md-4 d-flex flex-column align-items-center justify-content-between">
                            {/* Logo de footer */}
                            <a href="/home">
                                <img src={logo} alt="Logo empresa" width="150px" />
                            </a>
                            <p className="texto my-3">¡Ayudamos a las Familias a encontrar a su Mascota extraviada!</p>

                            {/* Boton de contacto */}
                            <button type="button" className="btn btn-outline-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" id="btnModal">
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
