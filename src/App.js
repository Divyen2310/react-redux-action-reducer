import "./App.css";
import { Route, Routes, NavLink } from "react-router-dom";
import Home from "./Pages/Home";
import Service from "./Pages/Service";
import ServiceDetails from "./Pages/ServiceDetails";
import FormikForm from "./Pages/Form";
import { Container, Nav, NavItem } from "reactstrap";
import DropeZone from "./Pages/DropeZone";
import Draggable from "./Pages/Drag/Draggable";
import Editable from "./Pages/Editable/Editable";
import ReactSelect from "./Pages/ReactSelect";
import ContactForm from "./Pages/ContactForm";
import ImageWithStatusText from "./Pages/ImageLoading";

const CustomNavLink = ({ to, name }) => (
  <NavItem>
    <NavLink to={to} className={({ isActive }) => "nav-link" + (isActive ? " activeNav" : "")}>
      {name}
    </NavLink>
  </NavItem>
)

function App() {
  return (
    <Container>
      <Nav>
        <CustomNavLink to="/" name="Home" />
        <CustomNavLink to="/service" name="Service" />
        <CustomNavLink to="/form" name="Formik Form" />
        <CustomNavLink to="/dropezone" name="Drope Zone" />
        <CustomNavLink to="/drag" name="Drag" />
        <CustomNavLink to="/editable" name="Editable" />
        <CustomNavLink to="/reactSelect" name="React Select" />
        <CustomNavLink to="/firebaseform" name="FireBase Form" />
        <CustomNavLink to="/imageloading" name="Image" />
      </Nav>
      <div className="py-1">
        <Routes>
          <Route index element={<Home />} />
          <Route path="/" element={<Home />} />
          <Route path="service" element={<Service />} />
          <Route path="serviceDetails/:id" element={<ServiceDetails />} />
          <Route path="form" element={<FormikForm />} />
          <Route path="dropezone" element={<DropeZone />} />
          <Route path="drag" element={<Draggable />} />
          <Route path="editable" element={<Editable />} />
          <Route path="reactSelect" element={<ReactSelect />} />
          <Route path="firebaseform" element={<ContactForm />} />
          <Route path="imageloading" element={<ImageWithStatusText />} />
          <Route path="*" element={<p>Page Not Found</p>} />
        </Routes>
      </div>
    </Container>
  );
}

export default App;
