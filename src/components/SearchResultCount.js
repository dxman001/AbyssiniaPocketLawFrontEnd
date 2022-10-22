export default function SearchResultCount({searchkeyDynamic,searchTypeDynamic})
{
    const styles = {
        fontStyle: 'italic',
        textDecoration : 'underline',
        fontWeight:'lighter', 
        color:'black'
      }
    return( 
    <div className="section2__flex layout">
        <div className="section2__text_body1 layout">
            <span>Results for </span> 
            <span style={styles}> 
                {searchkeyDynamic}                
             </span> 
             <span>   in {searchTypeDynamic} : 0</span>
        </div>
        <hr size="1" className="section2__line1 layout" />
    </div>
    );
}