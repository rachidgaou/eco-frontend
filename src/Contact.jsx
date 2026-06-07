import React, {useState, useEffect}from "react";



function Contact(){
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [elements, setElements] = useState([])
    const [message, setMessage] = useState('')
     const [subject, setSubject] = useState('')
     const [editId, seteditId] = useState(null)
     /////////////////////////:linking to server//////////////
     useEffect(() => { 
      const serverLink = async()=>{
        const res = await fetch("https://eco-backend-production-4b7c.up.railway.app/contact")
        const data = await res.json()
        setElements(data)
      }
      serverLink()

     },[])
     ////////////////////////:creating elements
    const createElements=  async()=>{
      const res = await fetch("https://eco-backend-production-4b7c.up.railway.app/contact",{
        method: "POST",
        headers:{"Content-Type":"application/json" },
        body : JSON.stringify({name:name, 
    email:email, subject: subject, message: message})
       
      })
      const data = await res.json()
      setElements(prev =>[...prev,data])
    setEmail('')
    setName('')
    setMessage('')
    setSubject('')
}

/////////////::updating;;;;;;;;;;;;;;;
const updateElements=  async()=>{

  const res = await fetch(`https://eco-backend-production-4b7c.up.railway.app/contact/${editId}`,{
    method: "PUT",
    headers: {"Content-Type":"application/json"},
    body: JSON.stringify({name:name, 
    email:email, subject: subject, message: message})
   });
    const data = await res.json()

seteditId(null)
setElements(data)
   setEmail('')
    setName('')
    setMessage('')
    setSubject('')
  }

  ////////::editting:::::::::::::::
  const edit =(id)=>{
   const found = elements.find((item) => item._id === id);

if (!found) return;

setName(found.name);
setEmail(found.email);
setMessage(found.message);
setSubject(found.subject);
seteditId(id);
  }
  ////////////:adding elements::::::::::::::::::
  const addElements=()=>{
    if (editId ===null){
      createElements()
    } else {updateElements()

    }
 
 
}

////////:::deleting/////////////////////
const del = async (id) => {
  await fetch(`https://eco-backend-production-4b7c.up.railway.app/contact/${id}`, {
    method: "DELETE"
  });

  setElements(elements.filter(n => n._id !== id));
};
return(
    
    <div>
      
        <div className="contactContainer">
          <div className="sub">
          
        <label for = "email">Email
         <input type="email" value="rachidgaou@HOTMAIL.com" readOnly /></label>
       
         <label for = "text">Phone Number
         <input type="text" value=" 067676789" readOnly/></label>


       <label for = "text"> Name
       <input type="text"  value={name}
       onChange={(e)=>{setName(e.target.value)}} /></label>

        <label for = "email"> Email
        <input type="email" value={email}
        onChange={(e)=>{setEmail(e.target.value)}}/></label>
      
   
         <label for = "text"> Subject
         <input type="text" value={subject}
         onChange={(e)=>setSubject(e.target.value)}/></label>

          <label for ='textarea'> Message
          <textarea value={message}
        onChange={(e)=>{setMessage(e.target.value)}}> </textarea></label>
          
          <button className="submit" onClick={addElements}>Submit</button>
          </div>
           
            </div>
          {elements.map((s)=><li key={s.id}>{s.name}{s.email} 
            {s.subject}  {s.message} 
            <button onClick={() => del(s._id)}>Delete</button>
           <button onClick={() => edit(s._id)}>Edit</button></li>)}
    </div>
   
)
}
export default Contact