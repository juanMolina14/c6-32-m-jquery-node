import React from 'react'
import './CardsMascotas.css'
import "bootswatch/dist/lux/bootstrap.min.css";

export default function CardsMascotas() {
    return (
        <div>
            <div class="top-cards">
                <div className="row row-cols-1 row-cols-md-3 g-4">
                    <div className="col">
                        <div className="card">
                            <img src="https://static3.ideal.es/www/multimedia/201909/06/media/cortadas/perro-impuesto-kl3B-U9069082473uHE-624x385@Ideal.jpg" className="card-img-top" height="300" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title text-center"><h4>Brenda</h4></h5>
                                <p className="card-text">Brenda fue encontrada por sus dueños el 04/01/2022 en Vicente Lopez.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card">
                            <img src="https://gestion.portalbiesa.com/redaccio/arxius/imatges/202207/770_1658237010blog_post_suenan_perros_1.jpg" className="card-img-top" height="300" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title text-center"><h4>Benja</h4></h5>
                                <p className="card-text">Benja descanzando nuevamente en su sillon preferido, fue encontrado por sus dueños el 06/08/2021 en Quilmes.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card">
                            <img src="https://www.bunko.pet/__export/1641684209924/sites/debate/img/2022/01/08/10_sexales_que_dicen_que_a_un_perro_no_le_gustan_los_abrazos.jpg_976912859.jpg" className="card-img-top" height="300" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title text-center"><h4>Pepe y su mascota Oscar</h4></h5>
                                <p className="card-text">Oscar fue encontrado el 24/05/2022 en Villa Urquiza tras estar perdido 15 dias.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card">
                            <img src="https://images.hola.com/imagenes/mascotas/20201218181375/dejar-solo-gato-en-casa/0-902-780/gato-solo-casa-t.jpg" className="card-img-top" height="300" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title text-center"><h4>Leon</h4></h5>
                                <p className="card-text">Leon fue encontrado por una vecina a dos manzanas de su hogar, volvio con su familia el 08/04/2022.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card">
                            <img src="https://cloudfront-us-east-1.images.arcpublishing.com/radiomitre/RY5JT4MCP5BUXAH6IMEWX64RA4.jpg" className="card-img-top" height="300" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title text-center"><h4>Barto</h4></h5>
                                <p className="card-text">Barto Volvio con su familia el 28/01/2021, tras 29 dias cuidado por otra familia.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card">
                            <img src="https://cdn.milenio.com/uploads/media/2020/12/16/graban-reaccion-gatitos-entrar-casa_0_0_1200_747.jpg" className="card-img-top" height="300" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title text-center"><h4>Peluza</h4></h5>
                                <p className="card-text">Nuevamente Vigilando su Hogar, volvio con su familia el 06/09/2021.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <figure className="text-center">
                <h1>¿Encontraste o Perdiste?</h1>
                <blockquote className="blockquote">
                    <p className="mb-0">Publica una nueva busqueda en nuestro Portal</p>
                </blockquote>
                <br></br>
                <button type="button" class="btn btn-danger">Danger</button>
            </figure>
            <br></br>
            <br></br>
            <br></br>
            <br></br>

        </div>
    )
}
