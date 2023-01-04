import 'bootstrap/dist/css/bootstrap.css';
import '../css/Search.css';
import '../css/Header.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import SearchBarHeader from './SearchBarHeader';

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
        pageIndex} = props;
        
    return(
      <section className='section1__section1 layout'>
        <div className='section1__flex layout'>
            <div className='section1__flex1 layout'>           
                 <Container fluid='md'>
                    <Row>                                            
                        <SearchBarHeader 
                            searchkeyDynamic={searchkeyDynamic} 
                            setSearchKeyDynamic={setSearchKeyDynamic}
                            searchTypeDynamic={searchTypeDynamic} 
                            searchResult={searchResult}
                            setSearchResult={setSearchResult}
                            setSearchResultCount={setSearchResultCount}
                            pageIndex ={pageIndex}>
                        </SearchBarHeader>                                                        
                     </Row>
                </Container>              
            </div>
            <hr size="1" className="header_divider_line layout" />            
        </div>          
    </section>
    );
}