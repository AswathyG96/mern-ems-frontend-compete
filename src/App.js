import { Route,Routes } from 'react-router-dom';
import './App.css';
import Home  from './pages/Home/Home';
import Edit from './pages/Edit/Edit';
import Profile from './pages/Profile/Profile';
import Register from './pages/Register/Register';
import Pagenf from './pages/PAGENOTFOUND/Pagenf';
import Header from './Components/Headers/Header';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div>
      <Header/>
     {/* <h1  className="App mt-5 text-center text-success" ><i className='fa-solid fa-users'></i>EMS</h1> */}
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/edit/:id' element={<Edit/>}/>
      <Route path='/profile/:id' element={<Profile/>}/>
      <Route path='*' element={<Pagenf/>}/>

     </Routes>
     <Footer/>
    </div>
  );
}

export default App;
