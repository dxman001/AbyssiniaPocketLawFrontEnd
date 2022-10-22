import '../css/Search.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import SearchResultCount from './SearchResultCount';
import LawItem from './LawItem';
import CassationItem from './CassationItem';
import Pagination from './Pagination';
export default function SearchResult({searchResult,searchkeyDynamic,searchTypeDynamic,searchResultCount})
{
       return(
        <Container fluid>
            <Row>   
                <Col lg={false} md={12}>
                    <section className="section2__section2 layout">
                        <div className="section2__flex layout2">
                            <SearchResultCount  
                                searchkeyDynamic={searchkeyDynamic}
                                searchTypeDynamic={searchTypeDynamic}
                                searchResultCount={searchResultCount}>
                            </SearchResultCount>
                              {
                                searchResult.map((resultItem) => 
                                {
                                   return searchTypeDynamic === "Laws" ?
                                     (<LawItem key={resultItem.id} resultItem={resultItem} />) :                                   
                                     (<CassationItem key={resultItem.id} resultItem={resultItem} />)
                                })
                             }  
                             <Pagination/>                             
                        </div>
                    </section>
                </Col>
            </Row>
        </Container>  
    );
}