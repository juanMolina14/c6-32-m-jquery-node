import React from 'react'
import './Nosotros.css'

export default function Nosotros() {
    return (
        <div class="contenedor">
            <img src="https://cloudfront-us-east-1.images.arcpublishing.com/infobae/N2GFBVR5PFF75OS4JH3XT4GU7A.jpg" class="img-fluid" heigth="600" width="1550" alt="..." />
            <div class="texto-banner"><strong>Encuentra a tu mejor amigo</strong></div>
            <div class="subtexto-banner"><strong>Somos la plataforma N°1 para encontrar mascotas perdidas</strong></div>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
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
    )
}
