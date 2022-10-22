import Button from 'react-bootstrap/Button';
import '../css/button.css'
export default function LawItem({resultItem})
{
    const titleArray=resultItem.title.split('-');
    return(
        <div className="section2__flex layout1">
            <div className="section2__flex layout">
                <h3 className="section2__subtitle_box layout">
                    <div className="section2__subtitle">
                        <span className="section2__subtitle_span0">
                            {titleArray[0]}<br/>
                         </span>
                        <span className="section2__subtitle_span1">
                            {titleArray[1]}
                        </span>
                    </div>
                </h3>
                <h5 className="section2__highlights1_box layout">
                    <div className="section2__highlights1">
                        <span className="section2__highlights1_span0">Status : </span>
                        <span className="section2__highlights1_span1">
                            {resultItem.status}
                         </span>
                    </div>
                </h5>
                <h5 className="section2__highlights1_box layout1">
                    <div className="section2__highlights1">
                        <span className="section2__highlights1_span0">Entry into Force : </span>
                        <span className="section2__highlights1_span1"> 
                            {resultItem.entry}
                        </span>
                    </div>
                </h5>
                <h5 className="section2__highlights1_box layout1">
                    <div className="section2__highlights1">
                        <span className="section2__highlights1_span0">Category : </span>
                        <span className="section2__highlights1_span1"> 
                             {resultItem.category}
                        </span>
                    </div>
                </h5>
                <h5 className="section2__highlights1_box layout1">
                    <div className="section2__highlights1">
                        <span className="section2__highlights1_span0">Jurisdiction : </span>
                        <span className="section2__highlights1_span1"> 
                            {resultItem.jurisdiction}
                        </span>
                    </div>
                </h5>
                
                <div class="section2__flex1 layout">
                    <Button className='btn-custom'  variant="outline-primary" id="search">
                            Download
                         <div className='spacer-custom'>
                            <li className='fa fa-download'> </li>
                         </div>
                   </Button>
                    <div class="spacer section2__flex__spacer1"></div>
                    <Button className='btn-custom'  variant="outline-primary" id="search">
                            View
                         <div className='spacer-custom'>
                            <li className='fa fa-eye'> </li>
                         </div>
                   </Button>
                </div>
                <hr size="1" className="section2__line1 layout1" />
            </div>              
        </div>  
    );
}