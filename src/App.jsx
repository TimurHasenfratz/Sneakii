// App.js
import {  Routes, Route } from "react-router-dom";
import Home from './Home';
import About from './About.jsx';
import Sneaker from "./Sneaker.jsx";
import Navbar from "./Navbar";
import Login from "./Login";
import Contact from "./Contact";


const App = () => {
 return (
    <>
      

    <Routes>
  
        <Route path='/' element= {<Navbar />}>
        <Route index element = {<Home />} />
        
        <Route path="/Sneaker" element = {<Sneaker />} />
        <Route path="/About" element = {<About />} />
        <Route path="/Login" element = {<Login />} />
        <Route path="/Contact" element = {<Contact />} />
        

      </Route>
    </Routes>

 
    </>
 );
};

export default App;