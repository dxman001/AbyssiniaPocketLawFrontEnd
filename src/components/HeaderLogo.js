import Col from 'react-bootstrap/Col';
import {Link} from 'react-router-dom';
export default function HeaderLogo()
{
    return(
        <Col lg={false} md={3}>
            <div className='logo'>
                <Link to='/home'>
                <img 
                    src={require("../assets/4085a8e1b7a64bfc9b29ecd9babf8eb5.png")} 
                    alt="Abyssinia law" 
                    className="logo layout" />
                </Link>
                
            </div>                                    
        </Col>
    );
}