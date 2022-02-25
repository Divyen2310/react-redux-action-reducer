import './App.css';
import { Route, Routes, NavLink } from 'react-router-dom';
import Home from './Pages/Home';
import Service from './Pages/Service';
import ServiceDetails from './Pages/ServiceDetails';
import FormikForm from './Pages/Form';
import { Container, Nav, NavItem, } from 'reactstrap';
import DropeZone from './Pages/DropeZone';

function App() {
  return (
    <Container>
      <Nav>
        {/* <NavItem> */}
        <NavLink
          to="/"
          className={({ isActive }) => "nav-link" + (isActive ? " activeNav" : "")} >Home
        </NavLink>

        <NavItem>
          <NavLink
            to='/service'
            className={({ isActive }) => "nav-link" + (isActive ? " activeNav" : "")} >Service </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            to='/form'
            className={({ isActive }) => "nav-link" + (isActive ? " activeNav" : "")} >Formik Form
          </NavLink>
        </NavItem>
        {/* <NavItem>
          <NavLink 
          to='/dropezone'
          className={({ isActive }) => "nav-link" + (isActive ? " activeNav" : "")} >Drope Zone</NavLink>
        </NavItem> */}
      </Nav>
      <div className='py-1' >
        <Routes>
          <Route index element={<Home />} />
          <Route path='/' element={<Home />} />
          <Route path='service' element={<Service />} />
          <Route path='serviceDetails/:id' element={<ServiceDetails />} />

          <Route path='form' element={<FormikForm />} />
          <Route path='dropezone' element={<DropeZone />} />
          <Route path='*' element={<p>Page Not Found</p>} />
        </Routes>
      </div>

    </Container>
  );
}

export default App;
