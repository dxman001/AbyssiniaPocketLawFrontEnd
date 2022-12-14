import Header from "./Header";
import HeaderMedium from "./HeaderMedium";
import HeaderSmall from "./HeaderSmall";
import SearchResult from "./SearchResult";
import Footer  from "./Footer";
import React, { Fragment,useState,useEffect } from 'react';
import Media from 'react-media';
import FetchData from "../services/FetchData";
import { useLocation } from "react-router-dom";

export default function SearchPage()
{
 
   const [searchResult,setSearchResult] = useState([]);
   const [searchResultCount,setSearchResultCount] = useState(0);
   const [pageIndex,setPageIndex] = useState(0);

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
        FetchData(searchkeyDynamic,searchTypeDynamic,pageIndex,setSearchResult,setSearchResultCount);
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
                    setPageIndex ={setPageIndex}>
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
                    setPageIndex ={setPageIndex}>
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
                    setPageIndex ={setPageIndex}>
                </Header>}
            </Fragment>
          )}
        </Media>
           
        <SearchResult  
            searchResult={searchResult}
            searchkeyDynamic={searchkeyDynamic}
            searchTypeDynamic={searchTypeDynamic}
            searchResultCount={searchResultCount}
            pageIndex ={pageIndex}
            setPageIndex ={setPageIndex}
            setSearchResult={setSearchResult}
            setSearchResultCount ={setSearchResultCount}
            >
        </SearchResult>
        
        <Footer/>
        </>
    )
}