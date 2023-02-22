import '../css/utils.css';

export default function NoResultFound({searchkeyDynamic})
{
    return(
        <>
    <div className="section2__flex layout1">
        <div className="section2__flex layout">
            <h3 className="section2__subtitle_box layout">
                <div className="section2__subtitle">
                    <span className="section2__subtitle_span0">
                        Sorry, there are no matching result for keyword: "
                        <span className='no_result_keyword'>{searchkeyDynamic}</span>"<br/>
                    </span>                      
                </div>
            </h3>
            <h5 className="section2__highlights1_box layout">
                <div className="section2__highlights1">
                    <span className="section2__highlights1_span1">
                        <p>1. Try more general words. For example: If you want to search 
                            "Income Tax Proclamation" then use general keyword like "Tax" or "Income"
                             without quotations.</p>
                        <p>2. If you are searching with Number of the law try with G.C. 
                            instead of Ethiopian Calander.
                            For Example: If you want to search for "1/1987" then use the G.C "1/1995".</p>
                        <p>3. Try different words with similar meaning.</p>
                        <p>4. Please check your spelling.</p>
                    </span>                   
                </div>
            </h5>
        </div>
    </div>
    <hr size="1" className="section2__line1 layout1" />
    </>
    );
    
}