const FetchData = async (searchkeyDynamic,searchTypeDynamic,pageIndex,setSearchResult,setSearchResultCount) =>
{
    const url = `https://localhost:7290/api/Search?searchKey=${searchkeyDynamic}&searchType=${searchTypeDynamic}&pageIndex=${pageIndex}`;
    if(searchkeyDynamic.length > 0 && searchkeyDynamic !== "")
    {
        try 
        {
            const response = await fetch(url);
            const jsonResponse = await response.json();
            setSearchResult(jsonResponse.data);
            setSearchResultCount(jsonResponse.count);
        } 
        catch (error) 
        {
            console.log("error", error);
        }
    }
    else
    {
        setSearchResult([]);
        setSearchResultCount(0);
    }
}

export default FetchData;