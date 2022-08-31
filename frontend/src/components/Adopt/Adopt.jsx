import React from 'react'
import Navbar from '../navbar/Navbar'
import "bootswatch/dist/lux/bootstrap.min.css";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro'
import './adopt.css'
import FetchMascotas from './FetchMascotas';
import Footer from '../Footer/Footer';

const Adopt = () => {
    return (
        <>
            <Navbar />
            <div className="Banner-adopt">
                <img src="https://www.fridapets.com.mx/blog/wp-content/uploads/2020/11/que-prefiere-la-gente-perros-o-gatos.jpg" className="img-fluid" alt="..." />
            </div>
            <div className="container mt-5 text-center">
                <div className="Adoptar-texto">
                    <div className='row mt-5 justify-content-center'>
                        <div className="col-8">
                            <figure className="text-center animate__animated animate__fadeInRight animate__slow">
                                <h2>Adopta a un amigo</h2>
                                <blockquote className="blockquote">
                                    <p className="mb-0">Conectando humanos con sus mascotas</p>
                                </blockquote>
                                <figcaption className="blockquote-footer">
                                    ¡Ayudamos a las Familias a encontrar a su nueva Mascota!
                                </figcaption>
                            </figure>
                        </div>
                    </div>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <a href="#adopciones" className="saltarina "> <FontAwesomeIcon icon={solid('chevron-down')} />  </a>
                </div>

                <div className="row py-3" id='adopciones'>
                    <FetchMascotas />
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Adopt
