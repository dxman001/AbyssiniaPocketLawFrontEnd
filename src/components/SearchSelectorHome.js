import 'bootstrap/dist/css/bootstrap.css';
import '../css/SearchSelector.css';
import '../css/fonts.css';
import DropDownCombo from './DropDownCombo';
export default function SearchSelectorHome({searchType,setsearchType,setsearchKey})
{
    return(
        <div className="search-selector">
            <div className='search-selector layout'>
                <DropDownCombo 
                    searchType={searchType}
                    setsearchType={setsearchType} 
                    classType="dropdown_home"
                    setSearchKeyDynamic={setsearchKey}>
                </DropDownCombo>
            </div>        
        </div>       
    );
}