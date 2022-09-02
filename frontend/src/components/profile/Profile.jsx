import * as React from 'react'
import Avatar from '@mui/material/Avatar'
import Stack from '@mui/material/Stack'
import Navbar from '../navbar/Navbar'

import 'bootswatch/dist/lux/bootstrap.min.css'
import './Profile.css'
import Footer from '../Footer/Footer'

export default function ImageAvatars() {
  return (
    <>
    <Navbar />
    <div className="container mt-5  p-3 bg-light">
        <Stack
          direction="row"
          className="col-md-6 align-items-center"
          spacing={10}
        >
          <Avatar
            alt="Remy Sharp"
            src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50"
            sx={{ width: 150, height: 150 }}
          />
          <div className="col-md-8">
            <h1>Nombre de usuario</h1>
          </div>
        </Stack>
    </div>

    <div className="container mt-5  p-3 bg-light">
        <div class="container text-center">
          <div class="row">
            <div class="col">
              <h3>telefono</h3>
            </div>
            <div class="col">
              <span>+5411234567</span>
            </div>
          </div>
          <div class="row">
            <div class="col">
              <h3>Mail</h3>
            </div>
            <div class="col">
              <span>+54112@gmail.com</span>
            </div>
          </div>
          <div class="row">
            <div class="col">
              <h3>Localidad</h3>
            </div>
            <div class="col">
              <span>Cosquín</span>
            </div>
          </div>
          <div class="row">
            <div class="col">
              <h3>Departamento</h3>
            </div>
            <div class="col">
              <span>Punilla</span>
            </div>
          </div>
          <div class="row">
            <div class="col">
              <h3>Provincia</h3>
            </div>
            <div class="col">
              <span>Cordoba</span>
            </div>
          </div>
        </div>
    </div>


    <div className="container mt-5  p-3 bg-light">
        <div className="text-center my-3">
            <h1>Publicaciones</h1>
        </div>

       <div className="row py-3">
            <div className="col-md-4 p-2">
            <div className="card">
                <img src="https://static3.ideal.es/www/multimedia/201909/06/media/cortadas/perro-impuesto-kl3B-U9069082473uHE-624x385@Ideal.jpg" className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                      <div className='d-flex d-flex justify-content-between'>
                        <a href="</home>" className="btn btn-warning">Modificar</a>
                        <a href="</home>" className="btn btn-danger">Eliminar</a>
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
                        <div className='d-flex d-flex justify-content-between'>
                          <a href="</home>" className="btn btn-warning">Modificar</a>
                          <a href="</home>" className="btn btn-danger">Eliminar</a>
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
                    <div className='d-flex d-flex justify-content-between'>
                      <a href="</home>" className="btn btn-warning">Modificar</a>
                      <a href="</home>" className="btn btn-danger">Eliminar</a>
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
                    <div className='d-flex d-flex justify-content-between'>
                      <a href="</home>" className="btn btn-warning">Modificar</a>
                      <a href="</home>" className="btn btn-danger">Eliminar</a>
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
                    <div className='d-flex d-flex justify-content-between'>
                      <a href="</home>" className="btn btn-warning">Modificar</a>
                      <a href="</home>" className="btn btn-danger">Eliminar</a>
                    </div>
                </div>
            </div>
            </div>
  
           
       
       
       </div>

 
 
    

        
    </div>
    <Footer />
    </>
  )
}
 

      
       