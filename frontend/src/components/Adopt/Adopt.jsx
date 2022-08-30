import React from 'react'
import Navbar from '../navbar/Navbar'
import "bootswatch/dist/lux/bootstrap.min.css";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro'
import './adopt.css'
import FetchMascotas from './FetchMascotas';

const Adopt = () => {
  return (
    <>
        <Navbar />
        <div className="container mt-5 text-center">

           <div className="row">
           
              <div className="col-2"></div>
                <div className="col-8 m-0">
                    <h1 className=' text-bg-dark p-3'>Adopta un amigo</h1>       
                </div>
                <div className="col-2"></div>
            
                    
                 
        

           </div>

           <div className="row">
                <div className="col"> 
                    <img src="https://superpet.pe/blog/wp-content/uploads/2017/05/PERRITOpaginas-1.jpg" className="img-fluid" alt="..." />
                    <a href="#adopciones" className="saltarina "> <FontAwesomeIcon icon={solid('chevron-down')} />  </a>  
                </div>
                
           </div>
          
              
          
            
  

         
            <div className="row text-center">
                    <div className="col-2">
                        
                    </div>
                    <div className="col-8">
                    <h3><i>Luego de estar algún tiempo en busqueda de su dueño, la mascota pasa a estar disponible para adopción.
                         Lo cual le brinda una nueva oportunidad para integrarse a una familia</i></h3>
                    </div>
                    <div className="col-2">

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
                <FetchMascotas />
            </div>

  
        </div>
    </>
  )
}

export default Adopt
