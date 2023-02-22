import 'bootstrap/dist/css/bootstrap.css';
import '../css/Search.css';
import '../css/Header.css';
import '../css/Header-small.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import SearchBarHeaderSmall from './SearchBarHeaderSmall';

export default function HeaderSmall(props)
{
    const {
        searchkeyDynamic,
        setSearchKeyDynamic,
        searchTypeDynamic,
        setSearchTypeDynamic,
        searchResult,
        setSearchResult,
        setSearchResultCount,
        pageIndex,
        setPageIndex,
        setLoading,
        setIsSuccess,
        setMessage,
        setIsNoResult} = props;
        
    return(
        <section className="section2__section2 layout">
            <div className="section2__flex layout2_small">
                    
                 <Container fluid='md'>
                    <Row>                                            
                        <SearchBarHeaderSmall 
                            searchkeyDynamic={searchkeyDynamic} 
                            setSearchKeyDynamic={setSearchKeyDynamic}
                            searchTypeDynamic={searchTypeDynamic} 
                            setSearchTypeDynamic={setSearchTypeDynamic}
                            searchResult={searchResult}
                            setSearchResult={setSearchResult}
                            setSearchResultCount={setSearchResultCount}
                            pageIndex ={pageIndex}
                            setPageIndex ={setPageIndex}
                            setLoading={setLoading}
                            setIsSuccess={setIsSuccess}
                            setMessage={setMessage}
                            setIsNoResult={setIsNoResult}>
                        </SearchBarHeaderSmall>                                                        
                     </Row>
                </Container>              
            </div>
            <hr size="1" className="header_divider_line layout" />                              
    </section>
    );
}