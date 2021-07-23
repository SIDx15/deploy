import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import Recipes from './components/Recipes';
import Axios from 'axios';


function App() {
  //useeffect used to do things when page is  loaded so use your consle in thre
  //until the reaspknse no action taken async
  useEffect( () => {
     getrecipes();
  },[]);

 

  

  const getrecipes =( async ()=>{
    const d = await Axios.get('https://api.edamam.com/search?q='+search+'&app_id=24e117f7&app_key=1efbbc3645fa3e1d922ab0d555ae1fb8');
    console.log(d);
    setrecipes(d.data.hits);
    
  });


  const [search, setsearch] = useState("chicken");
  const [recipes, setrecipes] = useState([]);

  const app_id = "24e117f7";
  const app_key = "08a7a6af2797f7fd00180b36c3fbfbb1";

  const onInputchange = (e) => {
    console.log(e.target.value);
    setsearch(e.target.value);
  };

  const onsearch =()=>{
    getrecipes();
  };
  


  return (
    <div className="App">

      <Header s={search} onInputchange={onInputchange}
      onsearch={onsearch} />
      
      <div className="container">
      <Recipes recipes={recipes}/>
      </div>


    </div>

  )
}

export default App;
