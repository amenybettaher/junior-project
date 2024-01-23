
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Search from './Search.jsx';

function Cakes({ category }) {
  const [cakes, setCakes] = useState([]);
  const [filteredCakes, setFilteredCakes] = useState([]);

  useEffect(() => {
    const fetchAll = async () => {
      try {
        const res = await axios.get(`http://localhost:4000/cakes${category ? `/${category}` : ''}`);
        console.log('Response data:', res.data);
        setCakes(res.data);
      } catch (err) {
        console.log('Error fetching data:', err);
      }
    };
    fetchAll();
  }, [category]);

  const handleDelete = async (cakeId) => {
    try {
      await axios.delete(`http://localhost:4000/cakes/delete/${cakeId}`);
      setCakes((prevCakes) => prevCakes.filter((cake) => cake.id !== cakeId));
    } catch (err) {
      console.log('Error deleting cake:', err);
    }
  };

  const handleSearch = async (searchTerm) => {
    try {
      const res = await axios.get(`http://localhost:4000/cakes/search/${searchTerm}`);
      setFilteredCakes(res.data);
    } catch (err) {
      console.log('Error searching cakes:', err);
    }
  };

  return (
    <div className="home">
      <Search handleSearch={handleSearch} />
      <img src="https://www.laurent.com.au/wp-content/uploads/2019/06/banner2-5-5756x1727-c-center-1500x0-c-default.jpg" alt="" />
      <div className="Cakes">
        {filteredCakes.length > 0 ? (
          filteredCakes.map((cake) => (
            <div className="cake" key={cake.id}>
              <h1>{cake.name}</h1>
              {cake.cover && <img src={cake.cover} alt={cake.name} />}
              <span>{cake.description}</span>
              <h3>{cake.price}</h3>
              <button className="delete" onClick={() => handleDelete(cake.id)}>
                Delete
              </button>
            </div>
          ))
        ) : (
          cakes.map((cake) => (
            <div className="cake" key={cake.id}>
              <h1>{cake.name}</h1>
              {cake.cover && <img src={cake.cover} alt={cake.name} />}
              <span>{cake.description}</span>
              <h3>{cake.price}</h3>
              <button className="delete" onClick={() => handleDelete(cake.id)}>
                Delete
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Cakes;
