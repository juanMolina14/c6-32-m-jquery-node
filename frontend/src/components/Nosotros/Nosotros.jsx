import React from 'react'
import './Nosotros.css'
import 'bootswatch/dist/lux/bootstrap.min.css'

export default function Nosotros() {
    return (
    <>
        <div className="contenedor ">
            <img src="https://cloudfront-us-east-1.images.arcpublishing.com/infobae/N2GFBVR5PFF75OS4JH3XT4GU7A.jpg" className="img-fluid" alt="..." />
            <div className='position-absolute top-50 start-50 translate-middle'>
                <div><h1  className="texto-banner">Encuentra a tu mejor amigo</h1></div>
                <div ><p className="subtexto-banner">Somos la plataforma N°1 para encontrar mascotas perdidas</p></div>
            </div>
        </div>
        
        <div className='row mt-5 justify-content-center'>
           <div className="col-8">
           <figure className="text-center">
            <h1>Quienes Somos</h1>
                <blockquote className="blockquote">
                    <p className="mb-0">Somos Pet Search la plataforma N°1 para publicación y busqueda de Mascotas perdidas</p>
                </blockquote>
                <figcaption className="blockquote-footer">
                    ¡Ayudamos a las Familias a encontrar a su Mascota extraviada!
                </figcaption>
            </figure>
           </div>
        </div>
        </>
    )
}
