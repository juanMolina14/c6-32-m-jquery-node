import React from 'react';
import Footer from '../Footer/Footer';
import Navbar from '../navbar/Navbar';
import Reportar from '../Reportar/Reportar';
import FetchMascotasPerdidas from './FetchMascotasPerdidas';
import './Search.css'

const Search = () => {
    return (
        <div>
            <Navbar />
            <div className='margin-reportar'>
                <Reportar />
            </div>
            <div className='container_lista'>
                <div className='lista'>
                    <FetchMascotasPerdidas />
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Search;
