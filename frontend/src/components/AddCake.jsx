import React,{useState} from 'react'
import axios from 'axios'

function AddCake({ changeView }) {
  const [name, setName] = useState("");
  const [description, setDesc] = useState("");
  const [cover, setCover] = useState("");
  const [price, setPrice] = useState(0);


  const handleAddCake = () => {
    axios.post("http://localhost:4000/cakes/add", { name:name, cover:cover , description:description, price:price}).then((response) => {
      console.log("Cake added successfully:", response.data);
      changeView("Cakes");
    });
  }; 

  return (
    <div className="add">
      
      <label>Name:</label>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      <label>Cover:</label>
      <input type="text" value={cover} onChange={(e) => setCover(e.target.value)} />
      <label>Description:</label>
      <input type="text" value={description} onChange={(e) => setDesc(e.target.value)} />
      <label>Price:</label>
      <input type="text" value={price} onChange={(e) => setPrice(e.target.value)} />
      <button onClick={handleAddCake}>Add Cake</button>
      <img src="https://img.freepik.com/photos-premium/gateau-au-chocolat-glacage-au-chocolat-glacage-au-chocolat_662214-108410.jpg" alt="" />
    </div>
  );
}

export default AddCake;