import {useEffect} from 'react';
export default function GoogleAd()
{
    useEffect(() => {

        try {
            (window.adsbygoogle = window.adsbygoogle || []).push({});
        }

        catch (e) {

        }

    },[]);

    return(  
        <ins className="adsbygoogle"
			 style={{ display: "block" }}
			 data-full-width-responsive="true"
			 data-ad-client="ca-pub-0149650712499036"
			 data-ad-slot="7029286439"
			 data-ad-format="auto">
        </ins>    
    )

}