import { Routes, Route } from 'react-router-dom';

import {Header, Footer} from './components';
import { Home, Users, User, Posts } from './pages';

import './App.css';



function App() {
  return (
    <div className='container-fluid'>
      <Header/>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/users' element={<Users />}/>
        <Route path='/users/:id' element={<User />}/>
        <Route path='/posts' element={<Posts />}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
