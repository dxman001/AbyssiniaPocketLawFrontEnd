const FetchData = async (searchkeyDynamic,searchTypeDynamic,pageIndex,setSearchResult,setSearchResultCount,setLoading,setIsSuccess,setMessage,setIsNoResult) =>
{
    //const url = `https://localhost:7290/api/Search?searchKey=${searchkeyDynamic}&searchType=${searchTypeDynamic}&pageIndex=${pageIndex}`;
    //const url = `http://likuworku-001-site1.atempurl.com/api/Search?searchKey=${searchkeyDynamic}&searchType=${searchTypeDynamic}&pageIndex=${pageIndex}`;
    const url = `AbyssiniaPocketLawSearch.php?searchKey=${searchkeyDynamic}&searchType=${searchTypeDynamic}&pageIndex=${pageIndex}`;
    setIsNoResult(false);
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
            if(jsonResponse.count<=0)
            {
                setIsNoResult(true);
            }
        } 
        catch (error) 
        {
            setLoading(false);
            setSearchResult([]);
            setSearchResultCount(0);
            setIsSuccess(false);
            setMessage(error.message);
            setIsNoResult(false);
        }
    }
    else
    {
        setLoading(false);
        setSearchResult([]);
        setSearchResultCount(0);
        setIsSuccess(true);
        setMessage("");
        setIsNoResult(false);
    } 
    
}

export default FetchData;