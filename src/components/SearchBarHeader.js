import '../css/form-control.css';
import Col from 'react-bootstrap/Col';
import { useEffect } from "react";

export default function SearchBarHeader({searchkeyDynamic,setSearchKeyDynamic,searchTypeDynamic,setSearchResult})
{
    useEffect(() => 
    {      
        const url = `https://localhost:7290/api/Search?searchKey=${searchkeyDynamic}&searchType=${searchTypeDynamic}`;            
        fetchData(url);
    }, []);

    const handelChange = (e) =>
    {
        setSearchKeyDynamic(e.target.value);
        if(e.target.value.length > 2)
        {   const url = `https://localhost:7290/api/Search?searchKey=${e.target.value}&searchType=${searchTypeDynamic}`;   
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
                const json = await response.json();
                setSearchResult(json);
            } 
            catch (error) 
            {
                console.log("error", error);
            }
        }
        else
        {
            setSearchResult([]);
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