import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Service from './Pages/Service';
import ServiceDetails from './Pages/ServiceDetails';

function App() {
  return (
    <>
   <Routes>
     <Route index element={<Home/>} />
     <Route path='/' element={<Home/>} />
     <Route path='service' element={<Service/>} />
     <Route path='serviceDetails/:id' element={<ServiceDetails/>} />
     <Route path='*' element={<p>Page Not Found</p>} />
   </Routes>
   
   </>
  );
}

export default App;
