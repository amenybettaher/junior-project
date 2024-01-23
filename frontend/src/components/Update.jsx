import React, { useState } from 'react';
import axios from 'axios';
import '../index.css'

function Update({ changeView }) {
  const [name, setName] = useState('');
  const [description, setDesc] = useState('');
  const [cover, setCover] = useState('');
  const [price, setPrice] = useState(0);
  const [category , setCategory] =useState('')

  const handleUpdate = () => {
    axios
      .put(`http://localhost:4000/cakes/update/${name}`, {
        name: name,
        cover: cover,
        description: description,
        price: price,
        category : category
      })
      .then((response) => {
        console.log('Cake updated successfully:', response.data);
        changeView('Cakes');
      })
      .catch((error) => {
        console.error('Error updating cake:', error);
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
      <label>Category:</label>
      <input type="text" value={category} onChange={(e) => setCategory(e.target.value)} />
      <button onClick={handleUpdate}>Update</button>
      <img src='https://img.freepik.com/premium-photo/cooking-burger-with-bacon-shrimp-hands-chef-dark-background_187166-37591.jpg'/>
    </div>
  );
}

export default Update;