import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Home from "./components/pages/Home";
import Contact from "./components/pages/Contact";
import Company from "./components/pages/Company";
import NewProject from "./components/pages/NewProject";
import Navbar from "./components/pages/layout/Navbar";
import Footer from "./components/pages/layout/Footer";
import Projects from "./components/pages/Projects";

import Container from "./components/pages/layout/Container";

import './App.css';

function App() {
  return (
    <Router>
      <Navbar></Navbar>
      <Container customClass="min-height">
      <Routes>
          <Route exact path="/" element={<Home/>}>
          </Route>

          <Route exact path="/projects" element={<Projects/>}>
          </Route>

          <Route exact path="/company" element={<Company/>}>
          </Route>

          <Route exact path="/contact" element={<Contact/>}>
          </Route>

          <Route exact path="/newproject" element={<NewProject/>}>
          </Route>
      </Routes>
      </Container>
      <Footer></Footer>

    </Router>

  )
}

export default App;
