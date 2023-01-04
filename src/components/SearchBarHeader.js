import '../css/form-control.css';
import Col from 'react-bootstrap/Col';
import { useEffect } from "react";

export default function SearchBarHeader({searchkeyDynamic,setSearchKeyDynamic,searchTypeDynamic,setSearchResult,setSearchResultCount,pageIndex,setPageIndex})
{

    useEffect(() => 
    {      
        const url = `https://localhost:7290/api/Search?searchKey=${searchkeyDynamic}&searchType=${searchTypeDynamic}&pageIndex=${pageIndex}`;            
        fetchData(url);
    }, []);

    const handelChange = (e) =>
    {      
        setSearchResult([]);
        setSearchResultCount(0);
        setSearchKeyDynamic(e.target.value);  
        setPageIndex(0);   
        if(e.target.value.length > 2)
        {   const url = `https://localhost:7290/api/Search?searchKey=${e.target.value}&searchType=${searchTypeDynamic}&pageIndex=${0}`;   
            fetchData(url);
        }     
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
        <Col lg={false} md={5}>                                 
            <div className="search_wrapper">                    
                <input 
                    id="searchValue"
                    type="text" 
                    value={searchkeyDynamic} 
                    className="search_input form-control" 
                    placeholder='Search Here' 
                    onChange={handelChange}/>                                   
                <div className="search_icon">
                    <li className='fa fa-search'></li>
                </div>
            </div>                                                             
        </Col>
    );
}