import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
export default function DropDownCombo({searchType,setsearchType,classType})
{
    const handleSelect = (e) => setsearchType(e);
    
    return(
        <DropdownButton 
            variant="primary" 
            onSelect={handleSelect} 
            className={classType} 
            title={`Currently Searching ${searchType}`}>
                <Dropdown.Item eventKey="Laws">Search Laws</Dropdown.Item>
                <Dropdown.Item eventKey="Cassations">Search Cassations</Dropdown.Item>
        </DropdownButton>
    );
}