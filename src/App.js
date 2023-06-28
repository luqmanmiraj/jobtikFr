import './App.css';
// import Tut from './tut';
// import SunEdito from './sun';
import Dictaphone from './speech';

import Rt from './pages/rt'
import Nav from './com/Nav';
import Footer from './com/Footer';

function App() {
  return (
    <div className="App">

      <header className="App-header">

      <Nav />  
      <Rt />
      <Footer />
        

      </header>
      <Dictaphone />
      

    </div>
  );
}

export default App;
