import React from "react";
import { useNavigate } from "react-router-dom";
function Products(){
  return(
    <div>
      <div className="prodcont">
      <div className="cont1">
        <div className="div">
      <img src="images/1.jpg"/>
      <label className="labe1"> Product 1</label>
      <p className="one">Price: 300 dh</p>
      </div>
         <div className="div"> 
      <img src="images/2.jpg"/>
      <label className="labe1"> Product 2</label>
      <p className="one">Price: 300 dh</p></div>
      <div className="div">
      <img src="images/5.jpg"/>
      <label className="labe1"> Product 5</label>
      <p className="one">Price: 300 dh</p>
     </div> </div>

      <div className="cont2">

        <div className="div">
          <img src="images/3.jpg"/>
      <label className="labe1"> Product 3</label>
      <p className="one">Price: 300 dh</p></div>
     
      <div className="div">
     < img src="images/4.jpg"/>
      <label className="labe1"> Product 4</label>
      <p className="one">Price: 300 dh</p>
      </div>
      <div className="div">
      <img src="images/6.jpg"/>
      <label className="labe1"> Product 6</label>
      <p className="one">Price: 300 dh</p>
     
      </div>
      </div>
    </div></div>
  )
}
export default Products