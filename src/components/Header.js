import 'bootstrap/dist/css/bootstrap.css';
import '../css/Search.css';
import '../css/Header.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import HeaderLogo from './HeaderLogo';
import SearchBarHeader from './SearchBarHeader';
import SearchSelectorHeader from './SearchSelectorHeader';
export default function Header(props)
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
        <div className="section2__flex layout2_main">
                 <Container fluid>
                    <Row>                      
                        <HeaderLogo/>
                        <SearchBarHeader 
                            searchkeyDynamic={searchkeyDynamic} 
                            setSearchKeyDynamic={setSearchKeyDynamic}
                            searchTypeDynamic={searchTypeDynamic} 
                            searchResult={searchResult}
                            setSearchResult={setSearchResult}
                            setSearchResultCount={setSearchResultCount}
                            pageIndex ={pageIndex}
                            setPageIndex ={setPageIndex}
                            setLoading={setLoading}
                            setIsSuccess={setIsSuccess}
                            setMessage={setMessage}
                            setIsNoResult={setIsNoResult}>
                        </SearchBarHeader> 
                                                       
                        <SearchSelectorHeader  
                            searchType={searchTypeDynamic}
                            setsearchType={setSearchTypeDynamic}
                            setSearchKeyDynamic={setSearchKeyDynamic}
                            setSearchResult={setSearchResult}
                            setSearchResultCount={setSearchResultCount}
                            setPageIndex ={setPageIndex}
                            setLoading={setLoading}
                            setIsSuccess={setIsSuccess}
                            setMessage={setMessage}
                            setIsNoResult={setIsNoResult}>
                        </SearchSelectorHeader>
                     </Row>
                </Container>              
            </div>
            <hr size="1" className="header_divider_line layout" />            
                
    </section>
    );
}