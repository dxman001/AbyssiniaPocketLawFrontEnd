const FetchData = async (searchkeyDynamic,searchTypeDynamic,pageIndex,setSearchResult,setSearchResultCount,setLoading,setIsSuccess,setMessage) =>
{
    //const url = `https://localhost:7290/api/Search?searchKey=${searchkeyDynamic}&searchType=${searchTypeDynamic}&pageIndex=${pageIndex}`;
    //const url = `http://likuworku-001-site1.atempurl.com/api/Search?searchKey=${searchkeyDynamic}&searchType=${searchTypeDynamic}&pageIndex=${pageIndex}`;
    const url = `AbyssiniaPocketLawSearch.php?searchKey=${searchkeyDynamic}&searchType=${searchTypeDynamic}&pageIndex=${pageIndex}`;
    if(searchkeyDynamic.length > 0 && searchkeyDynamic !== "")
    {
        setLoading(true);
        try 
        {
            const response = await fetch(url);
            const jsonResponse = await response.json();
            setLoading(false);
            setSearchResult(jsonResponse.data);
            setSearchResultCount(jsonResponse.count);
            setIsSuccess(jsonResponse.isSuccess);
            setMessage(jsonResponse.error);
        } 
        catch (error) 
        {
            setLoading(false);
            setSearchResult([]);
            setSearchResultCount(0);
            setIsSuccess(false);
            setMessage(error.message);
        }
    }
    else
    {
        setLoading(false);
        setSearchResult([]);
        setSearchResultCount(0);
        setIsSuccess(true);
        setMessage("");
    } 
    
}

export default FetchData;