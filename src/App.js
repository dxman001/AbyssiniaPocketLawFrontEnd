import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import AOS from 'aos';
import { isMobile } from 'react-device-detect';
import 'aos/dist/aos.css';
import HomePage from './components/HomePage';
import SearchPage from './components/SearchPage';


class App extends Component {
  componentDidMount() {
    setTimeout(() => {
      AOS.init({
        offset: isMobile ? 10 : 100,
      });
      AOS.refresh();
    }, 1500);
  }
  render(){
    return(
    <Router>
       <Routes>
        <Route path='*' element={<HomePage/>} exact/>
        <Route path='/Search' element={<SearchPage/>}/>
       </Routes>     
    </Router>   
    
  )};
}

export default App;
