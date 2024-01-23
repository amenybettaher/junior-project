import React, { useState } from 'react';
import axios from 'axios';

function AddCake({ changeView }) {
  const [name, setName] = useState('');
  const [description, setDesc] = useState('');
  const [cover, setCover] = useState('');
  const [price, setPrice] = useState(0);
  const [category, setCategory] = useState('');

  const handleAddCake = () => {
    axios
      .post('http://localhost:4000/cakes/add', {
        name: name,
        cover: cover,
        description: description,
        price: price,
        category: category,
      })
      .then((response) => {
        console.log('Cake added successfully:', response.data);
        changeView('Cakes');
      })
      .catch((error) => {
        console.error('Error adding cake:', error);
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
      <button onClick={handleAddCake}>Add</button>
      <div className="image-overlay">
        <img src="https://img.freepik.com/free-photo/front-view-female-cook-pouring-flour-table-dough-dark-dough-egg-job-bakery-hotcake-pastry-kitchen-cuisine_179666-43872.jpg?w=996&t=st=1705988300~exp=1705988900~hmac=9f303daf916c7092cef6fd8aa9f2a1d9c56a53bacb4243daa590d4b20b13ea46" alt="" />
        <div className="overlay"></div>
      </div>
    </div>
  );
}

export default AddCake;

