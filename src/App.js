import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Service from './Pages/Service';

function App() {
  return (
    <>
   <Routes>
     <Route index element={<Home/>} />
     <Route path='/' element={<Home/>} />
     <Route path='service' element={<Service/>} />
     <Route path='*' element={<p>Page Not Found</p>} />
   </Routes>
   
   </>
  );
}

export default App;
