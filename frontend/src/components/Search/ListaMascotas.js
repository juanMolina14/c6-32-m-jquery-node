import React, { useEffect, useState } from 'react'
import ReactPaginate from "react-paginate";
import "bootswatch/dist/lux/bootstrap.min.css";
import "./ListaMascotas.css";


export default function ListaMascotas(props) {
    const { data } = props;
    const [currentItems, setCurrentItems] = useState([]);
    const [pageCount, setPageCount] = useState(0);
    const [itemOffset, setItemOffset] = useState(0);
    const itemsPerPage = 6;

    useEffect(() => {
        const endOffset = itemOffset + itemsPerPage;
        setCurrentItems(data.slice(itemOffset, endOffset));
        setPageCount(Math.ceil(data.length / itemsPerPage));
    }, [itemOffset, itemsPerPage, data]);

    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % data.length;
        setItemOffset(newOffset);
    };

    return (
        <>
            <div className="reqData">
                <div className="row py-3">
                {currentItems.map(e => {
                    return (
                        <div className="card mb-3 color-card" key={e.id} >
                            <div className="row g-0">
                                <div className="col-md-4">
                                    <img src="https://pxb.cdn.ciudadano.news/ciudadano/042022/1650219985868/86084-jpg..webp?cw=648&ch=364&extw=jpg" className="img-fluid rounded-start" alt="..." />
                                </div>
                                <div className="col-md-8 color-card">
                                    <div className="card-body">
                                        <h5 className="card-title">{e.name}</h5>
                                        <p className="card-text">{e.description}</p>
                                        <button type="button" className="btn btn-outline-dark "  data-bs-toggle="modal" data-bs-target="#exampleModal">Detalle</button>

                        <div className="cards-search col-md-4 p-2" key={e.id}>
                            <div className="card">
                                <img src="https://static3.ideal.es/www/multimedia/201909/06/media/cortadas/perro-impuesto-kl3B-U9069082473uHE-624x385@Ideal.jpg" className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">{e.name}</h5>
                                    <p className="card-text">{e.description}</p>
                                    <div className='d-flex d-flex justify-content-center'>
                                        <button type="button" class="btn btn-outline-dark">Detalle</button>
                                    </div>
                                </div>
                            </div>
                            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Detalles</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <h5 className="card-title">{e.name}</h5>
                    <p className="card-text">{e.description}</p>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                    <button type="button" class="btn btn-primary">Contactar</button>
                </div>
                </div>
            </div>
            </div>
                        </div>
                        
                    );
                })}
                </div>
            </div>
            <ReactPaginate
                breakLabel="..."
                nextLabel="  >> "
                onPageChange={handlePageClick}
                pageRangeDisplayed={3}
                pageCount={pageCount}
                previousLabel=" <<  "
                renderOnZeroPageCount={null}
                containerClassName="pagination"
                pageClassName="page-num"
                previousLinkClassName="page-num"
                nextLinkClassName="page-num"
                activeLinkClassName="active"
            />




        </>
    );

}