import './App.css';
import Navbar from './Components/Navbar';
import {Routes, Route, useNavigate} from 'react-router-dom';
import Search from './pages/Search';
import Favourites from './pages/Favourites';
import Stats from './pages/Stats';
import Channel from './pages/Channel';
import Sidebar from './Components/Sidebar';
import Home from './pages/Home';
import PlayScreen from './pages/playScreen/PlayScreen';
import Auth from './pages/Auth';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import Subscriptions from './pages/Subscriptions';


function App() {
  const {loading, accessToken} = useSelector((state) => state.auth)

  const navigate = useNavigate();

  useEffect(()=>{
    if (!loading && !accessToken){
      navigate('/auth');
    }
  }, [accessToken, navigate])

  return (
    <div className="App">
     <Routes>
        <Route path='/' element={<Home />} exact></Route>
        <Route path='/auth' element={<Auth />} exact></Route>
        <Route path='/watch/:id' element={<PlayScreen />} exact></Route>
        <Route path='/search/:query' element={<Search/>}></Route>
        <Route path='/subscriptions' element={<Subscriptions />}></Route>
        <Route path='/favourites' element={<Favourites />}></Route>
        <Route path='/stats' element={<Stats />}></Route>
        <Route path='/channel-details/:channelId' element={<Channel/>}></Route>
     </Routes>
    </div>
  );
}

export default App;
