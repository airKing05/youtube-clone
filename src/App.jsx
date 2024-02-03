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
import MainLayout from './layouts/MainLayout';


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
        <Route path='/' element={
          <MainLayout>
            <Home />
          </MainLayout>
        } exact>
        </Route>
        <Route path='/auth' element={<Auth />} exact></Route>
        <Route path='/watch/:id' element={
          <MainLayout componentName="playScreen">
            <PlayScreen />
          </MainLayout>
        } exact>
        </Route>
        <Route path='/search/:query' element={
          <MainLayout>
            <Search />
          </MainLayout>
        }></Route>
        <Route path='/subscriptions' element={
          <MainLayout>
            <Subscriptions />
          </MainLayout>
        }>
        </Route>
        <Route path='/favourites' element={<Favourites />}></Route>
        <Route path='/stats' element={<Stats />}></Route>
        <Route path='/channel-details/:channelId' element={
          <MainLayout>
            <Channel />
          </MainLayout>
        }>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
