import React, { useState } from "react";
import ToDoList  from "./TodoList";

const App =()=>{
 const[item,setitems]=useState();
 const[Items,setItems]=useState([]);

const items=(event)=>{
  
      setitems(event.target.value);
  
}

const listOfItems=()=>{
  setItems((oldItems)=>{
    return [...oldItems,item];

    
  });
  setitems('');

};


  return(
    <>
      <div className="main_div">
        <div className="center_div">
          <br/>
          <h1>To Do List</h1>
          <br/>
          <input type="text" placeholder="add items" value={item} onChange={items}/>
          <button onClick={listOfItems}> + </button>

          <ol>
          
         { Items.map((itemvalue)=>{  //we ccalling the empty array using map
           return <ToDoList text={itemvalue}/>
          })}
          
        </ol>

        </div>

        
      </div>
    </>
  )
};

export default App;