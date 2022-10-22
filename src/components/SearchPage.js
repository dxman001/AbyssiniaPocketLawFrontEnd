import Header from "./Header";
import SearchResult from "./SearchResult";
import Footer  from "./Footer";
import { useLocation } from "react-router-dom";
import { useState } from "react";
export default function SearchPage()
{
 
   const [searchResult,setSearchResult] = useState([]);
   const [searchResultCount,setSearchResultCount] = useState(0);
   
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
            <Header 
                searchkeyDynamic={searchkeyDynamic} 
                setSearchKeyDynamic={setSearchKeyDynamic}
                searchTypeDynamic={searchTypeDynamic} 
                setSearchTypeDynamic={setSearchTypeDynamic} 
                searchResult={searchResult} 
                setSearchResult={setSearchResult}
                setSearchResultCount ={setSearchResultCount}>
            </Header>
            <SearchResult  
                searchResult={searchResult}
                searchkeyDynamic={searchkeyDynamic}
                searchTypeDynamic={searchTypeDynamic}
                searchResultCount={searchResultCount}>
            </SearchResult>
            <Footer/>
        </>
    )
}