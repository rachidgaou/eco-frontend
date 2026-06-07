import React from "react";
import { useNavigate } from "react-router-dom";

function NavBar() {
  const navigate = useNavigate()
  return (
    <nav>
      <div className="logo"><h1>MyStore</h1></div>

      <div className="links">
        <button >Home</button>
        <button onClick={()=>{navigate("/About")}}>About</button>
        <button onClick={()=>{navigate("/products")}}>Products</button>
        <button>Contact</button>
      </div>
    </nav>
  );
}

export default NavBar;