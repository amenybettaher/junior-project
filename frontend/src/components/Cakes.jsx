import React, { useState, useEffect } from 'react';
import axios from "axios";

function Cakes() {
  const [cakes, setCakes] = useState([]);

  useEffect(() => {
    const fetchAll = async () => {
      try {
        const res = await axios.get("http://localhost:4000/cakes");
        console.log("Response data:", res.data);
        setCakes(res.data);
      } catch (err) {
        console.log("Error fetching data:", err);
      }
    };
    fetchAll();
  }, []);

  const handleDelete = async (cakeId) => {
    try {
      await axios.delete(`http://localhost:4000/cakes/delete/${cakeId}`);
      setCakes((prevCakes) => prevCakes.filter(cake => cake.id !== cakeId));
    } catch (err) {
      console.log("Error deleting cake:", err);
    }
  };

  return (
    <div>
      <img src="https://www.laurent.com.au/wp-content/uploads/2019/06/banner2-5-5756x1727-c-center-1500x0-c-default.jpg" alt="" />
      <div className='Cakes'>
        {cakes.map((cake) => (
          <div className='cake' key={cake.id}>
            <h1>{cake.name}</h1>
            {cake.cover && <img src={cake.cover} alt={cake.name} />}
            <span>{cake.description}</span>
            <h3>{cake.price}</h3>
            <button className='delete' onClick={() => handleDelete(cake.id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cakes;





