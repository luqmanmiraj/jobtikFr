import './App.css';
import React from 'react';

// import Tut from './tut';
// import SunEdito from './sun';
import Dictaphone from './speech';

import Rt from './pages/rt'
import Nav from './com/Nav';
import Footer from './com/Footer';

function App() {
  const [searchbarwidth, setSearchBarwidth] = React.useState(30);
  const [searchbarheight, setSearchBarHeight] = React.useState(100);

  function searchwidth(arg){
    if(arg == "inc")
       setSearchBarwidth(searchbarwidth+10);
    if(arg == "dec" && searchbarwidth>30)
       setSearchBarwidth(searchbarwidth-10);
    if(arg == "zero"){
      setSearchBarwidth(0);
    }
    if(arg == "reset"){
      setSearchBarwidth(30);
    }
  }
  function searchheight(){
    if(searchbarheight==100)
      setSearchBarwidth(0);
    else setSearchBarHeight(100)
  }
  return (
    <div className="App">

      <header className="App-header">

      <Nav /> 
        <div className="hundered">
            <div className='leftsidebar' style={{width:(100-searchbarwidth-1)+"%"}}>
               <Rt />
            </div>
            <div className="rightsidebar" style={{width:(searchbarwidth)+"%"}}>
              <Dictaphone searchwidth={searchbarwidth} searchheight={searchbarheight} fnsearchwidth={searchwidth} fnsearchheight={searchheight} />
            </div>

      </div>
      
      {/* <Footer /> */}
      {/* <Dictaphone /> */}
        

      </header>
      

    </div>
  );
}

export default App;
