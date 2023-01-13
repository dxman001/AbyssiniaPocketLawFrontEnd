import PropagateLoader from "react-spinners/PropagateLoader";
import '../css/utils.css';
export default function LoadingSpinner({loading})
{
    return(
      <div className="loading_spinner">
            <PropagateLoader color={'#901e2257'} loading={loading} size={15}/>  
      </div>      
    );
}