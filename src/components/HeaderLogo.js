import Col from 'react-bootstrap/Col';
export default function HeaderLogo()
{
    return(
        <Col lg={false} md={3}>
            <div className='logo'>
                <img src={require("../assets/4085a8e1b7a64bfc9b29ecd9babf8eb5.png")} alt="" className="logo layout" />
            </div>                                    
        </Col>
    );
}