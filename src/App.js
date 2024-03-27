// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import { Routes, Route, useLocation } from 'react-router-dom';
import Home from './components/Home';
import Quto from './Quto';
import Restorend from './Restorend';
import Foods from './Foods';
import Contact from './Contact';


function App() {
  const a = useLocation();
  const b = a.pathname === `/`;

  return (
    <div className="App" >
      {b}
      <Navbar/>
      <div>
      <Routes>
          <Route index path='/' element={<Home/>} />
          <Route  path='/Quto' element={<Quto/>} />
          <Route  path='/Restorend' element={<Restorend/>} />
          <Route path='/Foods' element={<Foods/>} />
          <Route path='/Contact' element={<Contact/>} />
      </Routes>
      </div>
    </div>
  );
}

export default App;
