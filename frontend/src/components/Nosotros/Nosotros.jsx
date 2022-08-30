import React from 'react'
import './Nosotros.css'
import 'bootswatch/dist/lux/bootstrap.min.css'
import 'animate.css';

export default function Nosotros() {
    return (
        <>
            <div className="contenedor">
                <img src="https://cloudfront-us-east-1.images.arcpublishing.com/infobae/N2GFBVR5PFF75OS4JH3XT4GU7A.jpg" className="img-fluid" alt="..." />
                <h1 className="texto-banner animate__animated animate__fadeIn animate__slow">Encuentra a tu mejor amigo</h1>
                <p className="subtexto-banner animate__animated animate__fadeIn animate__slower">Somos la plataforma N°1 para encontrar mascotas</p>
            </div>

            <div className="quienes-somos">
                <div className='row mt-5 justify-content-center'>
                    <div className="col-8">
                        <figure className="text-center animate__animated animate__fadeInRight animate__slow">
                            <h2>Quienes Somos</h2>
                            <blockquote className="blockquote">
                                <p className="mb-0">Somos Pet Search la plataforma N°1 para Adoptar y buscar Mascotas perdidas</p>
                            </blockquote>
                            <figcaption className="blockquote-footer">
                                ¡Ayudamos a las Familias a encontrar a su Mascota!
                            </figcaption>
                        </figure>
                    </div>
                </div>
            </div>
        </>
    )
}
