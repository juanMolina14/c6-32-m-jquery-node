import React from 'react'
import Navbar from '../navbar/Navbar'
import "bootswatch/dist/lux/bootstrap.min.css";

import FormReport from './FormReport'

const Report = () => {
  return (
    <>
    <Navbar />
    <div className='container my-5'>
      <div className='row justify-content-center'>
        <div className='col-10'>
          <ul className="nav nav-tabs justify-content-center" role="tablist">
            <li className="nav-item" role="presentation">
              <a className="nav-link active" data-bs-toggle="tab" href="#perdida" aria-selected="true" role="tab">Mascota Perdida</a>
            </li>
            <li className="nav-item" role="presentation">
              <a className="nav-link" data-bs-toggle="tab" href="#encontrada" aria-selected="false" role="tab" tabIndex={-1}>Mascota Encontrada</a>
            </li>
          </ul>
          <div id="myTabContent" className="tab-content">
            <div className="tab-pane fade active show" id="perdida" role="tabpanel">
              <FormReport />
            </div>
            <div className="tab-pane fade" id="encontrada" role="tabpanel">
              <FormReport />
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Report
