import React, {useState, useEffect} from "react";
import "./App.css"
function Test(){
 const [name, setName] = useState('')
 const [price, setPrice] = useState('')
 const [img, setImg]= useState(null)
 const [product, setProduct] = useState([])
 const [form, setForm]= useState(false)
 const [editId, seteditId] = useState(null)
//////////////////link to a server ///////////
useEffect(()=> { 
    const toServer = async()=>{
        try {
    const res = await fetch ("http://localhost:8000/product1")
    const data = await res.json()
    setProduct(data);
} catch (err){console.error("Error fetching products:", err);}}
toServer()
},[])
 ////////////////////////adding prodcut;;;;;
 const addProduct = ()=>{
    if(editId!==null){
        updateProduct()
    setForm(false)
    } else{createProduct()
        setForm(false)
    }
 }
 /////////////////:creating///////////////////////
const createProduct = async () => {
  try {
    const res = await fetch("http://localhost:8000/product1", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: name,
        price: price,
        img: img
      })
    });

    const data = await res.json();
    setProduct((prev) => [...prev, data]);
    console.log("Created product:", data);

    setName("");
    setPrice("");
    setImg("");

  } catch (err) {
    console.error("error fetching products", err);
  }
};


/////////updating////////////////:
       const updateProduct = async () => {
  try {
    if (editId !== null) {
      const res = await fetch(`http://localhost:8000/product1/${editId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name,
          price: price,
          img: img
        })
      });

      const data = await res.json();

      // update UI properly
      setProduct((prev) =>
        prev.map((item) =>
          item._id === editId ? data : item
        )
      );

      seteditId(null);
      setName("");
      setPrice("");
      setImg("");
    }
  } catch (err) {
    console.error("error updating product", err);
  }
};

        ////////editing////////////////////
        const edit = (id)=>{
            const found = product.find((item)=>item.id===id)
            if (!found)return;
         
            seteditId(id)
            setPrice(found.price)
            setName(found.name)
            setImg(found.img)
        }

       /////////////////deleting/////////////////////
      const del = async (id) => {
  try {
    const res = await fetch(`http://localhost:8000/product1/${id}`, {
      method: "DELETE"
    });

    await res.json();

    setProduct((prev) =>
      prev.filter((item) => item._id !== id)
    );

  } catch (err) {
    console.error("error deleting product", err);
  }
};
 
    return (
        <>
        <button onClick={()=> setForm(true)} className="productadd">Add New Product</button>
        {form &&(<div className="prodform">
            
            <img src={img} className="imgpr"
             />
             <input
             type="text"
            value={img}
            onChange={(e) => setImg(e.target.value)}
            placeholder="Enter image URL" className="imgtxt"/>

            <input type="text" className="prodname" 
            placeholder="Name"value={name}
            onChange={(e)=>setName(e.target.value)}/>

            <input type="text"className="price" 
            placeholder="Price" value={price}
            onChange={(e)=>setPrice(e.target.value)}/>

            
            <button className="adding"
            onClick={addProduct}>Add Product</button>
           

                </div>)}
                <div  className="divcontainer">
                   
                 {product.map((s)=>
                    <div className="cnt"key={s.id}>
                <img src={s.img}></img> <p >{s.name}</p>
                <p >Price:  {s.price}</p>
                <button onClick={()=>del(s.id)} className="delpro">Delete</button>
                <button onClick={()=>edit(s.id)} className="editpro">Edit</button>
                </div> )}</div>

        </>
    )
}
export default Test