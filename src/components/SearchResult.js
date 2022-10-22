import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import SearchResultCount from './SearchResultCount';
import SearchResultItem from './SearchResultItem';
import '../css/Search.css';
export default function SearchResult({searchResult,searchkeyDynamic,searchTypeDynamic})
{
       return(
        <Container fluid>
            <Row>   
                <Col lg={false} md={12}>
                    <section className="section2__section2 layout">
                        <div className="section2__flex layout2">
                            <SearchResultCount  
                                searchkeyDynamic={searchkeyDynamic}
                                searchTypeDynamic={searchTypeDynamic}>
                            </SearchResultCount>
                              {
                                searchResult.map((resultItem) => 
                                {
                                    return(<SearchResultItem key={resultItem.id} resultItem={resultItem} />  ); 
                                })
                             }                               
                        </div>
                    </section>
                </Col>
            </Row>
        </Container>  
    );
}