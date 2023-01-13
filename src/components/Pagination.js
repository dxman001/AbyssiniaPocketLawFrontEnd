import ReactPaginate from 'react-paginate';
import '../css/pagination.css'
import FetchData from '../services/FetchData';
import { useEffect } from 'react';
export default function Pagination({searchResultCount,pageIndex,setPageIndex,searchkeyDynamic,searchTypeDynamic,setSearchResult,setSearchResultCount,setLoading,setIsSuccess,setMessage})
{
    const itemsPerPage = 20;
    const pageCount = Math.ceil(searchResultCount/itemsPerPage);
 
    useEffect(() => 
     {      
        setPageIndex(pageIndex);
     }, []);

    const handlePageClick = (event) =>
    {       
      setIsSuccess(true);
      setMessage("");
      setPageIndex(event.selected);
      FetchData(searchkeyDynamic,searchTypeDynamic,event.selected,setSearchResult,setSearchResultCount,setLoading,setIsSuccess,setMessage);
      window.scrollTo(0, 0);
    }


  return(
    <>
        <ReactPaginate
            breakLabel="..."
            previousLabel="← Previous "
            nextLabel=" Next →"
            pageCount={pageCount}
            forcePage = {pageIndex}
            onPageChange = {handlePageClick}
            pageRangeDisplayed={5}
            containerClassName="pagination"
            pageLinkClassName="page-num"
            previousLinkClassName="page-num"
            nextLinkClassName="page-num"
            activeLinkClassName="active"
            renderOnZeroPageCount={null}

        />
  </>)
}