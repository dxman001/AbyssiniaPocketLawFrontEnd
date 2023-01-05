import '../css/form-control.css';
import Col from 'react-bootstrap/Col';
import FetchData from '../services/FetchData';

export default function SearchBarHeader({searchkeyDynamic,setSearchKeyDynamic,searchTypeDynamic,setSearchResult,setSearchResultCount,pageIndex,setPageIndex})
{

    const handelChange = (e) =>
    {      
        setSearchResult([]);
        setSearchResultCount(0);
        setSearchKeyDynamic(e.target.value);  
        setPageIndex(0);   
        if(e.target.value.length > 2)
        {   
            FetchData(e.target.value,searchTypeDynamic,0,setSearchResult,setSearchResultCount);
        }     
    }

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