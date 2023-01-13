import '../css/form-control.css';
import '../css/Header-small.css';
import Col from 'react-bootstrap/Col';
import FetchData from '../services/FetchData';
import Dropdown from 'react-bootstrap/Dropdown';
export default function SearchBarHeaderSmall({searchkeyDynamic,setSearchKeyDynamic,searchTypeDynamic,setSearchTypeDynamic,setSearchResult,setSearchResultCount,pageIndex,setPageIndex,setLoading,setIsSuccess,setMessage})
{

    const handelChange = (e) =>
    {      
        setSearchResult([]);
        setSearchResultCount(0);
        setSearchKeyDynamic(e.target.value);  
        setPageIndex(0);  
        setLoading(false);
        setIsSuccess(true);
        setMessage("");
        if(e.target.value.length > 2)
        {   
            FetchData(e.target.value,searchTypeDynamic,0,setSearchResult,setSearchResultCount,setLoading,setIsSuccess,setMessage);
        }     
    }
    const handleSelect = (e) => 
    {
        console.log(e);
        if(e !== searchTypeDynamic)
        {
            setSearchTypeDynamic(e);
            setSearchKeyDynamic("");
            setSearchResult([]);
            setSearchResultCount(0);
            setPageIndex(0);  
            setLoading(false);   
            setIsSuccess(true);
            setMessage("");       
        }            
    }

    return(
         <Col lg={false} md={12} >                                   
            <div className="search_wrapper_small">  
                <div className="search_logo_small">
                    <img src={require("../assets/abyssinia_law_logo_icon.png")} width="100" height="100" alt="" className="logo layout" />
                </div>                  
                <input 
                    id="searchValue"
                            type="text" 
                            value={searchkeyDynamic} 
                            className="search_input_small form-control" 
                            placeholder={`Search ${searchTypeDynamic}`}
                    onChange={handelChange}/>                                   
                <Dropdown
                onSelect={handleSelect}>
                    <div className="search_icon_small">
                    <Dropdown.Toggle 
                        variant="light" 
                        className="bg-white border-0 p-0" 
                        id="dropdown-basic">
                         
                    </Dropdown.Toggle>
                    </div>
                    <Dropdown.Menu>
                        <Dropdown.Item  eventKey="Laws">Search Laws</Dropdown.Item>
                        <Dropdown.Item  eventKey="Cassations">Search Cassations</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>                
            </div>                                                                          
                                                                           
        </Col>
    );
}