import logo from './logo.svg';
import './App.css';
import Navbar from './component/Navbar';
import Aside from './component/Aside';
import Header from './component/Header';
import Main from './component/Main';

function App() {
  return (
    <div className="App">
        <Navbar/> 
        <div className='realPageContainer'>
          <Aside/>
          <div className='rightPageContainer donw'>
            <Header/>
           <Main/>
          </div>
        </div>
           
    </div>
  );
}

export default App;
