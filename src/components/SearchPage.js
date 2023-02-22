import Header from "./Header";
import HeaderSmall from "./HeaderSmall";
import SearchResult from "./SearchResult";
import Footer  from "./Footer";
import React, { Fragment,useState,useEffect} from 'react';
import Media from 'react-media';
import FetchData from "../services/FetchData";
import { useLocation } from "react-router-dom";
import LoadingSpinner from "./LoadingSpinner";

export default function SearchPage()
{
 
   const [searchResult,setSearchResult] = useState([]);
   const [searchResultCount,setSearchResultCount] = useState(0);
   const [pageIndex,setPageIndex] = useState(0);
   const [loading,setLoading] = useState(false);
   const [isSuccess,setIsSuccess] = useState(true);
   const [message,setMessage] = useState("");
   const [isNoResult,setIsNoResult] = useState(false);
  
   var {searchKey, searchType } = {
        searchKey:"",
        searchType: "Laws"
    };

   const {state}  = useLocation();
   if(state != null)
    {
        searchKey = state.searchKey;
        searchType= state.searchType;
    }
    const [searchkeyDynamic,setSearchKeyDynamic] = useState(searchKey);
    const [searchTypeDynamic,setSearchTypeDynamic] = useState(searchType);

    useEffect(() => 
    {      
        FetchData(searchkeyDynamic,searchTypeDynamic,pageIndex,setSearchResult,setSearchResultCount,setLoading,setIsSuccess,setMessage,setIsNoResult);
    }, []);

   return(
        <>
        <Media queries={{
          small: "(max-width: 799px)",
          medium: "(min-width: 800px) and (max-width: 1199px)",
          large: "(min-width: 1200px)"
        }}>
          {matches => (
            <Fragment>
                {matches.small && 
                <HeaderSmall
                    searchkeyDynamic={searchkeyDynamic} 
                    setSearchKeyDynamic={setSearchKeyDynamic}
                    searchTypeDynamic={searchTypeDynamic} 
                    setSearchTypeDynamic={setSearchTypeDynamic} 
                    searchResult={searchResult} 
                    setSearchResult={setSearchResult}
                    setSearchResultCount ={setSearchResultCount}
                    pageIndex ={pageIndex}
                    setPageIndex ={setPageIndex}
                    setLoading={setLoading}
                    setIsSuccess={setIsSuccess}
                    setMessage={setMessage}
                    setIsNoResult={setIsNoResult}>
                </HeaderSmall>
                }
                {matches.medium &&  
                <HeaderSmall 
                    searchkeyDynamic={searchkeyDynamic} 
                    setSearchKeyDynamic={setSearchKeyDynamic}
                    searchTypeDynamic={searchTypeDynamic} 
                    setSearchTypeDynamic={setSearchTypeDynamic} 
                    searchResult={searchResult} 
                    setSearchResult={setSearchResult}
                    setSearchResultCount ={setSearchResultCount}
                    pageIndex ={pageIndex}
                    setPageIndex ={setPageIndex}
                    setLoading={setLoading}
                    setIsSuccess={setIsSuccess}
                    setMessage={setMessage}
                    setIsNoResult={setIsNoResult}>
                </HeaderSmall>
                }
                {matches.large &&  
                <Header 
                    searchkeyDynamic={searchkeyDynamic} 
                    setSearchKeyDynamic={setSearchKeyDynamic}
                    searchTypeDynamic={searchTypeDynamic} 
                    setSearchTypeDynamic={setSearchTypeDynamic} 
                    searchResult={searchResult} 
                    setSearchResult={setSearchResult}
                    setSearchResultCount ={setSearchResultCount}
                    pageIndex ={pageIndex}
                    setPageIndex ={setPageIndex}
                    setLoading={setLoading}
                    setIsSuccess={setIsSuccess}
                    setMessage={setMessage}
                    setIsNoResult={setIsNoResult}>
                </Header>}
            </Fragment>
          )}
        </Media>
        { 
        loading?
        <LoadingSpinner loading={loading}/>       
         : 
        <SearchResult  
            searchResult={searchResult}
            searchkeyDynamic={searchkeyDynamic}
            searchTypeDynamic={searchTypeDynamic}
            searchResultCount={searchResultCount}
            pageIndex ={pageIndex}
            setPageIndex ={setPageIndex}
            setSearchResult={setSearchResult}
            setSearchResultCount ={setSearchResultCount}
            setLoading={setLoading}
            setIsSuccess={setIsSuccess}
            setMessage={setMessage}
            isSuccess={isSuccess}
            message={message}
            isNoResult={isNoResult}
            setIsNoResult={setIsNoResult}
            >
        </SearchResult>         
        }
             
        <Footer/>
        </>
    )
}