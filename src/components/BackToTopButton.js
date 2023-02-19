import BackToTop from "react-back-to-top-button";
import '../css/back_to_top.css';
export default function BackToTopButton()
{
    return(
        <BackToTop
            showOnScrollUp={false}
            showAt={100}
            speed={2000}
            children ='UP'
            easing="easeInOutQuint">
        <span className="fa fa-arrow-up"></span>
     </BackToTop>
    );
}