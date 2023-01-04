import ReactPaginate from 'react-paginate';
import '../css/pagination.css'
export default function Pagination({searchResultCount,pageIndex,setPageIndex,searchkeyDynamic,searchTypeDynamic,setSearchResult,setSearchResultCount})
{
    const itemsPerPage = 20;
    const pageCount = Math.ceil(searchResultCount/itemsPerPage);
    
    const handlePageClick = (event) =>
    {
      setPageIndex(event.selected);
      const url = `https://localhost:7290/api/Search?searchKey=${searchkeyDynamic}&searchType=${searchTypeDynamic}&pageIndex=${event.selected}`;
      fetchData(url);
    }

    const fetchData = async (url) => 
    {
        if(searchkeyDynamic.length > 0 && searchkeyDynamic !== "")
        {
            try 
            {
                const response = await fetch(url);
                const jsonResponse = await response.json();
                setSearchResult(jsonResponse.data);
                setSearchResultCount(jsonResponse.count);
            } 
            catch (error) 
            {
                console.log("error", error);
            }
        }
        else
        {
            setSearchResult([]);
            setSearchResultCount(0);
        }
        
    };
  return(
    <>
        <ReactPaginate
            breakLabel="..."
            previousLabel="← Previous "
            nextLabel=" Next →"
            pageCount={pageCount}
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