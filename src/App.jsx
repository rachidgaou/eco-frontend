
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/navbar.jsx";
import Home from "./home.jsx";
import Footer from "./components/Footer.jsx";
import Product1 from "./product1.jsx";
import About from "./About.jsx";
import Contact from "./Contact.jsx"
import Products from "./products.jsx";


function App() {
  return (
    <>
      <NavBar />

      <Routes>
        <Route path="/" element={<Home />} />
          <Route path="/product1" element={<Product1 />} />
          <Route path = "/About" element = {<About/>}/>
          <Route path = "/Contact" element ={<Contact/>}/>
          <Route path = "/products" element = {<Products/>}/>
      </Routes>
        <Footer/>
    </>
  );
}

export default App;
