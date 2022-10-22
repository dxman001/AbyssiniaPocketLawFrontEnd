import '../css/HomePage.css';
import SearchBarHome from './SearchBarHome';
import SearchSelectorHome from './SearchSelectorHome';
import { useState} from "react";
import Footer from './Footer';

function HomePage()
{
    const [searchKey,setsearchKey] = useState("");
    const [searchType,setsearchType] = useState("Laws");
    return(
    <div className="block layout">
        <div className="flex layout1">
            <img src={require("../assets/abyssinia_law_logo.png")} alt="" className="image1 layout" />
            <h3 className="subtitle layout">Making Law Accessible</h3>
            <SearchBarHome 
                searchKey={searchKey} 
                setsearchKey={setsearchKey}
                searchType={searchType}>
            </SearchBarHome>
            <SearchSelectorHome 
                searchType={searchType}
                setsearchType={setsearchType}
                setsearchKey={setsearchKey}>
            </SearchSelectorHome>  
            <Footer/>     
        </div>
    </div>  
    );
}

export default HomePage;