import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import ReactPaginate from 'react-paginate';
import '../css/pagination.css'
export default function Pagination()
{
    const [currentPage, setCurrentPage] = useState(0);
    const totalCount = 1600;
    const PER_PAGE = 20;
    const pageCount = Math.ceil(totalCount / PER_PAGE);

    function handlePageClick({ selected: selectedPage }) {
        setCurrentPage(selectedPage);
    }
  return(
    <>
        <ReactPaginate
            breakLabel="..."
            previousLabel={"← Previous"}
            nextLabel={"Next →"}
            pageCount={pageCount}
            onPageChange={handlePageClick}
            pageRangeDisplayed={5}
            containerClassName={"pagination"}
            previousLinkClassName={"paginationlink"}
            nextLinkClassName={"paginationlink active"}
            disabledClassName={"pagination__link--disabled"}
            activeClassName={"paginationlink active"}
        />
  </>)
}