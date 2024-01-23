import React, { useState, useEffect } from 'react';
import axios from 'axios';
function Category({ category }) {
  const [cakes, setCakes] = useState([]);

  const fetchCategory = async () => {
    try {
      
      if (category) {
        const res = await axios.get(`http://localhost:4000/${category}`);
        console.log('Response data:', res.data);
        setCakes(res.data);
      }
    } catch (err) {
      console.log('Error fetching data:', err);
    }
  };
  useEffect(() => {

    fetchCategory();
  }, [category]);

  
  if (!category) {
    return <div>Please select a category</div>;
  }

  return (
    <div>
      <h2>{category.charAt(0).toUpperCase() + category.slice(1)} in Category: {category}</h2>
      <div className="cakes-container">
        {cakes.map((cake) => (
          <div key={cake.id} className="cake-card">
            <h3>{cake.name}</h3>
            <img src={cake.cover} alt={cake.name} />
            <p>{cake.description}</p>
            <p>Price: {cake.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Category;