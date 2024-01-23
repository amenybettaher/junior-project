
import React, { useState } from 'react';
import Cakes from './components/Cakes.jsx';
import AddCake from './components/AddCake.jsx';
import Update from './components/Update.jsx';
import Search from './components/Search.jsx';
import logo from '../src/logo/oh ya.png';
import Footer from './components/Footer.jsx';
import './footer.css';
import './index.css';

function App() {
  const [view, setView] = useState('Cakes');
  const [category, setSelectedCategory] = useState('');

  const changeView = (newView) => {
    setView(newView);
  };

  const handleCategoryChange = (event) => {
    const newCategory = event.target.value;
    setSelectedCategory(newCategory);

    if (newCategory) {
      changeView('Category');
    }
  };

  return (
    <div className="App">
      <nav>
        <img className="logo" src={logo} alt="Logo" />
        <button onClick={() => changeView('Cakes')}>My Pastry_shop</button>
        <button onClick={() => changeView('AddCake')}>Add Food</button>
        <button onClick={() => changeView('Update')}>Update Food</button>

        <select onChange={handleCategoryChange} value={category}>
          <option value="">Show all</option>
          <option value="cakes">Cakes</option>
          <option value="burger">Burgers</option>
        </select>
      </nav>
      <div>
        {view === 'Cakes' && <Cakes category={category} />}
        {view === 'AddCake' && <AddCake changeView={changeView} />}
        {view === 'Update' && <Update changeView={changeView} />}
        
      </div>
      <Footer />
      <Search/>
    </div>
  );
}

export default App;



