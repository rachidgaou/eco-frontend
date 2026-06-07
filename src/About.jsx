import React from "react";
import "./App.css"
import { useNavigate } from "react-router-dom";
import Home from "./home";

function About(){
    const navigate = useNavigate()
    
    return(
       <div>
        <div className="part1">
            <div>
        <h2>
            About Us </h2>
<h3>"We provide high-quality products at affordable prices."</h3>
       </div>
       <div>
        <h2>Our Story</h2>
        <ul >
            <li>When the store started</li>
            <li>Why it was created</li>
            <li>What problem it solves</li>
        </ul>
        </div>
       
     <div>
        <h2>Our mission</h2>
        <ol>
            <li>Deliver quality products</li>
             <li>Make online shopping easy</li>
              <li>Offer competitive prices</li>
        </ol> </div>
        <div>
        <h2>Why Choose Us</h2>
        <ol>
            <li>ast delivery</li>
             <li>Secure payments</li>
              <li>Quality products</li>
        </ol>
      </div></div>
      <div className="part2">
         <h2>Have questions?"</h2>
        <button className="contact" onClick={()=>{navigate("/Contact")}}>Contact Us</button>
        </div>
       </div> 
    )
}
export default About