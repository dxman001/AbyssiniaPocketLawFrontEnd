import '../css/Search.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import SearchResultCount from './SearchResultCount';
import LawItem from './LawItem';
import CassationItem from './CassationItem';
import Pagination from './Pagination';
import ErrorMessage from './ErrorMessage';
import BackToTopButton from "./BackToTopButton";
import GoogleAd from './GoogleAd';
import NoResultFound from './NoResultFound';
export default function SearchResult({searchResult,searchkeyDynamic,searchTypeDynamic,searchResultCount,pageIndex,setPageIndex,setSearchResult,setSearchResultCount,setLoading,setIsSuccess,setMessage,isSuccess,message,isNoResult,setIsNoResult})
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
                              isSuccess && !isNoResult? 
                               searchResult.map((resultItem,index) => 
                                {
                                   return searchTypeDynamic === "Laws" ?
                                     (
                                     <>
                                     <LawItem key={resultItem.id} resultItem={resultItem} />
                                     {(index)%6===0  ? <GoogleAd/> : <></>}
                                     </>
                                     ) :                                   
                                     (
                                     <>
                                     <CassationItem key={resultItem.id} resultItem={resultItem} />
                                     {(index)%6===0  ? <GoogleAd/> : <></>}
                                     </>
                                     )
                                })                                                  
                                :isNoResult 
                                ? <NoResultFound searchkeyDynamic={searchkeyDynamic}/> 
                                : <ErrorMessage message={message}/>                                         
                              }  
                            
                           <Pagination 
                            searchResultCount={searchResultCount}
                            pageIndex ={pageIndex}
                            setPageIndex ={setPageIndex}
                            searchkeyDynamic={searchkeyDynamic}
                            searchTypeDynamic={searchTypeDynamic}
                            setSearchResult={setSearchResult}
                            setSearchResultCount ={setSearchResultCount}
                            setLoading={setLoading}
                            setIsSuccess={setIsSuccess}
                            setMessage={setMessage}
                            setIsNoResult={setIsNoResult}>
                            </Pagination>  
                            <BackToTopButton/>                 
                        </div>
                    </section>
                </Col>
            </Row>
        </Container>  
        
    );
}