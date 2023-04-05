import React from "react";
import Entry from "./components/entry";
import List from "./components/list";
import Day7 from "./components/day7";
import Day8 from "./components/day8";


function createEntry(items) {
  return (
    <Entry
      key={items.id}
      imgUrl={items.imgUrl}
      name={items.name}
      price={items.price}
    />
  );
}

function App() {
  return (
    <div>
    <Day8/>
      <h1 style={{ textAlign:"center"}}>
         Products
      </h1>
      <dl >{List.map(createEntry)}</dl>
      <Day7/> 
      
    </div>
  );
}

export default App;
