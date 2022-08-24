import React from 'react'
import Navbar from '../navbar/Navbar'
import "bootswatch/dist/lux/bootstrap.min.css";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro'
import './adopt.css'

const Adopt = () => {
  return (
    <>
        <Navbar />
        <div className="container">
           
            <div className='position-relative'>
                <img src="https://superpet.pe/blog/wp-content/uploads/2017/05/PERRITOpaginas-1.jpg" className="img-fluid" alt="..." />
                <div className="position-absolute top-0 start-50 translate-middle-x ">
    
                    <h1 className=' text-bg-dark p-3 mt-5'>Adopta un amigo</h1>
                </div>
                <a href="#adopciones" class="saltarina"> <FontAwesomeIcon icon={solid('chevron-down')} />  </a>  
            </div> 
  

                 
            <div className='row justify-content-center position-relative'>
                <div className="col-8 text-center position-absolute top-50 start-50 translate-middle">
                    <h3><i>Luego de estar algún tiempo en busqueda de su dueño, la mascota pasa a estar disponible para adopción.
                         Lo cual le brinda una nueva oportunidad para integrarse a una familia</i></h3>
                </div>
                
            </div>

            <div className="row justify-content-center mt-5" >
                <div className="col-8 mt-5">
                <Carousel className='mt-5'>
                    <div>
                        <img src="https://i0.wp.com/revista.weepec.com/wp-content/uploads/2019/09/romantic-couple-in-love-walking-dogs-and-bonding-L3G8Y29.jpg?fit=1200%2C633&ssl=1" alt="imagen"/>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique, nisi alias molestiae ipsam assumenda officiis.</p>
                       
                    </div>
                    <div>
                        <img src="https://okdiario.com/img/2020/01/26/5-diferencias-entre-pasear-a-un-perro-o-a-un-gato-1.jpg" alt="imagen"/>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique, nisi alias molestiae ipsam assumenda officiis.</p>
                       
                    </div>
                    <div>
                        <img src="https://www.purina-latam.com/sites/g/files/auxxlc391/files/dueno-responsable-ecologia-ambiental-de-las-mascotas-Purina-recogiendo-residuos-de-perro.jpg" alt="imagen" />
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique, nisi alias molestiae ipsam assumenda officiis.</p>
                       
                    </div>
                </Carousel>
                </div>
           </div>

           <div className="row py-3" id='adopciones'>
            <div className="col-md-4 p-2">
            <div className="card">
                <img src="https://static3.ideal.es/www/multimedia/201909/06/media/cortadas/perro-impuesto-kl3B-U9069082473uHE-624x385@Ideal.jpg" className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                      <div className='d-flex d-flex justify-content-center'>
                        <a href="</home>" className="btn btn-success">Contactar</a>
                      </div>
                </div>
            </div>
            </div>
        
            <div className="col-md-4 p-2">
                <div className="card">
                    <img src="https://static3.ideal.es/www/multimedia/201909/06/media/cortadas/perro-impuesto-kl3B-U9069082473uHE-624x385@Ideal.jpg" className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <div className='d-flex d-flex justify-content-center'>
                        <a href="</home>" className="btn btn-success">Contactar</a>
                      </div>
                    </div>
                </div>
            </div>

            <div className="col-md-4 p-2">
            <div className="card">
                <img src="https://static3.ideal.es/www/multimedia/201909/06/media/cortadas/perro-impuesto-kl3B-U9069082473uHE-624x385@Ideal.jpg" className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <div className='d-flex d-flex justify-content-center'>
                        <a href="</home>" className="btn btn-success">Contactar</a>
                      </div>
                </div>
            </div>
            </div>
            <div className="col-md-4 p-2">
            <div className="card">
                <img src="https://static3.ideal.es/www/multimedia/201909/06/media/cortadas/perro-impuesto-kl3B-U9069082473uHE-624x385@Ideal.jpg" className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <div className='d-flex d-flex justify-content-center'>
                        <a href="</home>" className="btn btn-success">Contactar</a>
                      </div>
                </div>
            </div>
            </div>
            <div className="col-md-4 p-2">
            <div className="card">
                <img src="https://static3.ideal.es/www/multimedia/201909/06/media/cortadas/perro-impuesto-kl3B-U9069082473uHE-624x385@Ideal.jpg" className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <div className='d-flex d-flex justify-content-center'>
                        <a href="</home>" className="btn btn-success">Contactar</a>
                      </div>
                </div>
            </div>
            </div>
  
           
       
       
       </div>

  
        </div>
    </>
  )
}

export default Adopt
