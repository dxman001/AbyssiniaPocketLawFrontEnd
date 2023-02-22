import Col from 'react-bootstrap/Col';
import DropDownCombo from './DropDownCombo';
export default function SearchSelectorHeader({searchType,setsearchType,setSearchKeyDynamic,setSearchResult,setSearchResultCount,setPageIndex,setLoading,setIsSuccess,setMessage,setIsNoResult})
{
    return(
        <Col lg={true} md={4}>
            <div className='selection_wrapper'>
                <DropDownCombo  
                    searchType={searchType}
                    setsearchType={setsearchType} 
                    classType="dropdown_header"
                    setSearchKeyDynamic={setSearchKeyDynamic}
                    setSearchResult={setSearchResult}
                    setSearchResultCount={setSearchResultCount}
                    setPageIndex={setPageIndex}
                    setLoading={setLoading}
                    setIsSuccess={setIsSuccess}
                    setMessage={setMessage}
                    setIsNoResult={setIsNoResult}>
                </DropDownCombo>
                
           </div>                               
        </Col>
    );
}