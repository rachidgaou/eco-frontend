
import { useNavigate } from "react-router-dom";
import "./App.css"
function Home(){
    const navigate = useNavigate();
  return(
<div>
     <h1>Best products at the best prices</h1>
 <div className="gap">
  <div className="button">
    <button className="b1">Electronics</button>
    <button className="b1">Clothing</button>
    <button className="b1">Shoes</button>
    <button className="b1">Accessories</button>
    </div>
 

    <div className="imgcontainer1">
    <div>
    <img src="public/images/1.jpg" alt="Product 1"/>
    <p>Name</p>
    <p>Price</p>
   <button className="view" onClick={() => navigate("/product1")}>View</button>
    </div>
     <div>
    <img src="public/images/2.jpg" alt="Product 2"/>
    <p>Name</p>
    <p>Price</p>
    <button className="view">View</button>
    </div> 
    <div>
    <img src="public/images/3.jpg" alt="Product 3"/>
    <p>Name</p>
    <p>Price</p>
    <button className="view">View</button>
    </div>

     <div>
    <img src="public/images/4.jpg" alt="Product 4"/>
    <p>Name</p>
    <p>Price</p>
    <button className="view">View</button>
    </div> 
    </div>
</div>

    <div className="imgcontainer2">
    
    <div>
    <img src="public/images/5.jpg"/>
    <p>Name</p>
    <p>Price</p>
    <button className="view">View</button>
    </div> <div>
    <img src="public/images/6.jpg"/>
    <p>Name</p>
<p>Price</p>
<button className="view">View</button>
    </div> <div>
    <img src="public/images/7.jpg"/>
    <p>Name</p>
    <p>Price</p>
    <button className="view">View</button>
    </div> <div>
    <img src="public/images/8.jpg"/>
    <p>Name</p>
    <p>Price</p>
    <button className="view">View</button>
    </div>  </div>
     <div className="imgcontainer3"> 

      <div >
    <img src="public/images/9.jpg"/>
    <p>Name</p>
    <p>Price</p>
    <button  className="view">View</button>
    </div> <div>
    <img src="public/images/10.jpg"/>
    <p>Name</p>
    <p>Price</p>
    <button  className="view">View</button>
    </div> <div>
    <img src="public/images/11.jpg"/>
    <p>Name</p>
    <p>Price</p>
    <button  className="view">View</button>
    </div> <div>
    <img src="public/images/12.jpg"/>
    <p>Name</p>
    <p>Price</p>
    <button  className="view">View</button>
    </div>
    </div>
    <div>
      <h2>Why Choose Us (trust section)</h2>
<ul>
<li>Short points like:</li>

<li>Fast delivery</li>
<li>Secure payment</li>
<li>24/7 support</li>
</ul>
    </div>
    </div>
  )

}
export default Home