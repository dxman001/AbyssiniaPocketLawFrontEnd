import Header from "./Header";
import HeaderMedium from "./HeaderMedium";
import HeaderSmall from "./HeaderSmall";
import SearchResult from "./SearchResult";
import Footer  from "./Footer";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import React, { Fragment } from 'react';
import Media from 'react-media';
export default function SearchPageMultiScreen()
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
                    pageIndex ={pageIndex}>
                </HeaderSmall>
                }
                {matches.medium &&  
                <HeaderMedium 
                    searchkeyDynamic={searchkeyDynamic} 
                    setSearchKeyDynamic={setSearchKeyDynamic}
                    searchTypeDynamic={searchTypeDynamic} 
                    setSearchTypeDynamic={setSearchTypeDynamic} 
                    searchResult={searchResult} 
                    setSearchResult={setSearchResult}
                    setSearchResultCount ={setSearchResultCount}
                    pageIndex ={pageIndex}>
                </HeaderMedium>
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
                    pageIndex ={pageIndex}>
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
                setPageIndex ={setPageIndex}>
            </SearchResult>
            <Footer/>
        </>
    )
}