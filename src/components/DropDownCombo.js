import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
export default function DropDownCombo({searchType,setsearchType,classType,setSearchKeyDynamic,setSearchResult,setSearchResultCount,setPageIndex,setLoading,setIsSuccess,setMessage,setIsNoResult})
{
    const handleSelect = (e) => 
    {      
        if(e !== searchType)
        {
            setsearchType(e);
            setSearchKeyDynamic("");
            setLoading(false);
            setIsSuccess(true);
            setMessage("");
            setIsNoResult(false);
            if(classType === "dropdown_header" )
            {
                setSearchResult([]);
                setSearchResultCount(0);
                setPageIndex(0);
            }
        }            
    }
    
    return(
        <DropdownButton 
            variant="primary" 
            onSelect={handleSelect} 
            className={classType} 
            title={`Currently Searching ${searchType}`}>
                <Dropdown.Item  eventKey="Laws">Search Laws</Dropdown.Item>
                <Dropdown.Item  eventKey="Cassations">Search Cassations</Dropdown.Item>
        </DropdownButton>
    );
}