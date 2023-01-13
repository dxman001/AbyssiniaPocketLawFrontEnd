import Alert from 'react-bootstrap/Alert';
import '../css/utils.css';
export default function ErrorMessage({message})
{
    return(
      <div className="center_screen">
         <Alert variant='danger'>
            ERROR : {message}
         </Alert>
      </div>      
    );
}