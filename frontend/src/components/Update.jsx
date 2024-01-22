import React,{useState} from 'react'
import axios from 'axios';

function Update({changeView}) {
  const [name, setName] = useState("");
  const [description, setDesc] = useState("");
  const [cover, setCover] = useState("");
  const [price, setPrice] = useState(0);
  const [id , setId ] = useState(0)


  const handleUpdate= () => {
    axios.put(`http://localhost:4000/cakes/update/${id}`, {name:name, cover:cover , description:description, price:price}).then((response) => {
      console.log("Cake updated successfully:", response.data);
      changeView("Cakes");
    });
  }; 
  return (
    <div className="add">
      <label>Id:</label>
    <input type="text" value={id} onChange={(e) => setId(e.target.value)} /> 
    <label>Name:</label>
    <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
    <label>Cover:</label>
    <input type="text" value={cover} onChange={(e) => setCover(e.target.value)} />
    <label>Description:</label>
    <input type="text" value={description} onChange={(e) => setDesc(e.target.value)} />
    <label>Price:</label>
    <input type="text" value={price} onChange={(e) => setPrice(e.target.value)} />
    <button onClick={handleUpdate}>Update Cake</button>
  </div>
  )
}

export default Update