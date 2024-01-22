
import React, {useState} from 'react'
import Cakes from './components/Cakes.jsx'
import AddCake from "./components/AddCake.jsx";
import Update from './components/Update.jsx'
import logo from '../src/logo/oh ya.png'


function App() {
  const [view, setView] = useState('Cakes');

  const changeView = (newView) => {
    setView(newView);
  };
 
  return (
    <div className="App">
      <nav>

       <img className='logo' src={logo}/>
        <button onClick={() => changeView("Cakes")}>Cakes</button>
        <button onClick={() => changeView("AddCake")}>Add Cake</button>
        <button onClick={() => changeView("Update")}>Update Cake</button>
      </nav>
      <div>
        {view === "Cakes" && <Cakes />}
        {view === "AddCake" && <AddCake changeView={changeView} />}
        {view === "Update" && <Update changeView={changeView} />}
      </div>
    </div>
 );
}

export default App
