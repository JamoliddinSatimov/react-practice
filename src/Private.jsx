import { Routes, Route } from 'react-router-dom';
import { useContext } from 'react';

import {Header, Footer} from './components';
import { Home, Users, User, Posts } from './pages';
import { ThemeContext } from './context/theme-context';

import './Private.css'




function Private() {

  const {theme} = useContext(ThemeContext)

  return (
    <div className='container-fluid p-0'>
      <Header/>
      <div className={!theme?undefined:'dark'}>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/users' element={<Users />}/>
        <Route path='/users/:id' element={<User />}/>
        <Route path='/posts' element={<Posts />}/>
      </Routes>
      </div>
      <Footer/>
    </div>
  );
}

export default Private;
