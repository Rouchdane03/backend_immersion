import { useState } from 'react';
import './App.css'
import Filters from './components/Filters';
import Introduction from './components/Introduction';
import ProjectTimeLine from './components/ProjectTimeLine';
import FilterContext from './FilterContext';
import Footer from './components/Footer';

const App = ()=> {
 
  const [selectedFilter, setSelectedFilter] = useState("All");

  return (
    <FilterContext.Provider value={setSelectedFilter}>
      <h1 id='header'>20 backend projects</h1>
      <Introduction/>
      <Filters/>
      <p style={{textAlign:'center', fontFamily:"Inconsolata", fontWeight:'bold'}}>

          {(selectedFilter === "All")?"":"Filter Selected : "}

          <span style={{fontFamily:"Playwrite US Trad Guides",color:'black',backgroundColor:'yellow',borderRadius:5,padding:(selectedFilter === "All")?0:4}}>
          {(selectedFilter === "All")?"":`${selectedFilter}`}
          </span>

      </p>
      <ProjectTimeLine filtre={selectedFilter}/>
      <Footer/>
    </FilterContext.Provider>
  )
}

export default App;
