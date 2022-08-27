import './App.css';
import Navbar from './Components/Navbar';
import {Routes, Route} from 'react-router-dom';
import Search from './pages/Search';
import Favourites from './pages/Favourites';
import Stats from './pages/Stats';
import Channel from './pages/Channel';

function App() {
  return (
    <div className="App">
     <Navbar/>
     <Routes>
      <Route path='/search' element={<Search/>}></Route>
        <Route path='/favourites' element={<Favourites />}></Route>
        <Route path='/stats' element={<Stats />}></Route>
        <Route path='/channel-details/' element={<Channel/>}></Route>
     </Routes>
    </div>
  );
}

export default App;
