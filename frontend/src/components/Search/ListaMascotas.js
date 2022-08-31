import React , {useEffect, useState} from 'react'
import ReactPaginate from "react-paginate";
import "bootswatch/dist/lux/bootstrap.min.css";
import "./ListaMascotas.css"

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
                                        <button type="button" className="btn btn-outline-dark ">Detalle</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
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