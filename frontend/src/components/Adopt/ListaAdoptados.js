import React, { useEffect, useState } from 'react'
import ReactPaginate from "react-paginate";
import "bootswatch/dist/lux/bootstrap.min.css";
import "./ListaAdoptados.css";


export default function ListaAdoptados(props) {
    const { data } = props;
    const [currentItems, setCurrentItems] = useState([]);
    const [pageCount, setPageCount] = useState(0);
    const [itemOffset, setItemOffset] = useState(0);
    const itemsPerPage = 9;

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