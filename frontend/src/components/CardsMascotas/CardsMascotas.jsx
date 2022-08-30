import React from 'react'
import './CardsMascotas.css'
import "bootswatch/dist/lux/bootstrap.min.css";


export default function CardsMascotas() {
    return (
        <div>
            <div className="top-cards">
                <div className="row py-3">
                    <div className="col-md-4 p-2">
                        <div className="card">
                            <img src="https://static3.ideal.es/www/multimedia/201909/06/media/cortadas/perro-impuesto-kl3B-U9069082473uHE-624x385@Ideal.jpg" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Brenda</h5>
                                <p className="card-text">Brenda fue encontrada por sus dueños el 04/01/2022 en Vicente Lopez.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 p-2">
                        <div className="card">
                        <img src="https://gestion.portalbiesa.com/redaccio/arxius/imatges/202207/770_1658237010blog_post_suenan_perros_1.jpg" className="card-img-top"  alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Benja</h5>
                                <p className="card-text">Benja fue encontrado por sus dueños el 06/08/2021 en Quilmes.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 p-2">
                        <div className="card">
                        <img src="https://www.bunko.pet/__export/1641684209924/sites/debate/img/2022/01/08/10_sexales_que_dicen_que_a_un_perro_no_le_gustan_los_abrazos.jpg_976912859.jpg" className="card-img-top"  alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Oscar</h5>
                                <p className="card-text">Oscar fue encontrado el 24/05/2022 en Villa Urquiza tras estar perdido 15 dias.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 p-2">
                        <div className="card">
                        <img src="https://images.hola.com/imagenes/mascotas/20201218181375/dejar-solo-gato-en-casa/0-902-780/gato-solo-casa-t.jpg" className="card-img-top"  alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Leon</h5>
                                <p className="card-text">Leon fue encontrado por una vecina, volvio con su familia el 08/04/2022.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 p-2">
                        <div className="card">
                        <img src="https://cloudfront-us-east-1.images.arcpublishing.com/radiomitre/RY5JT4MCP5BUXAH6IMEWX64RA4.jpg" className="card-img-top"  alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Barto</h5>
                                <p className="card-text">Barto Volvio con su familia el 28/01/2021, tras 29 dias cuidado por otra familia.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 p-2">
                        <div className="card">
                        <img src="https://soyunperro.com/wp-content/uploads/2020/07/perro-mirando-por-la-ventana.jpg" className="card-img-top"  alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Peluza</h5>
                                <p className="card-text">Nuevamente Vigilando su Hogar, volvio con su familia el 06/09/2021.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
