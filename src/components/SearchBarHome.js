import 'bootstrap/dist/css/bootstrap.css';
import '../css/SearchBarHome.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { useNavigate } from 'react-router-dom';
import '../css/form-control.css'
export default function SearchBarHome({searchKey,setsearchKey,searchType})
{
    const navigate = useNavigate();
    const handelChange = (e) => setsearchKey(e.target.value); 
    const submitSearch = () =>    
        searchKey === "" 
        ? alert("Empty string search is not allowed.") 
        : navigate('/Search', { state: { searchKey: searchKey, searchType: searchType } });
           
    return(
        <div className="blocksearch">
            <div className="blocksearch layout ">
                <InputGroup className="mb-3">
                    <Form.Control
                        className='blocksearchInput'
                        placeholder={`Search ${searchType} Here`}
                        aria-label="Search Here"
                        aria-describedby="basic-addon2"
                        value={searchKey}
                        type="text"
                        onChange={handelChange}
                    />
                    <Button 
                        className='blocksearchButton' 
                        variant="outline-primary" 
                        id="search"
                        onClick={submitSearch}>
                        <div className="blocksearchButtonText">
                            <li className='fa fa-search'> Search</li>
                        </div>
                    </Button>
                </InputGroup>
            </div>
       </div>
    );
}