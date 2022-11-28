import './App.css';
import Navbar from './Components/Navbar';
import {Routes, Route} from 'react-router-dom';
import Search from './pages/Search';
import Favourites from './pages/Favourites';
import Stats from './pages/Stats';
import Channel from './pages/Channel';
import Sidebar from './Components/Sidebar';
import Home from './pages/Home';
import PlayScreen from './pages/playScreen/PlayScreen';


function App() {
  return (
    <div className="App">
     <Routes>
        <Route path='/' element={<Home />} exact></Route>
        <Route path='/watch:id' element={<PlayScreen />} exact></Route>
        <Route path='/search' element={<Search/>}></Route>
        <Route path='/favourites' element={<Favourites />}></Route>
        <Route path='/stats' element={<Stats />}></Route>
        <Route path='/channel-details' element={<Channel/>}></Route>
     </Routes>
    </div>
  );
}

export default App;
